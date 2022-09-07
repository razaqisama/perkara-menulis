export const SearchBar = ({...props}) => {
    return (
        <div className="rounded-full flex flex-row items-center px-2 border-[1px] m-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input 
                {...props}
                className="w-full py-1 px-2 bg-transparent outline-none"
            />
        </div>
    )
}