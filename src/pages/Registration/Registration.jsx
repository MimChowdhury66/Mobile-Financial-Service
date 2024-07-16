import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const Registration = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,

    } = useForm();
    const onSubmit = data => {
        if (data.PIN.length < 5) {
            toast.error('Pin should be at least 5 character');
            return;
        }
        console.log(data);
        const newUser = data;
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal({
                        icon: "success",
                        title: "Register successfully",
                    });
                }
                else {
                    toast.error('This Account is already registered')
                }
            })

    }

    return (
        <div className="mt-3 lg:flex gap-0 p-5">
            <div >
                <img className='lg:w-[400px] lg:h-[300px] mb-5 lg:mt-32 rounded-lg container lg:ml-40'
                    // src={picture}
                    alt="" />
            </div>

            <div className="container mx-auto  w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-200 ">
                <h1 className="text-2xl font-bold text-center">Please Register Here</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                        <input type="text" required id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                            {...register("FullName")}
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="pin" className="block dark:text-gray-600">PIN</label>
                        <input type="number" id="username" placeholder="PIN" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                            {...register("PIN")}
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input type="email" required id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                            {...register("Email")}
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="mobile" className="block dark:text-gray-600">Mobile Number</label>
                        <div className="relative ">
                            <input type="number"
                                // type={showPassword ? "text" : "password"}
                                required id="mobile" placeholder="Enter Your Mobile Number" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                                {...register("MobileNumber")}
                            />
                            {/* <span className="absolute top-4 right-4"
                                onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span> */}
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-blue-400">Register</button>
                </form>
                {/* <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => handleSocialLogin(googleLogin)}
                        aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>


                </div> */}
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account? <br />
                    <Link to='/login'><button className="btn mt-2 bg-slate-400">Log In</button></Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;