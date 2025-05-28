const Input = ({label, type, id, onChange, value}) => {
    return(
                  <div className="relative mb-8 w-full">
            <input
              type={type}
              id={id}
              value={value}
              onChange={onChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-1 border-gray-300 appearance-none focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor={id}
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F4F7FE] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 capitalize"
            >
                {label}
            </label>
          </div>
    )
}
export default Input;