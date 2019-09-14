import { Field, FieldProps } from 'formik';
import React, { ReactElement } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
} from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { InputProps } from '@material-ui/core/Input';

/**
 * Formik field wrapper
 */

type InputFieldProps = InputProps & {
  name: string;
  label?: string;
};

const StyledLabel = styled(InputLabel)({
  textTransform: 'capitalize',
});
export const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  label,
  ...props
}: InputFieldProps): ReactElement => {
  return (
    <Field
      name={name}
      render={({
        form: { errors, handleChange },
      }: FieldProps): ReactElement => {
        const hasError = errors[name] ? true : false;
        return (
          <FormControl error={hasError} fullWidth={true}>
            <StyledLabel htmlFor={name}>{label ? label : name}</StyledLabel>
            <Input
              {...props}
              name={name}
              id={name}
              onChange={handleChange}
              type={type ? type : 'input'}
              fullWidth={true}
              autoFocus={true}
            />
            {hasError && (
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
