type IProps = {
    text: string;
    additionalClassName?: string;
    onClick?: () => void;
    type?: string;
};

export const Button: React.FC = ({text, additionalClassName, onClick, type}: IProps) => {
    return (
        <button onClick={onClick} className={`button ${additionalClassName ?? ''}`} type={type !== undefined ? type : ''}>
            {text}
        </button>
    )
};
