import Logo from '../../assets/Logo.png';


export const StoryPreview = () => {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta urna nisl, sed commodo purus cursus id. Cras lobortis hendrerit molestie. Etiam ullamcorper mauris erat. Praesent et pharetra libero. Praesent tempor elementum semper. Fusce et diam consequat dui porta posuere a quis sapien. Donec facilisis felis purus, id posuere magna malesuada eu. Vivamus in metus sed ante mattis interdum at id arcu. Vestibulum sapien tellus, aliquam ut ullamcorper dictum, bibendum ut orci. Morbi nec mi porttitor, pellentesque nunc vitae, hendrerit leo. Curabitur vel luctus diam, eget faucibus nibh. Morbi vitae risus faucibus, laoreet ex commodo, auctor augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta urna nisl, sed commodo purus cursus id. Cras lobortis hendrerit molestie. Etiam ullamcorper mauris erat. Praesent et pharetra libero. Praesent tempor elementum semper. Fusce et diam consequat dui porta posuere a quis sapien. Donec facilisis felis purus, id posuere magna malesuada eu. Vivamus in metus sed ante mattis interdum at id arcu. Vestibulum sapien tellus, aliquam ut ullamcorper dictum, bibendum ut orci. Morbi nec mi porttitor, pellentesque nunc vitae, hendrerit leo. Curabitur vel luctus diam, eget faucibus nibh. Morbi vitae risus faucibus, laoreet ex commodo, auctor augue.`
    
    const cutWord = (text) => {
        const a = text.split(' ');
        if(a.length > 128) {
            const result = a.slice(0, 128);
            result.push('...')
            return result.join(' ')
        } else {
            return text
        }
    }

    cutWord(lorem)
    
    return (
        <div className="py-2 border-b-[1px] hover:bg-gray-600 transition duration-300 ease-in-out px-4 cursor-pointer">
            <img src={Logo} alt="Articles" className="w-32 px-2 float-left"></img>
            <div className="flex flex-row items-center justify-end space-x-2 text-xs">
                <div className="w-8 h-8 rounded-full bg-white"></div>
                <p>Writers Name</p>
                <p>·</p>
                <p>9/20/2022</p>
            </div>
            <p>{cutWord(lorem)}</p>
            <div className="flex flex-row justify-between py-2">
                <p className="rounded-full px-2 py-1 bg-gray-800 text-xs">Programming</p>
                <div className="flex flex-row space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}