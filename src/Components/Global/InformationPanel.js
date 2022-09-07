import { RecomendedTopics, SuggestedWriters, Trending } from "../Home"
import { SearchBar } from "./SearchBar"

export const InformationPanel = () => {
    return (
        <div className="h-full min-w-[300px] max-w-[300px] border-l-[1px] overflow-y-auto">
            <div className="flex flex-col border-b-[1px] pb-4 sticky top-0 bg-gray-900 z-[99]">
                <SearchBar />
                <div className="cursor-pointer rounded-full m-2 px-2 py-1 bg-white">
                    <p className="text-center text-sm text-gray-900">Support Your Favorite Writer</p>
                </div>
                <div className="cursor-pointer rounded-full m-2 px-2 py-1 bg-white">
                    <p className="text-center text-sm text-gray-900">Become a Member</p>
                </div>
            </div>
            <div className="py-4 border-b-[1px]">
                <div className="relative flex justify-center items-center border-[1px] p-4 m-2 h-[240px]">
                    <div className="absolute cursor-pointer top-2 right-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <p>Ads</p>
                </div>
            </div>
            <Trending />
            <SuggestedWriters />
            <RecomendedTopics />
        </div>
    )
}