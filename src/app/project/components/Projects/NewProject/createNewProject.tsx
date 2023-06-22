import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCreateProjectMutation } from '@/State/apiFeatures/project.apislice';

export default function CreateNewProject({ open, setOpen }: any) {

    const [createProjectApi] = useCreateProjectMutation()
    const [project, setproject] = React.useState({
        name: '',
        description: '',
    })
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChange = (e: any) => {
        setproject({
            ...project,
            [e.target.name]: e.target.value
        })
    }
    const onProjectCreate = async () => {
        const data = await createProjectApi(project).unwrap()
    }
    return (
        <div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create A Project</DialogTitle>
                <DialogContent>
                    <div className="mt-5">
                        <div>
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={project.name}
                                            onChange={onChange}

                                            required
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={project.description}
                                            onChange={onChange}
                              
                                            rows={3}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>

                </DialogContent>
                <DialogActions>
                    <Button
                    variant='outlined'
                    size='small'
                    color='primary'
                    onClick={handleClose}>Cancel</Button>
                    <Button
                    size='small'
                    color='primary'

                    variant='outlined'
                    onClick={onProjectCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}