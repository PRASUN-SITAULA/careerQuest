import jobImage from '../assets/job.png'

export default function Landing(){
    return(
        <div className='m-4 flex justify-center items-center'>
            <div className='w-full flex flex-col '>
                <div className='w-full flex md:flex-row flex-col-reverse relative bg-custom-blue justify-between items-center rounded-t-xl '>
                    <div className='mt-8 ml-8'>
                        <h1 className='text-white font-medium text-3xl'>Discover Your Next Career Opportunity with</h1>
                        <h1 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-100 inline-block text-transparent bg-clip-text text-7xl my-4'>careerQuest</h1>
                        <div className='md:w-3/4 w-5/6 my-4 text-white text-sm'> 
                        With advanced web scraping technology, the latest job postings from various websites is gathered and presented in one convenient location. Whether you're seeking a new challenge or exploring career options, the intuitive search functionality makes it easy to find the perfect opportunity. 
                        Start your job search journey today and take the next step towards your dream career!
                        </div>
                    </div>
                    <div class="circle rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"></div>
                    <div className='h-auto w-full flex md:justify-end md:mr-8 ml-8'>
                        <img
                        src={jobImage}
                        alt="Banner"
                        className="opacity-90 "
                        />
                    </div>
                </div>
                    <div className='bg-custom-blue'>
                        <button className='py-2 px-2 rounded bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 ml-8 text-white font-medium pointer'>Get Started</button>
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