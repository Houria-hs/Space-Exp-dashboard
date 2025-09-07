import { NeoWs } from "../API_Cards/NeoWs"
import { SpaceXLaunches } from "../API_Cards/Launches"
import {ApodTest} from "../API_Cards/ApodTest"
import {DonkiApi} from "../API_Cards/Donki"
import Quote from "./Quote"
const HomePage = () => {
return (
    <>
    <div className="max-w-7xl p-4 rounded-2xl bg-gray-800 mx-auto px-4 grid md:grid-cols-2 gap-5 mt-16">
        <div className="space-y-6">
            <ApodTest />
            <NeoWs />
        </div>
        <div className="space-y-6">
            <SpaceXLaunches />
            <DonkiApi />
        </div>
    </div>
    <Quote/>
    </>
    
)
}

export default HomePage