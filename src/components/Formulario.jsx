'use client'

import Image from "next/image"
import pinterest from "./pinterest.webp"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase/config"

export default function Formulario() {

    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [loading, setLoading] = useState(false)


    const registrarUsuario = async () => {

        if (!email || !contraseña) {
            setMensaje("Por favor ingresa un email y una contraseña.")
            return
        }
        setLoading(true)
        try {
            const respuesta = await createUserWithEmailAndPassword(auth, email, contraseña)
            console.log(respuesta)
            setMensaje("Usuario registrado con éxito.")
            setEmail("")
            setContraseña("")
        } catch (error) {
            console.log(error)
            setMensaje("Usuario no válido. Intenta nuevamente.")
        } finally {
            setLoading(false)
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        registrarUsuario()
    }

    return (
        <form className="flex flex-col mx-[37%]">

            <Image className="mx-auto" src={pinterest} width={100} alt="" />
            <h1 className="mx-auto font-bold text-[25px]">
                Te damos la bienvenida a
            </h1>
            <h1 className="mx-auto font-bold text-[25px] mb-2">
                Pinterest
            </h1>
            <p className="mx-auto">Encuentra nuevas ideas para</p>
            <p className="mx-auto">experimentar</p>
            
            {mensaje && <p className="text-center text-gray-500 my-2">{mensaje}</p>}

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
                className="border border-gray-400 px-3 py-2 rounded-xl"
                placeholder="crea una contraseña"
                type="password"
                value={contraseña}
            />
            <p className="mb-5 ml-2 text-gray-400">Debe tener al menos 6 caracteres</p>


            <button
                onClick={handleClick}
                className="bg-red-600 hover:bg-red-500 cursor-pointer transition-colors duration-300 py-2 rounded-xl font-bold text-white mx-[30%]"
                disabled={loading}>
                {loading ? "Registrando..." : "Registrarme"}
            </button>
        </form>
    )
}