import { useField } from "formik";

export function InputText({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="form-group">
      <label htmlFor={props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? "is-invalid" : ""}
      />
      {meta.error && meta.touched ? (
        <span className="invalid-feedback">{meta.error}</span>
      ) : null}
    </div>
  );
}
