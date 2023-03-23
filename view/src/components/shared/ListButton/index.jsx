export const ListButton = ({className,name,...props}) => {
    return (<>
        <li >
            <button className={` py-4 px-3 w-full h-full hover:bg-primary hover:text-white  border focus:bg-primary focus:text-white ${className} `} {...props} >
            {name}
            </button>
        </li>
    </>);
}

