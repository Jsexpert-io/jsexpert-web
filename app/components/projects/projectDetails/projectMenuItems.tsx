

const secondaryNavigation = [
    { name: 'Website redesign', href: '#', initial: 'W', current: false },
    { name: 'GraphQL API', href: '#', initial: 'G', current: false },
    { name: 'Customer migration guides', href: '#', initial: 'C', current: false },
    { name: 'Profit sharing program', href: '#', initial: 'P', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProjectMenuItems({ project, currentTab }) {
    const navigation = [
        { name: 'Analytics', href: `/dashboard/projects/${project.slug}/analytics`, current: currentTab === 'analytics' },
        { name: 'Insights', href: `/dashboard/projects/${project.slug}/insights`, current: currentTab === 'insights' },
        { name: 'Endpoints', href: `/dashboard/projects/${project.slug}/endpoints`, current: currentTab === 'endpoints' },
        { name: 'Billing', href: `/dashboard/projects/${project.slug}/billing`, current: currentTab === 'billing' },
        { name: 'Settings', href: `/dashboard/projects/${project.slug}/settings`, current: currentTab === 'settings' },

    ]
    return (
        <nav className="flex p-8 flex-col border w-60 min-h-[80vh]" aria-label="Sidebar">
            <ul role="list" className="flex flex-1 flex-col gap-y-7 ">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
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

                                    {item.name}

                                </a>
                            </li>
                        ))}
                    </ul>
                </li>

            </ul>
        </nav>
    )
}
