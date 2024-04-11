import jobImage from '../assets/job.png'


export default function Landing(){
    return(
        <div className='my-8 mx-4 flex justify-center items-center'>
            <div className='w-full flex flex-col '>
                <div className='w-full flex flex-row bg-custom-blue justify-between items-center '>
                    <div>
                        <p>Hello</p>
                    </div>
                    
                    <div className='w-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" opacity="0.15"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	                    <feGaussianBlur stdDeviation="31" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="186.5" ry="157.5" cx="402.9707362356228" cy="379.9963097615591" fill="hsla(0, 0%, 80%, 1.00)"></ellipse><ellipse rx="186.5" ry="157.5" cx="508.17919422987336" cy="352.838345393882" fill="hsla(212, 15%, 91%, 1.00)"></ellipse></g>
                    </svg>
                    </div>
                    
                
                    <div className='h-auto w-full  flex justify-end mr-8 ' >
                        <img
                        src={jobImage}
                        alt="Banner"
                        className="opacity-80"
                        />
                    </div>
                </div>
                {/* <div className='h-10 w-full'>
                <svg id="visual" viewBox="0 0 900 600" width="900" xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <path d="M0 391L21.5 405.7C43 420.3 86 449.7 128.8 473.7C171.7 497.7 214.3 516.3 257.2 505C300 493.7 343 452.3 385.8 441.3C428.7 430.3 471.3 449.7 514.2 464.8C557 480 600 491 642.8 494.7C685.7 498.3 728.3 494.7 771.2 477.5C814 460.3 857 429.7 878.5 414.3L900 399L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#001122" stroke-linecap="round" stroke-linejoin="miter"></path></svg>

                </div> */}
            </div>
            
           
        </div>
    )
}