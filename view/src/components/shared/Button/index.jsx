export const Button = ({className, children, icon, ...props }) => {
  return (

    <button
    // className={className?className:`w-1/5 group relative flex  justify-center rounded-md border-2 border-primary bg-white py-3 px-4 text-sm text-primary font-medium  hover:bg-primary hover:text-white focus:text-white focus:bg-primary focus:ring-1 focus:ring-primary focus:ring-offset-1  $`}
      className={`w-1/5 group relative flex  justify-center rounded-md border-2 border-primary bg-white py-3 px-4 text-sm text-primary font-medium  hover:bg-primary hover:text-white focus:text-white focus:bg-primary focus:ring-1 focus:ring-primary focus:ring-offset-1  ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

