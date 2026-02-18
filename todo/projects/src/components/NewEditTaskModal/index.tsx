import ModalWrraper from "../ModalWrraper"
type Props={
    requestClose:()=>void
}
const NewEditTaskModal=({requestClose}:Props)=>{
return (
    <ModalWrraper requestClose={requestClose} >
        <div className="bg-red-500 w-13 h-13">hi</div>
    </ModalWrraper>
)
}
export default NewEditTaskModal