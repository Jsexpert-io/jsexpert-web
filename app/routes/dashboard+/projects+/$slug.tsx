
import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { Link, Outlet, redirect, useLoaderData, useLocation } from '@remix-run/react';
import ProjectDetailTabs from '~/components/projects/projectDetails/projectTabs';
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
    let currentTabname: any = pathname.split('/').pop()
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
    let currentTabname: any = pathname.split('/').pop()
    return (
        <div className="mx-auto ">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}

            <ProjectDetailTabs project={project} />
            <main className="max-w-7xl p-4">
                <Outlet />
            </main>
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