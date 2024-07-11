import { useFormikContext } from "formik";
import React from "react";

const SelectOne = ({
  onChange,
  value,
  placeholder,
  name,
  onBlur,
  type,
  style,
  className,
  id,

  children,
}) => {
  const formik = useFormikContext();

  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.5rem",
        width: "100%",
      }}
      htmlFor={id}
    >
      <span
        style={{
          color: "#242526",
          background: "#fff",
          borderRadius: ".5rem",
          padding: ".25rem",
        }}
      >
        {placeholder}
      </span>
      <select
        id={id}
        className={className}
        style={{
          width: "100%",

          borderRadius: ".25rem",
          padding: ".5rem",
          border: "none",
          color: "black",
          backgroundColor: "white",
          ...style,
        }}
        type={type}
        name={name}
        onBlur={onBlur}
        value={"Ders içeriği ve materyaller:"}
        onChange={onChange}
        defaultValue={"Ders içeriği ve materyaller:"}
      >
        <option value="" selected>
          {value || "Seçiniz"}
        </option>
        {children}
      </select>
    </label>
  );
};

export default SelectOne;
