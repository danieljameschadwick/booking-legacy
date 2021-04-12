import dayjs, { Dayjs } from "dayjs";
import DatePicker from "react-datepicker";

interface IProps {
    name: string;
    date: Dayjs;
    onChange: (key: string, date: Date) => {};
};

export const DateTimePicker: React.FC = ({ name, date, onChange }: IProps) => {
    const minTime = dayjs().isSame(date, "day") 
        ? dayjs().toDate()
        : dayjs().startOf("day").toDate();

    return (
        <DatePicker
            name={name}
            calendarClassName={"datepicker"}
            selected={date.toDate()}
            minDate={dayjs().toDate()}
            minTime={minTime}
            maxTime={dayjs().endOf("day").toDate()}
            onChange={date => onChange("dateTime", dayjs(date))}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            inline
        />
    );
};
