'use client'

import userStore from "@/store/userStore";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";

export default function NavBar() {

    const { usuario } = userStore()

    return (
        <div className="flex p-5 justify-between sticky top-0 bg-white z-50 items-center font-bold">
            <div className="flex gap-5">
                <Link href={'/'}>
                    <div>
                        <h1 className="text-red-600">Pinterest</h1>
                    </div>
                </Link>

                <div>
                    <Link href={'/explore'}>Explorar</Link>
                </div>
            </div>

            <ul className="flex gap-5 items-center">
                <li>Info</li>
                <li>Empresa</li>
                <li>Blog</li>
                {usuario ?

                    (<li>
                        <li className="flex items-center gap-2 border border-gray-400 rounded-lg px-2 py-1"> 
                        
                        <div>
                        <Image src={usuario.photoURL ?? null} width={20} height={20} className="rounded-full" alt="profile" />
                        </div>
                        
                        </li>)
                    :
                    (<>
                        <li className="bg-red-600 p-2 rounded-2xl text-white">
                            <Link href={'/inicioSesion'}>Iniciar Sesion</Link>
                        </li>
                        <li><Link href={'/registro'}>Registrarse</Link></li>
                    </>)
                }
            </ul>
        </div>
    )
}