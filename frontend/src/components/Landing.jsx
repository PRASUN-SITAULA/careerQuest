import jobImage from '../assets/job.png'


export default function Landing(){
    return(
        <div className='my-8 mx-4 flex justify-center items-center'>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-row bg-custom-blue justify-between items-center '>
                    <div>
                        <p>Hello</p>
                    </div>
                    
                    <div className='h-auto w-full  flex justify-end mr-8 ' >
                        <img
                        src={jobImage}
                        alt="Banner"
                        className="opacity-80"
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