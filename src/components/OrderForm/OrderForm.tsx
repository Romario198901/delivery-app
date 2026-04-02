import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./OrderForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

export interface OrderFormValues {
  customerName: string;
  email: string;
  phone: string;
  address: string;
}

interface OrderFormProps {
  onSubmit: (values: OrderFormValues) => void;
  isSubmitting?: boolean;
}

const OrderSchema = Yup.object().shape({
  customerName: Yup.string()
    .trim()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Customer name is required"),

  email: Yup.string()
    .trim()
    .email("Email should be valid and contain @")
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .matches(/^\+?[0-9]{10,15}$/, "Phone must be a valid phone number")
    .required("Phone is required"),

  address: Yup.string()
    .trim()
    .min(3, "Address should contain at least 3 characters")
    .required("Address is required"),
});

export default function OrderForm({
  onSubmit,
  isSubmitting = false,
}: OrderFormProps) {
  const fieldId = useId();

  const initialFormValues: OrderFormValues = {
    customerName: "",
    email: "",
    phone: "",
    address: "",
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={OrderSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <Form className={css.form}>
        <div className={css.row}>
          <label className={css.label} htmlFor={`${fieldId}-customerName`}>
            Name
          </label>
          <Field
            id={`${fieldId}-customerName`}
            type="text"
            name="customerName"
            className={css.input}
          />
          <ErrorMessage
            name="customerName"
            component="span"
            className={css.error}
          />
        </div>

        <div className={css.row}>
          <label className={css.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            id={`${fieldId}-email`}
            type="email"
            name="email"
            className={css.input}
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>

        <div className={css.row}>
          <label className={css.label} htmlFor={`${fieldId}-phone`}>
            Phone
          </label>
          <Field
            id={`${fieldId}-phone`}
            type="tel"
            name="phone"
            className={css.input}
          />
          <ErrorMessage name="phone" component="span" className={css.error} />
        </div>

        <div className={css.row}>
          <label className={css.label} htmlFor={`${fieldId}-address`}>
            Address
          </label>
          <Field
            id={`${fieldId}-address`}
            type="text"
            name="address"
            className={css.input}
          />
          <ErrorMessage name="address" component="span" className={css.error} />
        </div>

        <button className={css.submit} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit order"}
        </button>
      </Form>
    </Formik>
  );
}
