export const TagSelector = () => {
    const tags = Array(9).fill({})

    return (
        <div className="sticky top-0 flex flex-row items-center border-b-[1px] bg-gray-900 my-2">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <div className="flex-auto overflow-x-auto">
                <div className="flex flex-row space-x-1 py-1">
                    {
                        tags.map((item, index) => {
                            return (
                                <p className="rounded-full px-2 py-2 bg-gray-700 text-xs w-max">Programming</p>
                            )
                        })
                    }
                </div>
            </div>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    )
}