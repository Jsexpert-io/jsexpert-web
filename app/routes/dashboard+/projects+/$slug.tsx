
import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { Link, Outlet, redirect, useLoaderData, useLocation } from '@remix-run/react';
import ProjectMenuItems from '~/components/projects/projectDetails/projectMenuItems';
import { requireUser } from '~/server/services/auth.server';
import { ProjectService } from '~/server/services/project.server';

const tabs = [
    { name: 'My Account', href: '#', current: false },
    { name: 'Company', href: '#', current: false },
    { name: 'Team Members', href: '#', current: true },
    { name: 'Billing', href: '#', current: false },
]
export const loader: LoaderFunction = async ({ request, params }: LoaderFunctionArgs) => {
    const user = await requireUser(request)
    const { url } = request

    const allowedTabs = ['details', 'members', 'settings', 'billing', 'analytics']
    const pathname = url.split('?')[0]
    const currentTabname: any = pathname.split('/').pop()
    if (!allowedTabs.includes(currentTabname)) {
        return redirect(pathname + '/details')
    }
    const projectService = new ProjectService()
    const { slug } = params
    const project = await projectService.findOneBySlug(slug)
    return {
        project, currentTab: currentTabname
    }
}

export default function ProjectDetail() {
    const { project, currentTab } = useLoaderData()
    const { pathname } = useLocation()
    const currentTabname: any = pathname.split('/').pop()
    return (
        <div className="h-full">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className='flex space-x-4 h-full'>
                <ProjectMenuItems project={project} currentTab={currentTab} />
                {/* <ProjectDetailTabs project={project} /> */}
                <main className="w-10/12 p-8  min-h-[85vh] ">
                    <Outlet />
                </main>
            </div>

        </div>

    )
}


const PageHeader = ({ title, description, tabName }) => {
    if (tabName === 'members') {
        return (
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Project Members</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Invite your team members to collaborate on this project.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <Link
                        to="?action=addMember"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </Link>
                </div>
            </div>
        )
    }
    return <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
            {title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
            {description}
        </p>
    </div>
}