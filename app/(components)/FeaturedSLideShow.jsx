import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
const FeaturedSLideShow = ({ Data }) => {
  const pathname = usePathname();
  const initialCover = pathname === '/animes' ? "https://images7.alphacoders.com/132/1329456.jpeg" : "https://images5.alphacoders.com/131/1315822.jpg";
  const [cover, setCover] = useState(initialCover);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      const randomIndex = Math.floor(Math.random() * Data.length);
      const randomCover = Data[randomIndex]?.featured || initialCover;
      setCover(randomCover);
      setLoading(false);
    }, 8000);

    return () => clearInterval(interval);
  }, [Data, initialCover]);

  return (
    <section className='w-full h-3/6 overflow-hidden via-gray-800 relative overlay rounded-lg lg:h-[380px]'>
      {loading ? (
        <div className="object-fit object-center w-full h-full skeleton-loader"/>
      ) : (
        <>
        <img
          className="object-fit object-center w-full h-full"
          src={cover}
          alt="featured Cover"
        />
        </>
      )}
    </section>
  )
}

export default FeaturedSLideShow;
