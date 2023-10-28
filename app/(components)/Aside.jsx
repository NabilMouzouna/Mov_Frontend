'use client'
import { FilterContext } from "@app/(context)/CustomFilterContext"
import { MenuContext } from "@app/(context)/MenuContext"
import { SortContext } from "@app/(context)/SortContext"
import { useContext } from "react"

const Aside = () => {
    const {isOpened,setIsOpened} = useContext(MenuContext)
    const {setFilter} = useContext(FilterContext)
    const {setSortBy} = useContext(SortContext)
    const genreOptions = [
        "All",
        "Action",
        "Romance",
        "Fantasy",
        "Mystery",
        "Drama",
        "Crime",
        "Adventure",
        "Thriller",
        "Music",
        "Family",
        "Sci-fi"
    ]
  
    return <aside className="md:w-1/4">
        <div className={`w-full  md:px-6 md:py-10 max-md:fixed max-md:inset-0 max-md:p-4 bg-mainBgColor z-40  max-md:justify-between max-md:items-center  ${isOpened? "max-md:flex max-sm:block" : "max-md:hidden"}`}>
        <section>
        <div className="flex gap-4 items-center">
            <div className="rounded-full w-12 h-12 bg-orange-500">
            </div>
            <div>
            <h1>Nabil Mouzouna</h1>
            <span className="text-md text-secondaryTextColor cursor-pointer">see profile</span>
            </div>
        </div>

        <h1 className="my-5 text-lg">Genre</h1>
        {genreOptions.map((genre,index) => (
            <div key={index} className="my-2 text-sm">
            <input 
            onClick={() => { setFilter(genre)}}
            type="radio" name='genre' id={genre} className="mr-2 bg-orange-500 active:bg-current"/>
            <label htmlFor={genre} className="active:text-orange-400 hover:text-orange-500">{genre}</label>
            </div>
        ))}
        </section>
        <section>
            <h1 className="my-5 text-lg">Sort</h1>
            <select 
            onChange={(e) => { setSortBy(e.target.value) }}
            name="Sort" id="Sort" defaultValue='rating' className="outline-none py-2 px-4 border border-mainTextColor bg-transparent min-w-[150px]" >
                <option value="rating">Rating</option>
                <option value="year">Year</option>

            </select>
                <h1 className="my-5 text-lg">General</h1>
                <h2 className="text-secondaryTextColor text-lg p-2 my-2 cursor-pointer">Settings</h2>
                <h2 className="text-secondaryTextColor text-lg p-2 cursor-pointer">Logout</h2>
        </section>
        </div>
        <div 
        cla
        onClick={() => { 
            setIsOpened(false)
         }}
        className={`${isOpened? "grid": "hidden"} fixed z-40 bottom-10 left-1/2 right-1/2 font-bold text-xl bg-slate-800 rounded-md px-6 py-3 grid place-content-center`}>X</div>
    </aside>

}

export default Aside