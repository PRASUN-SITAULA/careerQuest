import jobImage from '../assets/job.png'

export default function Landing(){
    return(
        <div className='my-8 mx-4 flex justify-center items-center'>
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
        </div>
    )
}