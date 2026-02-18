type Props={
    style?: string;
    placeholder: string;
    rightIcon?: React.ReactNode;
    
};
const TextInput=({style, placeholder, rightIcon}: Props)=>{
    return(
        <div className={`relative ${style}`}>
            <input 
                type="text" 
                className={'border border-purple rounded-md pl-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 '}
            />
            <div className="absolute text-light-purple left-4 top-2">{placeholder}</div>
            {rightIcon && (<div className="absolute right-4 top-2">{rightIcon}</div>)}
        </div>
    );
}
export default TextInput;