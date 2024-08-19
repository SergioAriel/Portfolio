import Image from "next/image"
import imgProfile from '../../public/profile/imgProfile.jpeg'
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

export const Contact = () => {

    const [from, setFrom] = useState({
        name: "",
        email: ""
    })
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)


    const handleSubmit = () => {
        if (!from.email || !from.email || !subject || !message) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000)
            return
        }
        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from,
                subject,
                message,
            }),
        })
            .then((res) => {
                if (res.status === 500) {
                    setError(true)
                    setTimeout(() => {
                        setError(false)
                    }, 2000)
                    return;
                }
                return res.json()
                    
            })
            .then((data) => {
                if (data.res === "success") {
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    }, 2000)
                    return;
                }
            })
            .catch((err) => {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 2000)
            })
    }

    return (
        <div
            id="contact"
            className=" w-full border bg-white dark:bg-slate-700 rounded-xl border-gray-100 p-4 shadow-md lg:-space-x-1 flex flex-col lg:flex-row  justify-center "
        >
            <Image
                className=" hidden lg:block w-14 h-14 rounded-full z-10 border border-gray-500"
                alt="Sergio Ariel Solis"
                width={200}
                height={200}
                src={imgProfile}
            />
            <div
                className="flex w-full items-center justify-between"
            >
                <div
                    className="flex flex-col gap-0 w-full "
                >
                    <div className="flex gap-0 w-full ">
                        <input
                            type="text"
                            placeholder="Nombre"
                            onChange={(e) => setFrom({
                                ...from,
                                name: e.target.value
                            })}
                            className="w-1/2 dark:bg-slate-400 bg-gray-200 dark:placeholder-white dark:text-white hover:bg-slate-100 dark:hover:bg-slate-300 rounded-tl-xl border h-6 p-2 border-black focus:outline-none focus:border-blue-500 focus:border-2"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setFrom({
                                ...from,
                                email: e.target.value
                            })}

                            className="w-1/2 dark:bg-slate-400 bg-gray-200 dark:placeholder-white dark:text-white hover:bg-slate-100 dark:hover:bg-slate-300 rounded-tr-xl border h-6 p-2 border-black focus:outline-none focus:border-blue-500 focus:border-2"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Asunto"
                        onChange={(e) => setSubject(e.target.value)}

                        className="w-full dark:bg-slate-400 bg-gray-200 dark:placeholder-white dark:text-white hover:bg-slate-100 dark:hover:bg-slate-300 border-x h-6 p-2 border-black focus:outline-none focus:border-blue-500 focus:border-2"
                    />
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full h-24 dark:bg-slate-400 bg-gray-200 dark:placeholder-white dark:text-white hover:bg-slate-100 dark:hover:bg-slate-300 rounded-b-xl border border-x  p-2 border-black resize-none focus:outline-none focus:border-blue-500 focus:border-2"
                        placeholder="Escribe aquí tu mensaje"

                    />
                </div>

                <PaperAirplaneIcon
                    onClick={handleSubmit}
                    className={`w-8 h-8 self-end mb-8 ${ success && "!text-green-500 !hover:text-green-400"  } ${error && "!text-red-600 !hover:text-red-500"} text-gray-500 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500`}
                />
            </div>

        </div>
    )
}