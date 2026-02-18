import type React from "react"

type Props={
    children:React.ReactNode;
    requestClose:()=>void
}
const ModalWrraper=({children,requestClose}:Props)=>{
    console.log('open');
    
    return(
        <div className="w-full h-full bg-blackop flex items-center justify-center absolute z-30" onClick={()=>{console.log('wtfs');
        ;requestClose()}}>
            <div className="z-50" >

            {children}
            </div>

        </div>
    )
}
export default ModalWrraper