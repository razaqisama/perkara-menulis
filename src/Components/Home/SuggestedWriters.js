export const SuggestedWriters = () => {
    const topWriters = Array(5).fill({})

    return (
        <div className="flex flex-col py-2 px-2 border-b-[1px]">
            <div className="flex flex-row justify-between">
                <p className="font-bold">Suggested Writers</p>
            </div>
            <div className="flex flex-col py-2 space-y-2">
                {
                    topWriters.map((item, index) => {
                        return (
                            <div className="flex flex-row items-center space-x-2 px-2">
                                <div className="w-6 h-6 rounded-full bg-white"></div>
                                <p>Writer Name</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}