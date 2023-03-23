import { Link } from "react-router-dom";

export const TitleAndLink = ({ icon, linkTo, linkName, title, ...props }) => {
    return (
        <div className="flex items-center gap-5">

            <div>
                {icon}
            </div>
            <div className="flex flex-col gap-3">
                <p className="border border-transparent border-b-black py-3 text-gray-800 cursor-default"> {title} </p>
                <Link className="text-gray-600 hover:text-primary" to={linkTo} target={linkTo}>
                    {linkName}
                </Link>
            </div>
        </div>
    );
}
