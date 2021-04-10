import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../util/state/Action";
import { DateTimePicker } from "./DateTimePicker";
import { SubmitButton } from "../util/buttons/SubmitButton";
import dayjs, { Dayjs } from "dayjs";

const BookingSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    dateTime: Yup.date().required('Required'),
});

interface IBooking {
    firstName: string;
    lastName: string;
    dateTime: Dayjs;
}

export const AppointmentForm = () => {
    const dispatch = useDispatch();
    const booking: IBooking = useSelector(state => state.booking);

    return (
        <Formik 
            initialValues={{
                firstName: booking?.firstName ?? "",
                lastName: booking?.lastName ?? "",
                dateTime: booking.dateTime !== undefined
                    ? dayjs(booking.dateTime)
                    : dayjs(),
            }}
            enableReinitialize={true} 
            validationSchema={BookingSchema}
            onSubmit={values => {
                const { firstName, lastName, dateTime } = values;

                dispatch({
                    type: ACTION.BOOK,
                    payload: {
                        firstName,
                        lastName,
                        dateTime
                    },
                });
            }}
        >
            {({ values, handleSubmit, setFieldValue }) => (
                <Form>
                    <div className={"form-row"}>
                        <Field name={"firstName"} />
                        <Field name={"lastName"} />
                    </div>

                    <div className={"form-row"}>
                        <Field name={"dateTime"} />
                    </div>

                    <div className={"form-row"}>
                        <DateTimePicker
                            name="dateTime"
                            date={values.dateTime}
                            onChange={setFieldValue}
                        />
                    </div>

                    <SubmitButton onClick={handleSubmit} text={"Book"} />
                </Form>
            )}
        </Formik>
    )
};