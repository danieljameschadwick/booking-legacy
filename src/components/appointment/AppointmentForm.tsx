import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../util/state/Action";
import { DateTimePicker } from "./DateTimePicker";
import { Error } from "../util/form/Error";
import { SubmitButton } from "../util/buttons/SubmitButton";
import dayjs, { Dayjs } from "dayjs";

const BookingSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    dateTime: Yup.date().required('Required'),
});

interface IBooking {
    firstName: string;
    lastName: string;
    email: string;
    dateTime: Dayjs;
};

export const AppointmentForm: React.FC = () => {
    const dispatch = useDispatch();
    const booking: IBooking = useSelector(state => state.booking);

    return (
        <Formik 
            initialValues={{
                firstName: booking?.firstName ?? "",
                lastName: booking?.lastName ?? "",
                email: booking?.email ?? "",
                dateTime: booking.dateTime !== undefined
                    ? dayjs(booking.dateTime)
                    : dayjs(),
            }}
            enableReinitialize={true} 
            validationSchema={BookingSchema}
            onSubmit={values => {
                const { firstName, lastName, email, dateTime } = values;

                dispatch({
                    type: ACTION.BOOK,
                    payload: {
                        firstName,
                        lastName,
                        email,
                        dateTime
                    },
                });
            }}
        >
            {({ values, handleSubmit, setFieldValue }) => (
                <Form>
                    <div className={"form-row flex items-start"}>
                        <div className={"form-group w-1/2 pr-1"}>
                            <label>First Name:</label>

                            <Field
                                name={"firstName"}
                                className={"input"}
                            />

                            <Error name={"firstName"} />
                        </div>
                        

                        <div className={"form-group w-1/2 pl-1"}>
                            <label>Last Name:</label>

                            <Field
                                name={"lastName"}
                                className={"input"}
                            />

                            <Error name={"lastName"} />
                        </div>
                    </div>

                    <div className={"form-group form-row"}>
                        <label>Email:</label>

                        <Field 
                            name={"email"} 
                            className={"input"}
                        />
                    </div>

                    <div className={"form-group"}>
                        <Error name={"email"} />
                    </div>

                    <DateTimePicker
                        name="dateTime"
                        date={values.dateTime}
                        onChange={setFieldValue}
                    />

                    <div className={"form-group"}>
                        <Error name={"dateTime"} />
                    </div>

                    <div className={"hidden"}>
                        <Field name={"dateTime"} />
                    </div>

                    <SubmitButton onClick={handleSubmit} text={"Book"} />
                </Form>
            )}
        </Formik>
    )
};