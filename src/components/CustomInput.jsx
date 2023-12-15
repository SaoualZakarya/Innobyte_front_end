
export const CustomInput = (props) => {
    const {name,type,className,value,onChange} = props
  return (
    <div>
        <input 
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={`${className} my-2 bg-white border-[#E5E7EB] border-2 outline-none px-4 py-3 rounded-xl border-solid h-10 w-[300px] md:w-[350px]`}
        />
    </div>
  )
}
