import { LightBulbIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { use, useEffect, useState } from "react"


export const Navbar = () => {

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
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light")
    }

    return (
        <div className="fixed z-50 pt-4 pb-2 top-0  flex font-bold items-center justify-center gap-4 w-full backdrop-blur-md dark:text-white">
            <Link
                href={"/"}
                className="flex text-xs gap-2 items-center hover:text-blue-500"
            >
                <p>Perfil</p>
            </Link>
            <Link
                href={"#contact"}
                className="flex text-xs gap-2 items-center hover:text-blue-500"
            >
                <p>Contacto</p>
            </Link>
            <Link
                href={"#presentation"}
                className="flex text-xs gap-2 items-center hover:text-blue-500"

            >
                <p>Presentación</p>
            </Link>
            <Link
                href={"#projects"}
                className="flex text-xs gap-2 items-center hover:text-blue-500"

            >
                <p>Proyectos</p>
            </Link>
            {
                <LightBulbIcon onClick={()=> handlerTheme()}  className="text-yellow-500 w-4 h-4  dark:text-gray-100" />
            }
        </div >
    )
}   