export const RecommendedTopics = () => {
    const recommendedTopics = ["Crime", "Psychology", "Thriller", "Mystery", "Fiction", "Non Fiction", "Philosophy", "Adventure", "Joko Anwar"]

    return (
        <div className="flex flex-col py-2 px-2 border-b-[1px]">
            <p className="font-bold">Recommended Topics</p>
            <div className="flex flex-wrap">
                {
                    recommendedTopics.map((item, index) => {
                        return (
                            <div key={index} className="max-w cursor-pointer rounded-full m-2 px-2 py-1 bg-white">
                                <p className="text-center text-sm text-gray-900">{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}