import React from 'react'
import { FieldProps, getIn } from 'formik'
import { Input } from 'generic/Input'

const InputField: React.FC<FieldProps> = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  // field: An object containing onChange, onBlur, name, and value
  const isTouched = getIn(touched, field.name)
  const error = getIn(errors, field.name)

  return <Input {...field} {...props} touched={isTouched} error={error} />
}

export default InputField
