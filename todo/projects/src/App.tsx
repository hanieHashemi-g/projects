// import Button from "./components/Button";
// import CheckBox from "./components/CheckBox";
// import TextInput from "./components/TextInput"
// import { Icon } from '@iconify/react';
import { Icon } from "@iconify/react";
import Button from "./components/Button";
import SelectOption from "./components/SelectOption";
import TextInput from "./components/TextInput";
import EmptyList from './assets/Detective-check-footprint 1.png'
import  Header from "./layout/header";
import Main from "./layout/main";
import CheckBox from "./components/CheckBox";
import todo, { type Todo } from "./store/zustand";
import React from "react";
import NewEditTaskModal from "./components/NewEditTaskModal";

function App() {
  const {todos ,addTodo,removeTodo,fetchTodos} = todo((state) => state);
  const [isModalOpen,setIsModalOpen]=React.useState<{isOpen:boolean,mode?:'edit'|'new',todo?:Todo}>({isOpen:false})
  React.useEffect(()=>{
    fetchTodos()
    
    
  },[])

  return (
    <>
      {/* <div className='bg-purple text-white p-4 text-center font-kanit font-medium text-2xl'>TODO LIST</div>
      
      <div className="w-1/2 m-auto mt-8">
      <TextInput placeholder="Search note..." rightIcon={<Icon icon="weui:search-outlined" width="24" height="24" color={'#6C63FF'}/>}/>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
      <Button label="Cancel" onClick={()=>{}} type="secondary"/>
      <Button label="Apply" onClick={()=>{}} type="primary"/>
      <Button label={<Icon icon="bx:moon" width="24" height="24" />} onClick={()=>{}} type="primary" style="!px-2 !py-2"/>
      <Button label={<Icon icon="akar-icons:plus" width="24" height="24" />} onClick={()=>{}} type="primary" style="!p-3 !rounded-full"/>
      <CheckBox/>
      </div>
     
      
      </div>
       */}

       <div className=" ">
        <div className="flex items-center flex-col h-screen">
          {/* header */}
              <div className="mt-10 font-kanit font-medium text-2xl">TODO LIST</div>
              <div className="w-1/2 flex flex-row mt-4 gap-4">
                  <TextInput placeholder="Search note..." rightIcon={<Icon icon="weui:search-outlined" width="24" height="24" color={'#6C63FF'}/>} style="flex-1"/>
                  <SelectOption options={[{value:'0',label:"All"},{value:'1',label:"Complete"},{value:'2',label:"Incomplete"}]} onSelect={()=>{}} defaultValue="0"/>
                  <Button label={<Icon icon="bx:moon" width="24" height="24" />} onClick={()=>{}} type="primary" style="!px-2 !py-2 cursor-pointer"/>
        
              </div>


          
          {/* main */}
          <div className="w-1/2 justify-center flex flex-row relative flex-1 ">
              {todos && todos.length===0?<div className="w-2/3 flex justify-center items-center mt-7 flex-col">
                  <img src={EmptyList} />
                  <div className="font-kanit font-medium text-xl mt-5">Empty...</div>
              </div>:<div className="w-2/3 justify-center mt-7 flex-col">
              {todos.map((item)=>{
                  return(<div key={item.id} className="flex flex-row items-center justify-center">
                      <CheckBox/>
                      <div className="font-kanit text-xl font-medium flex-1 ml-4 pb-2 flex items-center flex-row">{item.name}</div>
                      <Icon icon="octicon:pencil-24" width="13" height="13" className='text-light-gray hover:text-black'  />
                      <Icon icon="pepicons-pencil:trash" width="16" height="16" className="ml-3 text-light-gray hover:text-red-500 "/>

                  </div>)
              })}
              </div>}
          <Button label={<Icon icon="akar-icons:plus" width="24" height="24" />} onClick={()=>{setIsModalOpen({isOpen:true,mode:'new'})}} type="primary" style="!p-3 !rounded-full absolute bottom-8 right-2 cursor-pointer"/>
          </div>
        </div>
        {isModalOpen.isOpen&&<NewEditTaskModal requestClose={()=>{setIsModalOpen({isOpen:false})}}/>}
       </div>
    </>
  )
}

export default App
