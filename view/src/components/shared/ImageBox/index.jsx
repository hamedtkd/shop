export const ImageBox = ({ children, aboutImg, link, img, ...props }) => {
    return (

        <div className="bg-gray-100 rounded-lg overflow-hidden h-40  lg:w-2/5 md:w-3/5" {...props} >
            <a href={link}>
                <img src={img} alt={aboutImg} width='100%' className="object-cover max-h-none h-full" />
            </a>
        </div>
    );
}