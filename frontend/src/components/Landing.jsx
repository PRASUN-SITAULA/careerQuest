import jobImage from '../assets/job.png'


export default function Landing(){
    return(
        <div className='m-4 flex justify-center items-center'>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-row bg-custom-blue justify-between items-center rounded-t-xl'>
                    <div>
                        <h1 className='text-white text-bold text-lg'>Discover Your Next Career Opportunity with</h1>
                        <div className='w-3/4'>
                        Say goodbye to endless scrolling through job boards and let our platform do the heavy lifting for you. 
                        With advanced web scraping technology, we gather the latest job postings from various websites and present them in one convenient location. Whether you're seeking a new challenge or exploring career options, our intuitive search functionality makes it easy to find the perfect opportunity. 
                        Start your job search journey today and take the next step towards your dream career!
                        </div>
                    </div>
                    <div className='h-auto w-full flex justify-end mr-8'>
                        <img
                        src={jobImage}
                        alt="Banner"
                        className="opacity-70"
                        />
                    </div>
                </div>
                    <div className='w-full h-10 relative'>
                        <div class="custom-svg">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                            </svg>
                        </div>
                    </div>

            </div>
        </div>
    )
}