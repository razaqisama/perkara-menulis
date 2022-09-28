import { useState } from 'react';
import Logo from '../../assets/Logo.png';

export const Sidebar = ({menu}) => {
    const [isExtended, setIsExtended] = useState(true);
    const menuDummy = Array(2).fill({})
    const subMenuDummy = Array(4).fill({})
    return (
        <div className={`relative h-full ${isExtended ? "w-[240px]" : "w-[60px]" } border-r-[1px] hidden lg:flex flex-col transition-[width] duration-300 ease-in-out`}>
            <div
                onClick={(e) => {
                    e.preventDefault();
                    setIsExtended(!isExtended);
                }} 
                className={`${isExtended ? "" : "rotate-180"} hidden lg:inline absolute cursor-pointer bg-gray-900 border-[1px] p-1 top-1 right-0 transform translate-x-1/2 transition duration-300 ease-in-out`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center py-4 mt-8">
                <img className={`${isExtended ? "w-16" : "w-12"} transition-[width] duration-300 ease-in-out`} src={Logo} alt="brand" />
                <p className={`${isExtended ? "opacity-100 text-xl" : "opacity-0 text-xs"} min-w-[200px] text-center transition-[font,opacity] duration-300 ease-in-out font-bold tracking-[0.1em] py-1`}>Perkara Menulis</p>
            </div>
            <div className="flex flex-col flex-auto overflow-y-auto overflow-x-hidden">
            {
                menuDummy.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col space-y-2 border-b-[1px] py-4">
                            <p className={`${isExtended ? "" : "opacity-0"} px-2 font-bold tracking-[0.1em]`}>Category</p>
                            {
                                subMenuDummy.map((item, index) => {
                                    return (
                                        <div key={index} className={`w-full py-2 flex flex-row overflow-hidden select-none cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out`}>
                                            <div className="flex justify-center items-center min-w-[60px] max-w-[60px]">
                                                <svg className="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                </svg>
                                            </div>
                                            <p className={`${isExtended ? "" : "opacity-0"} transition duration-300 ease-in-out self-end px-4 font-bold min-w-[200px] text-gray-300 text-xs`}>MENU NAME NIME NUME NEME NOME</p>
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}