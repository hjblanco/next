'use client'
import Image from "next/image";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

export default function Carta({ url }) {

    const [like, setLike] = useState(false)

    return (
            <div className="w-fit mb-2 rounded-xl overflow-hidden relative">
                <Image width={300} height={200} alt="imagen" src={url} />
                <div className="absolute backdrop-blur-sm p-2 rounded-full bottom-1 right-1">
                    {
                        like ?
                        <FaHeart size={25} fill="red" onClick={() => setLike(false)}/>
                        :
                        <FaRegHeart size={25} fill="white" onClick={() => setLike(true)}/>
                    }
                </div>
            </div>
    )
}