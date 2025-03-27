import React from 'react'
import Image from "next/image";

export const MyPhoto = () => {
    return (
        <>
            <Image
                src={"/imgs/felipe.jpg"}
                alt="Minha Foto"
                width={250}
                height={250}
                className="rounded-[30px] drop-shadow-[0_0_6px_rgba(217,119,6,0.7)]
                transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(217,119,6)] hover:scale-[1.04]"
            />
        </>
    )
}
