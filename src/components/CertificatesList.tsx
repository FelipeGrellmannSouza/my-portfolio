import { Certificate, certificates } from "@/data/certificatesData"
import Image from "next/image"

const bgColor = (certificate: Certificate) => {
    if (certificate.complete) {
        return 'hover:scale-[1.05] bg-white/5 hover:bg-white/20 hover:cursor-pointer drop-shadow-[0_0_10px_rgba(217,119,6,0.7)]'
    } else {
        return 'bg-neutral-700/50'
    }
}

export const CertificatesList = () => {
    return (
        <>
            {certificates.map((certificate) =>
                <a key={certificate.name}
                    className={
                        " hover:cursor-not-allowed flex flex-col justify-center items-center items-around  rounded-xl h-[110px] w-[110px] sm:h-[150px] sm:w-[150px] transition-all duration-300 " +
                        bgColor(certificate)
                    }
                    href={certificate.image && certificate.image}
                    title={certificate.image ? 'Certified' : 'Certified in progress'}
                    target="_blank"
                >
                    <Image
                        src={certificate.icon}
                        width={70}
                        height={70}
                        alt={certificate.name + " icon"}
                        className="w-12 h-12 sm:w-20 sm:h-20"
                    />
                    <h5 className="flex justify-center text-md sm:text-xl mt-0.5">{certificate.name}</h5>
                </a >
            )}
        </>
    )
}
