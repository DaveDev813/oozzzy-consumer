import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input, { InputProps } from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { Field } from "formik";
import { FormControlLabel, Checkbox, withStyles } from "@material-ui/core";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);

export const InputField: React.FC<
  InputProps & { name: string; label?: string; value?: string }
> = ({ type, name, label, value, ...props }) => {
  return (
    <Field
      name={name}
      render={({ form: { errors, handleChange } }: any) => {
        const hasError = errors[name] ? true : false;
        const withValue = value ? { value, ...props } : { ...props };
        return (
          <FormControl error={hasError} fullWidth>
            <label htmlFor={name} className="form-label">
              {label ? label : name}
            </label>
            <input
              name={name}
              id={`${name}`}
              type={type ? type : "input"}
              // placeholder={label}
              autoComplete="off"
              className="form-control"
              onChange={handleChange}
            />
            {errors[name] && (
              <FormHelperText id="component-error-text">
                {errors[name]}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
};

export const CheckBox: React.FC<
  Partial<FormControlLabelProps> & { name: string; label?: string }
> = ({ name, label }) => {
  return (
    <Field
      name={name}
      render={({ form: { errors, handleChange } }: any) => {
        const hasError = errors[name] ? true : false;
        return (
          <FormControl error={hasError} fullWidth>
            <FormControlLabel
              onChange={handleChange}
              control={<Checkbox color="secondary" name="terms" value="" />}
              label={label ? label : name}
            />
            {errors[name] && (
              <FormHelperText
                id="component-error-text"
                style={{ marginTop: "-5px" }}
              >
                {errors[name]}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
};
