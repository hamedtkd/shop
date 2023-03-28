export const CheckBoxList = ({ className,persianName, englishName, ...props }) => {
    return (
        <li className={`px-5 py-3 flex justify-between ${className}`} >
            <div className=" flex gap-3 items-center">
                <input className="text-gray-800 rounded-sm focus:ring-0" type="checkbox" value={englishName} name={englishName} id={englishName} { ...props } />
                <label className="text-sm text-gray-700" htmlFor="EBUG">{englishName}</label>
            </div>
            <p className="text-xs text-gray-500">{persianName}</p>
        </li>
    );
}

