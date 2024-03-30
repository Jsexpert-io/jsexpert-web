
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon
} from '@heroicons/react/24/outline'
import { Outlet, useLoaderData, useLocation } from '@remix-run/react'

const navigation = [

    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Projects', href: '/dashboard/projects', icon: FolderIcon, current: false },
    { name: 'Team', href: '/dashboard/Team', icon: UsersIcon, current: false },

    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

import type { LoaderFunctionArgs } from '@remix-run/node'
import { getNavigationForUser, requireUser } from '~/server/services/auth.server'
import { ProjectService } from '~/server/services/project.server'
import SideBar from './dashboard+/dashboardLayoutComponents/sideBar'
export const loader = async ({ request, params }: LoaderFunctionArgs) => {

    const user = await requireUser(request)
    const navigations = await getNavigationForUser(user)
    const projectService = new ProjectService()

    const projects = await projectService.findAllByUser(user.id)
    const current = projects.find(p => p.slug === params?.slug)
    return {
        user,
        navigations,
        projects,
        current,
        slug: params?.slug
    }
}

export default function Example() {
    const { user, navigations, projects, current, slug } = useLoaderData()
    const { pathname } = useLocation()

    return (
        <>
            {/* navigation, teams, showNavigations, projects, currentProject, setCurrentProject, user */}



            <SideBar
                navigation={navigation}
                teams={teams}
                showNavigations={navigations}
                projects={projects}
                currentProject={current}
                setCurrentProject={() => {
                    console.log('set current project')
                }}
                user={user}
                currentPath={`${pathname}`}
            />
            <main className=" p-8">
                <Outlet />
            </main>

        </>
    )
}
