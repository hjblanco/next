'use client'
import google from "./google.webp"
import Image from "next/image"
import pinterest from "./pinterest.webp"
import { useState } from "react"
import { auth } from "@/firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import Link from "next/link"
import userStore from "@/store/userStore"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default function Formulario2() {

    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [loading, setLoading] = useState(false)

    const {loginUser, usuario} = userStore()

    const inicioSesion = async () => {
        if (!email || !contraseña) {
            setMensaje("Por favor ingresa tu email y contraseña.")
            return
        }
        setLoading(true)
        try {
            const respuesta = await signInWithEmailAndPassword(auth, email, contraseña)
            console.log(respuesta)
            loginUser(respuesta.user)
            setMensaje("inicio de sesion exitoso.")
            setEmail("")
            setContraseña("")
        } catch (error) {
            console.log(error)
            setMensaje("email o contraseña no válido.")
        } finally {
            setLoading(false)
        }
    }

      const provider = new GoogleAuthProvider();

      const iniciarSesionGoogle = async (e) => {
        e.preventDefault()
        try {
            const response = await signInWithPopup(auth, provider)
            console.log(response)
            loginUser(response.user)
        } catch (error) {
            console.log(error)
        
        }

    }


    const handleClick = (e) => {
        e.preventDefault();
        inicioSesion()
    }

    return (
        <form className="flex flex-col mx-[37%]">

            <Image className="mx-auto" src={pinterest} width={100} alt="" />
            <h1 className="mx-auto font-bold text-[25px]">
                Te damos la bienvenida a
            </h1>
            <h1 className="mx-auto font-bold text-[25px]">
                Pinterest
            </h1>

            <Link href={'/'}>{mensaje && <p className="text-center text-gray-500 my-2">{mensaje}</p>}</Link>

            <p className="ml-2">Correo electrónico</p>
            <input
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 px-3 py-2 rounded-xl mb-5"
                placeholder="Correo electrónico"
                type="email"
                value={email}
            />

            <p className="ml-2">Contraseña</p>
            <input
                onChange={(e) => setContraseña(e.target.value)}
                className="border border-gray-400 px-3 py-2 rounded-xl mb-5"
                placeholder="crea una contraseña"
                type="password"
                value={contraseña}
            />

            <button
                onClick={handleClick}
                className="bg-red-600 hover:bg-red-500 cursor-pointer transition-colors duration-300 py-2 rounded-xl font-bold text-white mx-[30%]"
                disabled={loading}>
                {loading ? "Iniciando sesion..." : "Iniciar sesion"}
            </button>


            <button onClick={iniciarSesionGoogle}
                className=" px-3 w-52 items-center mt-5 flex bg-red-600 hover:bg-red-500 cursor-pointer transition-colors duration-300 py-2 rounded-xl font-bold text-white mx-[30%]">
                <div>
                <Image src={google} width={30} className="rounded-3xl mx-auto" alt="" />
                </div>
                <div className="mx-auto">Sing in with Google</div>
            </button>

        </form>
    )
}