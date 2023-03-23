import { Link as ReactLink } from "react-router-dom";

export const Link = ({ children, ...props }) => {
  const { href } = { ...props }
  return (
    <div className="flex items-center justify-between">
      <div className="text-md w-full">
        <ReactLink className="w-full" to={href} {...props}>
          {children}
        </ReactLink>
      </div>
    </div>
  );
}
