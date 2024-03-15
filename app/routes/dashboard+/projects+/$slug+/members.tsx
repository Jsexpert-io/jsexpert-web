const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import AddProjectMember from '~/components/projects/projectMembers/addProjectMemberForm';
import { requireUser } from '~/server/services/auth.server';
export const loader: LoaderFunction = async ({ request, params }: LoaderFunctionArgs) => {
    const user = await requireUser(request)
    const queryParams = new URLSearchParams(request.url.split('?')[1])
    const projectSlug = params.slug
    const action = queryParams.get('action')
    return { user, projectSlug, action }
}
export default function Example() {
    const { user, projectSlug, action } = useLoaderData()
    const navigate = useNavigate();
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <AddProjectMember
                open={action === 'addMember'}
                setOpen={() => {
                    navigate(`/dashboard/projects/${projectSlug}/members`)
                }}

            >

            </AddProjectMember>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr className="divide-x divide-gray-200">
                                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Name
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                    <tr key={person.email} className="divide-x divide-gray-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                            {person.name}
                                        </td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.title}</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.email}</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{person.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
