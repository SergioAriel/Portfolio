import { LightBulbIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { use, useEffect, useState } from "react"


export const Navbar = () => {

    useEffect(() => {        


          console.log(matchMedia)
    }, [])

    useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")

        const getThemePreference = () => {
            if (typeof localStorage !== "undefined") {
              return localStorage.getItem("theme") ?? "system"
            }
        
            return window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          }
        
        const themePreference = getThemePreference()
        const isDark =
          themePreference === "dark" ||
          (themePreference === "system" && matchMedia.matches)

        if (isDark) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [])

    const handlerTheme = () => {
        document.body.classList.toggle("dark")
        console.log(document.body.classList.contains("dark") ? "dark" : "light")
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light")
    }

    return (
        <div className="fixed z-50 top-0 flex font-bold items-center justify-center h-6 gap-4 w-full dark:text-white dark:bg-slate-700 bg-white shadow-md">
            <Link
                href={"/"}
                className="flex text-xs gap-2 items-center"
            >
                <p>Perfil</p>
            </Link>
            <Link
                href={"#contact"}
                className="flex text-xs gap-2 items-center"
            >
                <p>Contacto</p>
            </Link>
            <Link
                href={"#presentation"}
                className="flex text-xs gap-2 items-center"

            >
                <p>Presentación</p>
            </Link>
            <Link
                href={"#projects"}
                className="flex text-xs gap-2 items-center"

            >
                <p>Proyectos</p>
            </Link>
            {
                <LightBulbIcon onClick={()=> handlerTheme()}  className="text-yellow-500 w-4 h-4  dark:text-black" />
            }
        </div >
    )
}   