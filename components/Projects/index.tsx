import Link from 'next/link'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { Router, useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Octokit } from 'octokit';


export default function Project({ project, id }: any) {
    const router = useRouter();
    const [popOver, setPopOver] = useState("");
    const popoverRef = useRef<HTMLDivElement>(null);
    const handlerPopOver = useRef<SVGSVGElement>(null);

    console.log(project)

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
            className='relative w-full border border-gray-200 shadow-md rounded-xl gap-2 p-2 flex flex-col items-center dark:hover:bg-gray-500 hover:bg-gray-100'
        >
            {
                (project?.github || project?.url) &&
                <div
                    className='absolute top-1 right-1'
                >

                    <div
                        className='relative w-full flex h-max justify-end'
                    >
                        <EllipsisHorizontalIcon
                            ref={handlerPopOver}
                            onClick={() => { 
                                id === popOver ? setPopOver("") : setPopOver(id);
                            }}
                            className='relative w-6 h-6 ml-auto'
                        />
                        {
                            popOver === id &&
                            <div
                                ref={popoverRef}
                                className=' absolute z-20 top-0 right-0 left-full w-max bg-gray-200 border border-gray-400 rounded-md flex flex-col p-1 gap-1'
                            >
                                {project?.github &&
                                    <Link
                                        href={project?.github?.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className='text-center text-sm h-7 p-2 flex justify-center rounded-t-md items-center dark:bg-slate-700 bg-white text-gray-700 hover:text-gray-500 hover:bg-gray-200 cursor-pointer '
                                    >
                                        Github

                                    </Link>}
                                {project.url &&
                                    <Link
                                        href={project?.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className='text-center text-sm h-7 p-2 flex justify-center rounded-b-md items-center dark:bg-slate-700 bg-white text-gray-700 hover:text-gray-500 hover:bg-gray-200 cursor-pointer '
                                    >
                                        Ver proyecto
                                    </Link>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
            <p
                className="text-center break-all font-bold text-sm !min-h-[20%]"
            >
                {project?.title}
            </p>
            <p
                className='text-center text-xs h-3/5 overflow-y-auto px-2'
            >
                {project?.description}
            </p>
        </div>
    )
}