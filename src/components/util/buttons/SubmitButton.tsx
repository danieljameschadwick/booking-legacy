import { Button } from './Button';

type IProps = {
    text: string;
    additionalClassName?: string;
    onClick?: () => void;
};

export const SubmitButton = ({text, additionalClassName, onClick}: IProps) => {
    return (
        <Button text={text} onClick={onClick} additionalClassName={additionalClassName} type={"submit"} />
    )
};
