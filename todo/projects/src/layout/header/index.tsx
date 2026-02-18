import { Icon } from "@iconify/react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SelectOption from "../../components/SelectOption";

const Header =()=>{
    return(
        <div className="flex items-center flex-col">
            <div className="mt-10 font-kanit font-medium text-2xl">TODO LIST</div>
            <div className="w-1/2 flex flex-row mt-4 gap-4">
                <TextInput placeholder="Search note..." rightIcon={<Icon icon="weui:search-outlined" width="24" height="24" color={'#6C63FF'}/>} style="flex-1"/>
                <SelectOption options={[{value:'0',label:"All"},{value:'1',label:"Complete"},{value:'2',label:"Incomplete"}]} onSelect={()=>{}} defaultValue="0"/>
                <Button label={<Icon icon="bx:moon" width="24" height="24" />} onClick={()=>{}} type="primary" style="!px-2 !py-2 cursor-pointer"/>
      
            </div>


        </div>
    )
}
export default Header;