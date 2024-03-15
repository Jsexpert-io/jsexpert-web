import EmptyProjectCard from "~/components/EmptyStates/emptyProjectCard";

import type { LoaderFunctionArgs } from '@remix-run/node';
export const loader = async ({ request, params }: LoaderFunctionArgs) => {
    const user = await requireUser(request)
    const queryParams = new URLSearchParams(request.url.split('?')[1])
    const projectId = queryParams.get('projectId')
    const action = queryParams.get('action')
    const projectStatus = queryParams.get('status')
    console.log('projectId', projectId, action)

    const projectService = new ProjectService()
    if (action === 'delete' && projectId) {
        try {
            await projectService.remove(projectId, user.id)
            return redirect('/dashboard/projects')
        } catch (error) {
            console.log('error', error)
            return redirect('/dashboard/projects')
        }

    }
    const projects = await projectService.findAllByUser(user.id)

    return { projects, action, projectId, projectStatus }
}



export default function Hello() {
    const { projects, action, projectId,
        projectStatus
    } = useLoaderData()
    const navigate = useNavigate();
    console.log('projects', action, projectId, projects)
    const fetcher = useFetcher()
    return (
        <div className="max-w-7xl mx-auto">
            {
                projectStatus === 'success' && (
                    <Notification type="success" message="Project created successfully"
                        open={true}
                        setOpen={() => {
                            navigate('/dashboard/projects')
                        }}
                        title="Success"
                    />
                )
            }
            {projects?.length > 0 ? (
                <div className="mt-4">
                    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Projects</h3>
                        <div className="mt-3 sm:ml-4 sm:mt-0">
                            <NewProjectButton action={action} />
                        </div>
                    </div>
                    <ul role="list" className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

                        {projects.map((project) => (
                            <ProjectSmallCard
                                projectId={projectId}
                                project={project} key={project.id} />
                        ))}
                    </ul>
                </div>
            ) : <EmptyProjectCard action={action} />
            }
        </div >
    )
}


import { redirect, type ActionFunctionArgs } from '@remix-run/node';
import { useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import Notification from "~/components/Shared/Notification";
import NewProjectButton from "~/components/projects/newProjectButton";
import ProjectSmallCard from "~/components/projects/projectSmallCard";
import { requireUser } from "~/server/services/auth.server";
import { ProjectService } from "~/server/services/project.server";
export const action = async ({ request, params }: ActionFunctionArgs) => {
    const user = await requireUser(request)
    const data: any = Object.fromEntries(await request.formData())
    console.log('data', data)
    const projectService = new ProjectService()

    if (data.id) {
        await projectService.update(data.id, {
            name: data['project-name'],
            description: data.description
        })
        return redirect('/dashboard/projects?status=success')

    }
    await projectService.create({
        name: data['project-name'],
        description: data.description
    }, user.id)

    return redirect('/dashboard/projects?status=success')

}