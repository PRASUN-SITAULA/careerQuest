import axios from "axios"
import { useState, useEffect } from "react"
import JobCard from "../components/JobCard"

export default function Search(){

    const [jobsData, setJobsData] = useState([])
    const [userInput, setUserInput] = useState('')
    const [isLoading, setisLoading] = useState(false)

    const filterData = (requiredData) => {
        const filteredData = requiredData[userInput]
        console.log(filteredData)
        setJobsData(filteredData)
    }

    const handleInputChange = (event) => {
        setUserInput(event.target.value)
    }

    const handleSubmit =  async (event) => {
        event.preventDefault()
        // get the scraped data
        try{
            setisLoading(true)
            const response = await axios.get("http://127.0.0.1:8000/api/v1/jobs")
            const requiredData = response.data.data
            filterData(requiredData)
            setisLoading(false)
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div className="mt-10">
            <form className="max-w-xl mx-auto">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input value={userInput} type="search" onChange={handleInputChange} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-custom-blue dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Software Engineer, Hardware Engineer or UI Designer" required />
                    <button onClick={handleSubmit} className="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-semibold">{isLoading? 'Searching': 'Search'}</button>
                </div>
            </form>
            <div className="my-10 mx-4 flex flex-row gap-4 flex-wrap justify-center">
                {
                    jobsData.map((item, index) => (
                        <JobCard title={item.title} company_name={item.company_name} location={item.location} joblink={item.joblink} description={item.description}/>
                    ))
                }
                
            </div>
        </div>
    )
}