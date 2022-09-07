import {useRef} from 'react';

export const TagSelector = () => {
    const tags = ["Crime", "Psychological", "Thriller", "Mystery", "Fiction", "Non Fiction", "Philosophy", "Adventure", "Joko Anwar"]

    const scrollRef = useRef(null);

    const handleScroll = (e) => {
        e.preventDefault();
    }

    const handleNext = (e) => {
        e.preventDefault();
        scrollRef.current.scrollBy({
            top:0,
            left: 103,
            behavior: 'smooth'
        })
    }

    const handlePrev = (e) => {
        e.preventDefault();
        scrollRef.current.scrollBy({
            top:0,
            left: -103,
            behavior: 'smooth'
        })
    }

    return (
        <div className="sticky top-0 flex flex-row items-center border-b-[1px] bg-gray-900 my-2">
            <div className="relative w-6 h-6 flex justify-center items-center group">
                <svg onClick={handlePrev} 
                    style={{
                        background: "rgba(0, 0, 0, 0) linear-gradient(270deg, rgba(17, 24, 39, 0) 0px, rgb(17, 24, 39) 50%) repeat scroll 0% 0%"
                    }}
                    className="absolute z-[99] cursor-pointer w-14 h-6 transform group-hover:-translate-x-1 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>

            <div 
                className="flex-auto overflow-x-auto"
                ref={scrollRef}
                onScroll={handleScroll}
                >
                <div className="flex flex-row space-x-1 py-2">
                    {
                        tags.map((item, index) => {
                            return (
                                <p 
                                key={index} 
                                className="cursor-pointer rounded-full py-1 bg-gray-700 text-xs text-center min-w-[100px] hover:bg-gray-100 hover:text-gray-900 transition duration-[200ms] ease-in-out whitespace-nowrap">{item}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div className="relative w-6 h-6 flex justify-center items-center group">
                <svg 
                    style={{
                        background: "rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(17, 24, 39, 0) 0px, rgb(17, 24, 39) 50%) repeat scroll 0% 0%"
                    }}
                    onClick={handleNext} className="absolute right-0 bg-b z-[99] cursor-pointer w-14 h-6 transform translate-x-[24px] group-hover:translate-x-[30px] transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    )
}