const Button = ({text, onClick, style, className, type}) => {
    return (
        <button onClick={onClick} style={style} className={className} type={type}>
            {text}
        </button>
    );
};


export default Button;