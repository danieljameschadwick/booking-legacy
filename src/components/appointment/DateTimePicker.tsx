import DatePicker from "react-datepicker";

interface IProps {
    name: string;
    date: Date;
    onChange: (key: string, date: Date) => {};
};

export const DateTimePicker = ({name, date, onChange}: IProps) => {
    return (
        <DatePicker
            name={name}
            selected={date}
            onChange={date => onChange('dateTime', date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            inline
        />
    );
};
