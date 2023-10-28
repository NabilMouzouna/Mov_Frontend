'use client'
import { usePathname } from "next/navigation"
import SlideShow from "./SlideShow"
import FeaturedSLideShow from "./FeaturedSLideShow"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { FilterContext } from "@app/(context)/CustomFilterContext"
import { SortContext } from "@app/(context)/SortContext"
const Main = () => {
  const {filterBy} = useContext(FilterContext)
  const {sortBy} = useContext(SortContext)
  const pathname = usePathname()
  const [page, setPage] = useState(1)
  const [docs, setDocs] = useState([])
  useEffect(() => {
     const getDocuments =async () => { 
      try {
       const res = await axios.get(`https://mov-dixe.onrender.com${pathname}?filterBy=${filterBy}&sortBy=${sortBy}&page=${page}`)
       if(res.data.length === 0) {setPage(1)}
        setDocs(res.data)
      } catch (error) {
        console.log(error)
      }}
      getDocuments() 
    },[page,sortBy,filterBy])
  return (
      <div className='sm:h-full max-w-7xl p-8'>
        {/*********** featured Cover  ************/}
        <FeaturedSLideShow Data={docs}/>
        {/*{/*********** SlideShow ************/}
        <SlideShow setPage={setPage} Page={page}  Data={docs}/>
    </div>
  )
}

export default Main
