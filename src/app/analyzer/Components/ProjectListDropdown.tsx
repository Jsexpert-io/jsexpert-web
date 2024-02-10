import { useGetProjectsQuery } from '@/State/apiFeatures/project.apislice'
import { setProject } from '@/State/features/project.feature'
import { useAppDispatch, useAppSelector } from '@/State/store'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]

export default function ProjectListDropDown() {
    const { data, isLoading, error } = useGetProjectsQuery()
    const { project } = useAppSelector(state => state.projectState)
    const dispatch = useAppDispatch()

    const onProjectNavigate = (projectNew: any) => {
        dispatch(setProject(projectNew))

    }




    return (
        <div className="fixed top-4 w-48">
            <Listbox value={project} onChange={onProjectNavigate}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg
                     bg-gray-950 py-2 pl-3 pr-10 text-left shadow-md 
                     text-gray-200
                     focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{project?.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-200"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto
                         rounded-md bg-white py-1 text-base shadow-lg ring-1
                          ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {data && data?.map((proj, personIdx) => (
                                <Listbox.Option
                                    key={proj._id}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4
                                         ${active ? 'bg-amber-50 text-gray-950 ' : 'text-gray-800'
                                        }`
                                    }
                                    value={proj}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate
                                                 ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {proj?.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 
                                                left-0 flex items-center pl-3 text-gray-950">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
