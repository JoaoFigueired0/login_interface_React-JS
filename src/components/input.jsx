function Input(props) {

    return (
        <div className="flex flex-col w-[100%] ml-[5%]">
            <label className="flex w-[55px] relative left-[5px]">{props.label}</label>
            <input className="flex w-[320px] h-[30px] bg-[#E3E2E2] px-[5px] py-[3px] rounded-[5px] text-[11px] content-center" type={props.type} placeholder={props.placeholder} required />
            
        </div>
    );
}

export default Input;