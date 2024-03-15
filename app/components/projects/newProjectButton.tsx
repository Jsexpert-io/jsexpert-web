import { PlusIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "@remix-run/react";
import AddProject from "./addProjectForm";

export default function NewProjectButton({ action }: { action?: any }) {
    const navigate = useNavigate();
    console.log('action', action)
    return (
        <div>
            <AddProject
                open={action === 'new'}
                setOpen={() => {
                    navigate(`/dashboard/projects`)
                }}

            >

            </AddProject>
            <Link

                to={`/dashboard/projects?action=new`}
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                New Project
            </Link>
        </div>
    )
}
