import clsx from "clsx";

function getClassName({ className }) {
    return clsx(
        'text-white text-lg font-bold rounded-xl transiton duration-300 cursor-pointer focus:outline-none foucs:ring-2 focus:ring-poacity-50',
        className
    )
}

const sizes = {
    small: 'px-4 py-3',
    medium: 'px-6 py-4',
    large: 'w-full px-4 py-3',
};

const variants = {
    primary: 'bg-marigold focus:ring-marigold',
    secondary: 'bg-tomato focus:ring-tomato',
    dark: 'bg-black focus:ring-white',
};



const Button = ({
    children,
    className,
    size = 'small',
    variant = 'primary',
    ...rest

}) => {
    return (
        <button className={clsx(
            sizes[size],
            variants[variant],
            getClassName({ className })
        )}

            {...rest}
        >
            {children}
        </button>
    )
}
export default Button;