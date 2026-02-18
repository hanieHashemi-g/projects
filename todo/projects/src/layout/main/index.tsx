import todo from "../../store/zustand";
import EmptyList from '../../assets/Detective-check-footprint 1.png'
import CheckBox from "../../components/CheckBox";
import { Icon } from "@iconify/react";
import Button from "../../components/Button";


const Main =()=>{
    const {todos ,addTodo,removeTodo} = todo((state) => state);
    return(
        <div className="w-full h-full justify-center flex flex-row relative">
        <div className="relative  w-1/2 justify-center flex flex-row">
            {todos && todos.length===0?<div className="w-2/3 flex justify-center items-center mt-7 flex-col">
                <img src={EmptyList} />
                <div className="font-kanit font-medium text-xl mt-5">Empty...</div>
            </div>:<div className="w-2/3 justify-center mt-7 flex-col">
            {todos.map((item)=>{
                return(<div key={item.id} className="flex flex-row items-center justify-center">
                    <CheckBox/>
                    <div className="font-kanit text-xl font-medium flex-1 ml-4 pb-2 flex items-center flex-row">{item.name}</div>
                    <Icon icon="octicon:pencil-24" width="13" height="13" className='text-light-gray hover:text-black'  />
                    <Icon icon="pepicons-pencil:trash" width="16" height="16" className="ml-3 text-light-gray hover:text-red-500"/>

                </div>)
            })}
            </div>}
        </div>
        <Button label={<Icon icon="akar-icons:plus" width="24" height="24" />} onClick={()=>{}} type="primary" style="!p-3 !rounded-full absolute bottom-8 right-2"/>
        </div>
         
    )
}
export default Main;