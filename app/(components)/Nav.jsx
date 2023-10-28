'use client'
import Link from "next/link"
import Image from "next/image"
import Menu from '@app/more.png'
import { useContext, useState } from "react"
import { MenuContext } from "@app/(context)/MenuContext"
const Nav = () => {
  const [search, setSearch] = useState('')
  const {setIsOpened} = useContext(MenuContext)
  return (
    <header  className="flex justify-between items-center px-12 py-10 w-full max-h-5">
      <div 
      onClick={() => { setIsOpened(true) }}
      className="block md:hidden"><Image src={Menu} width={40} height={40} alt="menu bar"/></div>
        <nav className="text-xl flex gap-5 md:gap-10 max-md:text-base max-sm:mx-4">
            <Link href='/movies'>Movies</Link>
            <Link href='/animes'>Animes</Link>
        </nav>
        <div>
            <input 
            onChange={(e) => { setSearch(e.target.value)}}
            className=" px-3 py-2 md:px-4 md:py-3 md:min-w-[250px] text-sm rounded-full outline-none border border-mainTextColor bg-transparent"
            type="text" placeholder="Search by Name"/>
        </div>
    </header>
  )
}

export default Nav