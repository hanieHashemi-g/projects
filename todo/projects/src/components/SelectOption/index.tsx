import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import useOutsideClickSubscriber from "../../utils/hooks/useOutsideClickSubscriber";

type Props = {
    options: {label: string, value: string}[];
    onSelect: (value: string) => void;
    defaultValue?: string;

};
const Options =({options ,isVisible ,onSelect ,ref}:Props &{isVisible:boolean ;ref:React.RefObject<null>})=>{
return (
    <div ref={ref} className={`py-2 bg-white absolute left-0 border border-purple rounded-md ${isVisible ?'block':'hidden'}`}>
        {options.map(item=>{
            return(<div onClick={()=>onSelect(item.value)} className="bg-white px-1 text-purple font-kanit font-medium text-base hover:bg-light-purple cursor-pointer">{item.label}</div>)
        })}

    </div>
)
}
const SelectOption = ({onSelect,options,defaultValue}:Props) => {
    const [value,setValue]=React.useState<string>( defaultValue || "");
    const [dropDownOpen,setDropDownOpen]=React.useState(false)
    const btnValue= (val:string)=>{
       return options.find(item=>item.value===val)?.label
    }
    const ref =useRef(null)
    useOutsideClickSubscriber(ref,()=>setDropDownOpen(false))
  return (
        <div className="relative" ref={ref}>
            <button onClick={()=>setDropDownOpen(!dropDownOpen)} className={`pl-2.5 pr-3 py-2 rounded-md cursor-pointer  border border-purple flex-row items-center flex ${dropDownOpen ?'bg-dark-purple':'bg-purple '}`}>
            <div className="text-lg font-medium text-white font-kanit truncate min-w-19 max-w-19 text-start">{btnValue(value)}</div>
            {dropDownOpen?<Icon icon="mingcute:up-line" width="15" height="15" className="text-white" />:<Icon icon="mingcute:down-line" width="15" height="15" className="text-white" />}
            </button>
            <div ref={ref} className={`py-2 bg-white absolute left-0 border border-purple rounded-md ${dropDownOpen ?'block':'hidden'}`}>
                {options.map(item=>{
                    return(<div onClick={()=>{setValue(item.value);onSelect(item.value);setDropDownOpen(false)}} className={`px-1 text-purple font-kanit font-medium text-base hover:bg-light-purple cursor-pointer ${item.value === value ?'bg-purple-op':'bg-white '}`}>{item.label}</div>)
                })}
            </div>
        </div>
    )
};

export default SelectOption;