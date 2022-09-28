import { 
    StoryPreview, 
    TagSelector
} from "../Components"

export const Home = () => {
    const stories = Array(9).fill({})
    return (
        <div className="flex flex-col w-full px-8 lg:px-16 py-2 lg:py-8">
            <TagSelector />
            {
                stories.map((item, index) => {
                    return (
                        <StoryPreview key={index}/>
                    )
                })
            }
        </div>
    )
}