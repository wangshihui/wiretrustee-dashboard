import React, {useState} from "react";
// import {withAuthenticationRequired} from "@auth0/auth0-react";
import Loading from "../components/Loading";
import {ExclamationCircleIcon} from "@heroicons/react/solid";


export const Login = () => {

        const [keyName, setKeyName] = useState(  window.localStorage.getItem("wt_user"))

        const saveKeyName=name=>{
            console.log(name)
            setKeyName(name)
            if(name.replaceAll(/\s*/g,"")==""){
                alert("user id cannot be empty")
            } else{
                window.localStorage.setItem("wt_user",name)
            }
        }

        return (
                <div className="py-10">
                    <header>
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-2xl font-mono leading-tight text-gray-900 font-bold">mock user</h1>
                        </div>
                    </header>
                    <main>
                        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                            <div>
                                <label
                                    htmlFor="project-name"
                                    className="block text-s font-mono font-medium text-gray-900 sm:mt-px sm:pt-2"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="mt-1 relative col-span-2">
                                <input
                                    type="text"
                                    name="new-setup-key-name"
                                    id="new-setup-key-name"
                                    className="w-full shadow-sm text-lg font-mono focus:ring-gray-300 squared focus:border-gray-300 border border-gray-300"
                                    value={keyName}
                                    onChange={event => saveKeyName(event.target.value)}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <ExclamationCircleIcon id="name-validation-error-icon" className="h-5 w-5 text-red-400 hidden" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
        );
    }
;

// export default withAuthenticationRequired(ActivityComponent,
//     {
//         onRedirecting: () => <Loading/>,
//     }
// );
export default Login;
