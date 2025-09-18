import { NeoWs } from "../API_Cards/NeoWs"
import { SpaceXLaunches } from "../API_Cards/Launches"
import Quote from "./Quote"
import { ApodTest } from "../API_Cards/Apod"
import ExoplanetsChart from "../API_Cards/Exo"
const HomePage = () => {
return (
    <>
    <div className="w-full bg-gray-800 max-w-7xl mx-auto mt-16 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
            <ApodTest/>
            <ExoplanetsChart/>
        </div>
        <div className="space-y-6">
            <NeoWs />
            <SpaceXLaunches/>  
        </div>
    </div>
    <Quote/>
    </>
    
)
}

export default HomePage