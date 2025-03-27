import Image from "next/image";

export const Banner = () => {
    return (
        <div className="flex items-center justify-between container m-auto max-w-200 h-150">
            <div className="">
                <Image
                    src={"/imgs/felipe.jpg"}
                    alt="Minha Foto"
                    width={200}
                    height={200}
                    className="rounded-[80px] drop-shadow-[0_0_6px_rgba(217,119,6,0.7)]
                        transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(217,119,6)] hover:scale-[1.10]"
                />
            </div>

            <div className="w-100">
                <h1 className="text-6xl"> Olá <span className="text-amber-700 ">Mundo!</span></h1>

                <p className="text-2xl mt-3">Meu Nome é Felipe <span className="">Grellmann</span> seja bem vindo ao meu <span>portifólio</span>!</p>
            </div>
        </div>)
}
