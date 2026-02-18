import { Icon } from "@iconify/react"
const CheckBox = () => {
    return (<>
    <div className="relative">
    <input type="checkbox" 
    className={`peer h-7 w-7 cursor-pointer appearance-none rounded-xs border border-purple transition-all checked:border-purple checked:bg-purple  hover:opacity-50`}
          />
    <Icon icon="iconoir:check" width="24" height="24" className="peer-checked:opacity-100 transition-opacity pointer-events-none opacity-0 text-white absolute top-0.5 right-px"/>
    </div>
    </>)
}
export default CheckBox