import { 
    StoryPreview, 
    TagSelector
} from "../Components"

export const Home = () => {
    const stories = Array(9).fill({})
    return (
        <div className="flex flex-col w-full px-16 py-8">
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