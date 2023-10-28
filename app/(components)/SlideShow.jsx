
const SlideShow = ({setPage,Page,Data}) => {
  if(Data.length === 0) return <div className="h-2/6 grid place-content-center ">No content for this Genre 😔</div>
  return (
    <section className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:h-2/6 mt-10 relative '>
      <span 
      onClick={() => { 
        if(Page>0) setPage(Page - 1)
      }}
      className='absolute bottom-20 sm:top-1/2 sm:bottom-1/2 sm:-translate-y-1/2 bg-blue-500 bg-opacity-80 w-11 h-11 grid place-content-center cursor-pointer z-10'>{'<-'}</span>
        {
        Data.map((item) => {
          return (
            <div 
              key={item.name}
              className='rounded-lg overflow-hidden relative skeleton-loader max-h-[250px] md:max-h-[350px] overlay'>
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 flex justify-between items-center text-sm">
                  <div>
                  <h1 className="font-semibold">{item.name}</h1>
                  {item.genre.map((gen) => <span className="text-xs ">{gen+' '}</span>)}
                  <br />
                  <span>{item.year}</span>
                  </div>
                  <h1 className="bg-orange-500 p-1 rounded-lg">{item.rating}</h1>
                </div>
              <img 
              className='w-full h-full object-fit'
              src={item.img} alt={item.name} 
              
              />
            </div>
          )
         })
        } 

        <span 
        onClick={() => { 
           setPage(Page + 1)
        }}
        className='absolute bottom-20 sm:top-1/2 sm:bottom-1/2 sm:-translate-y-1/2 bg-blue-500 bg-opacity-80 w-11 h-11 grid place-content-center cursor-pointer right-0 z-10'>{'->'}</span>
    </section>
  )
}

export default SlideShow