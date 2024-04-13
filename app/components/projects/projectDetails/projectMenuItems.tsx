import { CircleStackIcon, TrashIcon, TvIcon, UsersIcon } from '@heroicons/react/20/solid'
import {
    Bars2Icon
} from '@heroicons/react/24/outline'
import { Link } from '@remix-run/react'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({ project, currentTab }: {
    project: {
        slug: string,
        id: string
    },
    currentTab: string
}) {
    const navigation = [
        {
            name: 'Analytics', href: `/dashboard/projects/${project.slug}/analytics`,
            icon: Bars2Icon,
            current: currentTab === 'analytics'
        },
        {
            name: 'Insights', href: `/dashboard/projects/${project.slug}/insights`,
            icon: CircleStackIcon,
            current: currentTab === 'insights'
        },
        {
            name: 'Endpoints', href: `/dashboard/projects/${project.slug}/endpoints`,
            icon: TvIcon,
            current: currentTab === 'endpoints'
        },


    ]
    const teams = [

        {
            name: 'Billing', initial: 'B', href: `/dashboard/projects/${project.slug}/billing`,
            icon: UsersIcon,
            current: currentTab === 'billing'
        },
        {
            name: 'Settings', initial: 'S', href: `/dashboard/projects/${project.slug}/settings`,
            icon: UsersIcon,
            current: currentTab === 'settings'
        },
    ]
    return (
        <div className="flex grow flex-col gap-y-8 overflow-y-auto border-r border-gray-200 bg-white px-6">

            <nav className="flex flex-1 flex-col">
                <ul className="flex flex-1 flex-col gap-y-7">
                    <li>

                        <div className="text-xs font-semibold leading-6 text-gray-400">Project Insights</div>
                        <ul className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                'h-6 w-6 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                        {item.count ? (
                                            <span
                                                className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                                                aria-hidden="true"
                                            >
                                                {item.count}
                                            </span>
                                        ) : null}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                                <li key={team.name}>
                                    <a
                                        href={team.href}
                                        className={classNames(
                                            team.current
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <span
                                            className={classNames(
                                                team.current
                                                    ? 'text-indigo-600 border-indigo-600'
                                                    : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                                'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                            )}
                                        >
                                            {team.initial}
                                        </span>
                                        <span className="truncate">{team.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="w-full mt-auto ">
                        <Link
                            to={`/dashboard/projects?action=delete&projectId=${project.id}`}
                            className="flex items-center bg-red-400 rounded-md gap-x-4 px-6 py-3
                             text-sm font-semibold leading-6 text-gray-100 hover:bg-red-600"
                        >

                            <TrashIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            <span aria-hidden="true">Delete Project</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
