import { DocumentArrowDownIcon } from '@heroicons/react/24/solid'
import { institutions } from '../../info'
import imgProfile from '../../public/profile/imgProfile.jpeg'
import Image from 'next/image'



export default function Profile() {

    return (
        <div className="relative flex h-max w-full flex-col gap-4 items-center dark:bg-slate-700 bg-white shadow-md border border-gray-100 p-4 rounded-xl">
            <a 
                className='absolute top-4 right-4'
                href={"CVSergioSolis.pdf"} target="_blank" rel="noopener noreferrer" download>
                <DocumentArrowDownIcon 
                        className='h-6 w-6 p-1 flex justify-center rounded-md items-center  cursor-pointer text-gray-800 hover:text-gray-100 hover:bg-gray-400 dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-300'
                        />
            </a>
            <div
                className="relative w-16 h-16 rounded-full"
            >
                <div className="w-3 h-3 absolute top-1 right-1 rounded-full bg-[rgba(0,255,36,1)]"></div>

                <Image
                    className=" w-16 h-16 rounded-full"
                    alt="Sergio Ariel Solis"
                    width={200}
                    height={200}
                    src={imgProfile}
                />
            </div>
            <div
                className='w-full flex flex-col gap-2 items-center justify-center'
            >
                <p className='text-center'>Sergio Ariel Solis</p>
                <p className="text-center text-xs text-gray-500 dark:text-gray-300">Full Stack Developer</p>
                <p className="text-center rounded-md border p-1 border-slate-400  bg-[rgba(0,255,36,1)] text-black text-xs font-black">Disponible para trabajar</p>
            </div>

        </div>

    )
}