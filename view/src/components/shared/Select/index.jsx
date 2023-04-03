export const Select = ({error, label, forLabale, children,validation ,className,...props}) => {
    return (
        <>
            <label for={forLabale}>{label}</label>
            <select  {...validation} className={`rounded-md ${className}`} {...props} >
                {children}
            </select>
            {error && <p className=' bg-red-300 mt-3 p-3 rounded border border-red-900'>{error}</p>}

        </>
    );
}

