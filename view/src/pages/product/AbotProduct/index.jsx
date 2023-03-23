export const AbotProduct = ({data}) => {
    return (  
        <div className="pt-4 border rounded-lg mt-12 bg-gray-50">
                <div className="px-3">
                    <p className="text-2xl">توضیحات محصول</p>
                </div>
                <div className="p-3">
                    <p>
                        {data}
                    </p>
                </div>
            </div>
     
    );
}
 
