import { NeoWs } from "../API_Cards/NeoWs"
import { SpaceXLaunches } from "../API_Cards/Launches"
import Quote from "./Quote"
import { ApodTest } from "../API_Cards/Apod"
import ExoplanetsChart from "../API_Cards/Exo"
const HomePage = () => {
return (
    <>
    <div className="max-w-7xl p-4 rounded-2xl bg-gray-800 mx-auto px-4 grid md:grid-cols-2 gap-5 mt-16">
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