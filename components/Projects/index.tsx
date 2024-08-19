import Link from 'next/link'
import { DocumentIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import GitHubIcon from '@/public/social-icons/github';

export default function Project({ project, id }: any) {
    const router = useRouter();
    const [popOver, setPopOver] = useState("");
    const popoverRef = useRef<HTMLDivElement>(null);
    const handlerPopOver = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const widthWindow = document.body.clientWidth;
        const leftPopOver = popoverRef?.current?.getBoundingClientRect().left;
        const rightPopOver = popoverRef?.current?.getBoundingClientRect().right;
        const widthPopOver = popoverRef?.current?.offsetWidth;

        if (widthPopOver && leftPopOver) {
            if (leftPopOver + widthPopOver > widthWindow) {
                popoverRef.current.style.left = -((leftPopOver + widthPopOver) - widthWindow) + "px";
                popoverRef.current.style.top = "100%";

            }
        }
    }, [handlerPopOver.current, popoverRef.current, popOver]);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target) && !handlerPopOver?.current?.contains(event.target)) {
                setPopOver("")
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popoverRef, handlerPopOver]);

    return (
        <div
            className='relative w-full border border-gray-200 shadow-md rounded-xl gap-2 p-4 flex flex-col '
        >
            <div
                className='flex justify-between'
            >
                <p
                    className=" flex font-bold text-sm"
                >
                    {project?.title}
                </p>
                {/* {
                        (project?.github || project?.url) &&

                        <div
                            className='relative flex h-max justify-end'
                        >
                            <EllipsisHorizontalIcon
                                ref={handlerPopOver}
                                onClick={() => {
                                    id === popOver ? setPopOver("") : setPopOver(id);
                                }}
                                className='w-6 h-6'
                            /> */}
                {/* {
                                popOver === id && */}
                <div
                    ref={popoverRef}
                    className='flex'
                >
                    {project?.github &&
                        <Link
                            href={project?.github?.url}
                            target="_blank"
                            rel="noreferrer"
                            className='h-7 p-1 flex justify-center rounded-md items-center  cursor-pointer text-gray-800 hover:text-gray-100 hover:bg-gray-400  dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-300'
                        >
                            <GitHubIcon 
                                className='w-full h-full'
                            />

                        </Link>}
                    {project.url &&
                        <Link
                            href={project?.url}
                            target="_blank"
                            rel="noreferrer"
                            className='h-7 p-1 flex justify-center rounded-md items-center  cursor-pointer text-gray-800 hover:text-gray-100 hover:bg-gray-400  dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-300'
                        >
                            <LinkIcon className='w-4 h-4 ' />
                        </Link>
                    }
                    {project.docs &&
                        <Link
                            href={project?.docs}
                            target="_blank"
                            rel="noreferrer"
                            className='h-7 p-1 flex justify-center rounded-md items-center  cursor-pointer text-gray-800 hover:text-gray-100 hover:bg-gray-400  dark:text-gray-100 dark:hover:text-gray-800 dark:hover:bg-gray-300'
                        >
                            <DocumentIcon className='w-4 h-4 ' />
                        </Link>
                    }
                </div>
                {/* //     } */}
                {/* // </div> */}

            </div>
            <p
                className='text-xs h-3/5 overflow-y-auto'
            >
                {project?.description}
            </p>
        </div>
    )
}