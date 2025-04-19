interface LabelInputType{
    label: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    type?: string
}

export const LabelInput = ({label, placeholder, onChange,type}: LabelInputType)=>{
    return <>
        <div className="mt-3">
            <label htmlFor="entry" className="block mb-2 text-md font-medium text-gray-900">{label}</label>
            <input onChange={onChange} type={type|| "text"} id="entry" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </>
}