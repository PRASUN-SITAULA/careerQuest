import jobImage from '../assets/job.jpeg'

export default function Landing(){
    return(
        <div className='m-10 flex justify-center items-center'>
            <div className='relative w-full flex justify-center items-center'>
                <div className='h-auto w-full bg-transparent flex justify-center' >
                    <div>
                        <img src={jobImage} alt="Person searching for a job"/>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Banner</h1>
                    <p className="text-lg md:text-xl">desc</p>
                </div>
            </div>
        </div>
    )
}