const Button = ({text, onClick}) => {

    return(
        <button type="submit" className="bg-[#DFEAF6] w-full p-2.5 rounded-lg font-medium cursor-pointer" onClick={onClick}>
            {text}
        </button>
    )
}
export default Button;