
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { Link, useLocation } from "@remix-run/react"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const allowedTabs = ['details', 'members', 'settings', 'billing']
export default function ProjectDetailTabs({ project }: {
    project: any

}) {

    const { pathname } = useLocation()

    let currentTabname: any = pathname.split('/').pop()
    let currentTab = allowedTabs.includes(currentTabname) ? currentTabname : 'details'
    console.log('url', pathname, currentTab)
    const tabs = [
        { name: 'Analytics', href: `/dashboard/projects/${project.slug}/analytics`, current: currentTab === 'analytics' },
        { name: 'Insights', href: `/dashboard/projects/${project.slug}/insights`, current: currentTab === 'insights' },
        { name: 'Endpoints', href: `/dashboard/projects/${project.slug}/endpoints`, current: currentTab === 'endpoints' },
        { name: 'Billing', href: `/dashboard/projects/${project.slug}/billing`, current: currentTab === 'billing' },
        { name: 'Settings', href: `/dashboard/projects/${project.slug}/settings`, current: currentTab === 'settings' },

    ]

    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue={tabs?.find((tab) => tab.current)?.name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex" aria-label="Tabs">
                        {
                            tabs.map((tab) => (
                                <Link
                                    key={tab.name}
                                    to={tab.href}
                                    className={classNames(
                                        tab.current
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                        'w-1/4 py-4 px-1 text-center text-sm font-medium border-b-2'
                                    )}
                                    aria-current={tab.current ? 'page' : undefined}
                                >
                                    {tab.name}
                                </Link>
                            ))
                        }

                    </nav>
                </div>
            </div>
        </div>
    )
}
