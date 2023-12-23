import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from 'react-hook-form';

const CreateGroup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {user} = useContext(AuthContext)

    const imageHostKey = 'ccde7ef0b56892fc4e26e02275cb15b7';

    const navigate = useNavigate();

    const handleAddBook = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const group = {
                        groupName: data.name,
                        description: data.description,
                        groupImage: imgData.data.url,
                        messages: [],
                        members: [
                            {
                                name: user?.displayName,
                                email: user?.email,
                                img: user?.photoURL
                            }
                        ]
                    }

                    fetch('http://localhost:5000/group', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(group)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            // navigate('/dashboard/managedoctors');
                        })
                }
            })
    }
    return (
        <div className='bg-gray-200 h-full p-5'>
            <div className='w-96 p-7 shadow-lg bg-white rounded-md lg:mx-auto'>
                <h1 className="text-3xl capitalize">create a new group</h1>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
                <form onSubmit={handleSubmit(handleAddBook)}>
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Group Name</span></label>
                        <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Group Description</span></label>
                        <input {...register("description", { required: "description Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                    </div>
                    
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Group Image</span></label>
                        <input {...register("image", { required: "Photo is required" })} type="file" className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full my-3' value="create group" type="submit" />
                    <div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateGroup;