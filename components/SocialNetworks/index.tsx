import Image from "next/image"
import Link from "next/link"
import iconGithub from '../../public/social-icons/github.svg'
import iconLinkedin from '../../public/social-icons/linkedin.svg'
import { PhoneIcon } from "@heroicons/react/24/solid"
import { useState } from "react"


export default function SocialNetworks() {
    const [popUp, setPopUp] = useState(false)
    return (
        <div className="flex h-max w-full items-center justify-center dark:bg-slate-700 bg-white shadow-md border border-gray-100 p-2 rounded-xl">
            <div className="flex flex-col gap-4 w-max lg:w-full">
                <Link
                    href={"https://wa.me/+541165292575?text=Hola"}
                    className="flex w-full text-xs gap-2 items-center"

                >
                    <PhoneIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                    <p>+541165292575</p>
                </Link>
                <Link
                    href="https://linkedin.com/in/sergio-solis-260509b5"
                    className="flex w-full text-xs gap-2 items-center"
                >
                    <Image
                        className="w-6 h-6"
                        alt="Linkedin"
                        width={200}
                        height={200}
                        src={iconLinkedin}
                    />
                    <p className="break-all">https://linkedin.com/in/sergio-solis-260509b5</p>
                </Link>

                <Link
                    href="https://github.com/SergioAriel"
                    className="flex w-full text-xs gap-2 items-center"
                >
                    <Image
                        className="w-6 h-6"
                        alt="Github"
                        width={20}
                        height={20}
                        src={iconGithub}
                    />
                    <p className="break-all">https://github.com/SergioAriel</p>
                </Link>
            </div>

        </div >
    )
}