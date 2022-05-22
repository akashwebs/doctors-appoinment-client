import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Looding from '../Shared/Looding/Looding';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: services, isLoading } = useQuery('doctorService', () => fetch('http://localhost:5000/services').then(res => res.json()))

    const imgStorageKey = 'febc399f961b044059b4991efae82ff8';

    const handleSignup = async data => {
        console.log(data)
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imgUrl = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.specialized,
                        img: imgUrl
                    }

                    fetch('http://localhost:5000/doctor', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Beaarer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('doctor add successfully added')
                            } else {
                                toast.error('Faild added doctor')
                            }
                        })

                }
            })
    }
    if (isLoading) {
        return <Looding></Looding>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required'
                            }

                        })}
                        placeholder="Type your Name"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'email is required'
                            },
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'invalid email'
                            }
                        })}
                        placeholder="Type Email"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialized</span>
                    </label>
                    <select {...register('specialized')} class="select select-bordered w-full max-w-xs">
                        {
                            services?.map(service => <option
                                key={service._id}
                                value={service?.name}
                            >
                                {service?.name}
                            </option>)
                        }

                    </select>


                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Doctor photo</span>
                    </label>
                    <input
                        type="file"
                        {...register("photo", {
                            required: {
                                value: true,
                                message: 'photo is required'
                            }

                        })}
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.photo?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.photo.message}</span>}

                    </label>
                </div>

                <input type="submit" value={'Add Doctor'} className='btn uppercase w-full max-w-xs' />

            </form>
        </div>
    );
};

export default AddDoctor;