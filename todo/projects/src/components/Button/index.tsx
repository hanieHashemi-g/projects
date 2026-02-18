type Props={
    type:'primary' | 'secondary';
    label: string |React.ReactNode;
    onClick: ()=>void;
    style?: string;

}
const Button =({type, label, onClick, style}: Props)=>{
    return(
        <button onClick={onClick} className={`px-5 py-2 text-lg rounded-md font-medium border border-purple ${type === 'primary' ? 'bg-purple text-white' : 'bg-white text-purple'} ${style}`}>
            {label}
        </button>
    )

}
export default Button;