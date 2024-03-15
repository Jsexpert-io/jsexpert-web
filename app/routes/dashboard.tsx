
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon
} from '@heroicons/react/24/outline'
import { Outlet, useLoaderData } from '@remix-run/react'

const navigation = [

    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Projects', href: '/dashboard/projects', icon: FolderIcon, current: false },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },

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
import { MobileSideBarButton } from './dashboard+/dashboardLayoutComponents/mobileSideBar'
import Navbar from './dashboard+/dashboardLayoutComponents/navbar'
import { SideBar } from './dashboard+/dashboardLayoutComponents/sideBar'
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
        current
    }
}

export default function Example() {
    const { user, navigations, projects, current } = useLoaderData()


    return (
        <>

            <div>


                <SideBar
                    navigation={navigation}
                    teams={teams}
                    showNavigations={navigations}
                    projects={projects}
                    currentProject={current}
                    setCurrentProject={() => {
                        console.log('set current project')
                    }}
                />
                <div className="lg:pl-72">
                    <div className="sticky top-0 z-40 
                    flex h-16 shrink-0 items-center gap-x-4 border-b
                     border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <MobileSideBarButton
                            navigation={navigation}
                            showNavigations={navigations}
                            teams={teams}
                        />

                        {/* Separator */}
                        <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

                        <Navbar
                            user={user}
                        />
                    </div>

                    <main className="">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}
