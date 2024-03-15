import { ClipboardDocumentIcon } from "@heroicons/react/20/solid"
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { requireUser } from "~/server/services/auth.server"
import { ProjectService } from "~/server/services/project.server"
export const loader: LoaderFunction = async ({ request, params }: LoaderFunctionArgs) => {
    const user = await requireUser(request)

    const projectService = new ProjectService()
    const { slug } = params
    const project = await projectService.findOneBySlug(params?.slug as any)
    return {
        project, currentTab: 'details'
    }
}
export default function Detail() {
    const { project, currentTab } = useLoaderData()
    return (
        <div className="container mx-auto max-w-8xl py-4">
            <div className="px-4 py-6 sm:col-span-2 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Project Credentials</dt>
                <dd className="mt-2 text-sm text-gray-900">
                    <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                                <div className="mr-8 text-gray-500">Client Id </div>
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">{
                                        project?.clientId
                                    }</span>

                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(project?.clientId as string)
                                        alert('Client Id copied')

                                    }}
                                    className="font-medium flex items-center gap-4 text-indigo-600 hover:text-indigo-500">
                                    <ClipboardDocumentIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                </button>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                                <div className="mr-8 text-gray-500">Client Secret </div>
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">
                                        {
                                            project?.clientSecret
                                        }
                                    </span>

                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(project?.clientSecret as string)
                                        alert('Client Secret copied')

                                    }}
                                    className="font-medium flex items-center gap-4 text-indigo-600 hover:text-indigo-500">
                                    <ClipboardDocumentIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </dd>
            </div>
        </div>
    )
}
