import Nav from '@app/(components)/Nav'
import Aside from '@app/(components)/Aside'
import Separate from '@app/(components)/Separate'
import Main from '@app/(components)/Content'
import FilterContextProvider from '@app/(context)/CustomFilterContext'
import SortContextProvider from '@app/(context)/SortContext'
import MenuContextProvider from '@app/(context)/MenuContext'
export default function Home() {
  return (
    <SortContextProvider>
    <FilterContextProvider>
      <MenuContextProvider>
    <main className="bg-mainBgColor text-mainTextColor w-full min-h-screen overflow-hidden">
      <div className='flex'>
        <Aside/>
        <Separate/>
        <div className='w-full'>
          <Nav/>
          <Main/>
        </div>
      </div>
    </main>
    </MenuContextProvider>
    </FilterContextProvider>
    </SortContextProvider>
  )
}
