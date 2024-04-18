import search from '../assets/search.png'
import listing from '../assets/listing.png'

export default function Feature() {
  return (
    <div className="max-w-screen-2xl mx-4 mt-40 ">
        <div className='flex justify-center mb-10'>
            <h2 className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-center font-bold text-5xl">Features</h2>
        </div>
        <div className='bg-custom-blue rounded-xl'>
            <div className="flex flex-col md:flex-row justify-between items-center ml-4 h-64 pt-24">
                <div className='w-1/2 px-4'>
                    <img src={search} alt="Search" />
                </div>
                <div className='w-full px-4 md:w-2/5 mr-20'>
                    <h2 className='font-bold text-2xl md:text-4xl text-white mb-4 w-full'>Search based on categories</h2>
                    <p className='text-roboto text-[8px] md:text-[18px] text-white'>Narrow down your job search with our search filters for Software Engineer, UI designer and Hardware Engineer.</p>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-1 ml-4 mb-24">
                <div className='w-full px-4 md:w-2/5 ml-20'>
                    <h2 className='font-bold text-2xl md:text-4xl text-white mb-4'>Detailed Job Listings</h2>
                    <p className='text-roboto text-white text-[8px] md:text-[18px]'>Explore a vast array of job listings spanning various industries, roles, and locations</p>
                </div>

                <div>
                    <img src={listing} alt="Listing image" />
                </div>
            </div>
        </div>
        
    </div>
  )
}