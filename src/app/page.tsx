import { Header } from "@/components/Header";
import Image from "next/image";


export default function Home() {
  return (
    <div className={`bg-neutral-900 font-poppins h-screen`}>
      <div className="h-6/12 bg-cover bg-gradient-to-b from-amber-950 to-neutral-900">
        <Header />
        <div className="flex items-center justify-between container m-auto max-w-200 h-100">
          <div className="flex justify-center items-center transition-all duration-500 ">
            <Image
              src={"/imgs/felipe.jpg"}
              alt="Minha Foto"
              width={200}
              height={200}
              className="rounded-xl drop-shadow-[0_0_6px_rgba(217,119,6,0.7)]
              transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(217,119,6,0.7)] hover:scale-[1.10]"
            />
          </div>
          <div className="w-100">
            <h1 className="text-6xl"> Olá <span className="">Mundo!</span></h1>
            <p className="text-2xl">Meu Nome é Felipe <span className="">Grellmann</span> seja bem vindo ao meu <span>portifólio</span>!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
