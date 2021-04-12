import { ErrorMessage } from "formik";

interface IProps {
    name: string;
};

export const Error: React.FC = ({ name }: IProps) => {
    return (
        <div className={"error"}>
            <ErrorMessage name={name} />
        </div>
    );
};
