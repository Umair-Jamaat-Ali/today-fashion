'use client'
import { useState, useEffect } from 'react';
import NavBar from '../components/navBar/NavBar';
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

const SignUp = () => {

    const [firstName, setFirsttName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rewritePassword, SetRewritePassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);


    // useEffect(() => {
    //     setPasswordsMatch(password === rewritePassword);
    // }, [password, rewritePassword]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        if (password !== rewritePassword) {
            alert("Password does not match")
        }
    };

    const submitHandler = async () => {
        if (password !== rewritePassword) {
            alert("Password does not matched")
        } else {
            try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
    
                var raw = JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "phoneNumber": phoneNumber,
                    "password": password
                });
    
                console.log("Submitting htmlForm with data:", {
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    password,
                    rewritePassword,
                });
    
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
    
                const fetchData = await fetch("http://localhost:3000/api/user", requestOptions)
                console.log("fetchData", fetchData);
                alert("Account sucessfully created")
    
                window.location.href = '/login';
           
        }
             catch (error) {
            console.log("error", error);
        }
    }
}

    return (
        <>

            <div>
                <NavBar />
                <div className="absolute inset-x-0 top-[-10rem] bg-slate-900 -z-10 transhtmlForm-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-5xl font-extrabold tracking-tight py-4 text-white sm:text-4xl">TOᗪᗩY ᖴᗩᔕᕼIOᑎ</h2>
                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Create New Account</h2>
                    {/* <p className="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p> */}
                </div>
                <htmlForm action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">First name</label>
                            <div className="mt-2.5">
                                <input type="text" name="first-name" id="firstName" onChange={(e) => setFirsttName(e.target.value)} autocomplete="firstName" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">Last name</label>
                            <div className="mt-2.5">
                                <input type="text" name="last-name" id="last-name" onChange={(e) => setLastName(e.target.value)} autocomplete="lastName" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
                            <div className="mt-2.5">
                                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} autocomplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                            <div className=" mt-2.5">
                                <input type="tel" name="phone-number" id="phone-number" onChange={(e) => setPhoneNumber(e.target.value)} autocomplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
                            <div className="mt-2.5 flex">
                                <input type={showPassword ? 'text' : 'password'} name="password" id="password" onChange={(e) => setPassword(e.target.value)} autocomplete="password" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                <button type="button" onClick={togglePasswordVisibility}>
                                    {showPassword ? <BiHide /> : <BiShow />}
                                </button>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Password Re-enter</label>
                            <div className="mt-2.5 flex">
                                <input type={showPassword ? 'text' : 'password'} name="password" id="passwordrewrite" onChange={(e) => SetRewritePassword(e.target.value)} autocomplete="password-rewrite" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                {/* { password !== rewritePassword && alert("Passwords do not match")} */}
                                {/* {!passwordsMatch && (
                                    alert("Passworddoes not match")
                                )} */}
                                <button type="button" onClick={togglePasswordVisibility}>
                                    {showPassword ? <BiHide /> : <BiShow />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="my-10">
                        <button 
                        onClick={submitHandler} 
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                </htmlForm>
            </div>
        </>
    );
};

export default SignUp;
