import { scrollToTarget } from "@/utils/scrollUtils";
import Image from "next/image";

export const BtnDownPage = () => {
    return (
        <button
            className="animate-bounce transition-all duration-500 hover:animate-none hover:scale-[1.10]"
            onClick={() => { scrollToTarget('aboutme') }}
        >
            <Image
                src={"/imgs/mouse-cursor-dark.png"}
                alt="Mouse Scroll icon"
                width={40}
                height={0}
            />
        </button>
    )
}
