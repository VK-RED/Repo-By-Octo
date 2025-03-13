'use client'

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Page(){

    const { data: session } = useSession();
    const url = `https://github.com/apps/vk-new-github-app/installations/new/permissions?target_id=130341088`

    return (
        <div className="flex flex-col items-center justify-center p-10 space-y-4">
            <h1 className="text-4xl font-bold">Welcome to your profile page</h1>

            <button onClick={()=>{
                signIn('github')
            }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Signin with Github
            </button>

            <Link 
                href={url}
                target="_blank"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Connect to Github
            </Link>

            <div className="p-4 rounded shadow flex flex-col items-center justify-center">
                <p>User Details : </p>
                {JSON.stringify(session)}
            </div>
        </div>
    )
}