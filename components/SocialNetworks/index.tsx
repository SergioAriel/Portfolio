import Image from "next/image"
import Link from "next/link"
import GitHubIcon from '@/public/social-icons/github'
import IconLinkedin from '../../public/social-icons/linkedin'
import { PhoneIcon } from "@heroicons/react/24/solid"


export default function SocialNetworks() {
    return (
        <div className="flex h-max w-full items-center justify-center dark:bg-slate-700 bg-white shadow-md border border-gray-100 p-2 rounded-xl">
            <div className="flex flex-col gap-4 w-full lg:w-full">
                <Link
                    href={"https://wa.me/+541165292575?text=Hola"}
                    className="flex w-full gap-4 items-center"

                >
                    <PhoneIcon
                        className='w-6 p-1 flex justify-center rounded-md items-center  cursor-pointer text-gray-800 hover:text-gray-100 hover:bg-gray-400 dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-300'
                    />
                    <p className="w-2/3 text-sm break-all">+541165292575</p>
                </Link>
                <Link
                    href="https://linkedin.com/in/sergio-solis-260509b5"
                    className="flex gap-4 w-full h-min text-xs items-center"
                >
                    <IconLinkedin
                        className="w-6 p-1 rounded-md text-gray-800 hover:text-gray-100 hover:bg-gray-400 dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-300 cursor-pointer"
                    />
                    <p className="w-2/3 break-all">https://linkedin.com/in/sergio-solis-260509b5</p>
                </Link>

                <Link
                    href="https://github.com/SergioAriel"
                    className="flex gap-4 w-full text-xs items-center"
                >
                    <GitHubIcon
                        className='flex w-6 p-1 justify-center rounded-md items-center cursor-pointer text-gray-800 hover:text-gray-100 hover:bg-gray-400  dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-300'
                    />
                    <p className="w-2/3 break-all">https://github.com/SergioAriel</p>
                </Link>
            </div>

        </div >
    )
}