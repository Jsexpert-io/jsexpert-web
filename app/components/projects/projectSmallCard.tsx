import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "@remix-run/react";
import AddProject from "./addProjectForm";

const getRandomBgColor = () => {
    const colors = ['bg-indigo-600', 'bg-pink-600', 'bg-green-600', 'bg-yellow-600', 'bg-blue-600', 'bg-red-600', 'bg-purple-600']
    return colors[Math.floor(Math.random() * colors.length)]

}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function ProjectSmallCard({
    project, projectId
}: {
    project: any, projectId: any
}) {
    const navigate = useNavigate();
    console.log('projectId', projectId, project)
    return (
        <li className="col-span-1 
                            relative
                            flex rounded-md shadow-sm">
            <Link to={`/dashboard/projects/${project.slug}/analytics`}
                className={classNames(
                    getRandomBgColor(),
                    'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                )}
            >
                {project.name[0]}
            </Link>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                    <Link to={`/dashboard/projects/${project.slug}`} className="font-medium text-gray-900 hover:text-gray-600">
                        {project.name}
                    </Link>
                    <p className="text-gray-500">{project.members} {
                        project.description
                    }</p>
                    <div className=" flex  mt-4  py-1.5 
                                    px-3 rounded-lg gap-5 flex-shrink-0 ">
                        <Link
                            className="text-gray-600 hover:text-gray-900 flex  items-center justify-center gap-2"
                            to={`/dashboard/projects?action=edit&projectId=${project.id}`}
                        >
                            <PencilSquareIcon className="h-4 w-4" aria-hidden="true" /> Edit
                        </Link>
                        <Link
                            className="text-gray-600 hover:text-gray-900 flex  items-center justify-center gap-2"


                            to={`/dashboard/projects?action=delete&projectId=${project.id}`}
                        >
                            <TrashIcon className="h-4 w-4" aria-hidden="true" /> Delete
                        </Link>


                    </div>
                </div>

            </div>
            <AddProject
                open={project.id === projectId}
                setOpen={() => {
                    debugger;
                    navigate(`/dashboard/projects`)
                }}
                project={project}
            >

            </AddProject>
        </li >
    )
}
