export const Trending = () => {
    const topWriters = Array(5).fill({})

    return (
        <div className="flex flex-col py-2 px-2 border-b-[1px]">
            <div className="flex flex-row justify-between">
                <p className="font-bold">Trending</p>
            </div>
            <div className="flex flex-col py-2 space-y-2">
                {
                    topWriters.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col flex-wrap space-x-2 px-2">
                                <p className="font-bold">Some Nice Title of An Article</p>
                                <p className="font-thin text-sm">Writer Name</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}