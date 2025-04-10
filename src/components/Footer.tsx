import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="pt-30 pb-10 bg-gradient-to-b from-neutral-900 to-black">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <ul className="flex justify-between items-center w-[300px]  mx-[40px]">
                        <li>
                            <a href="file:///C:/Users/felip/Documents/Curriculo/www.linkedin.com/in/felipegrellmann">
                                <Image
                                    className="hover:drop-shadow-[0_0_6px_rgba(255,255,255)] hover:cursor-pointer"
                                    src={'/imgs/linkedin.png'}
                                    width={50}
                                    height={50}
                                    alt="linkedin icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/FelipeGrellmannSouza" target="_blank">
                                <Image
                                    className="hover:drop-shadow-[0_0_6px_rgba(255,255,255)] hover:cursor-pointer"
                                    src={'/imgs/github-white.png'}
                                    width={50}
                                    height={50}
                                    alt="github icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/felipe_grellmann/" target="_blank">
                                <Image
                                    className="hover:drop-shadow-[0_0_6px_rgba(255,255,255)] hover:cursor-pointer"
                                    src={'/imgs/instagram.png'}
                                    width={50}
                                    height={50}
                                    alt="instagram icon"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/qr/7AVCWT7TWJP4O1?autoload=1&app_absent=0" target="_blank">
                                <Image
                                    className="hover:drop-shadow-[0_0_6px_rgba(255,255,255)] hover:cursor-pointer"
                                    src={'/imgs/whatsapp.png'}
                                    width={50}
                                    height={50}
                                    alt="whatsapp icon"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="text-center mt-10 text-gray-400 text-sm md:text-base">© 2025 Felipe Grellmann. All rights reserved.</p>

            </div>
        </footer>
    )
}
