import React from 'react';
import _TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { useFormContext } from "react-hook-form";
import SelectOptions from './SelectOptions'
import { TTextField } from 'macoolka-model-core'
import DateFnsUtils from '@date-io/date-fns';
import { fieldToProps, connetToFormContext } from './utils'
import {
  DateTimePicker,
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
const DateTimeField: React.SFC<{
  field: TTextField,
} & TextFieldProps> = ({ field }) => {
  const formContext = useFormContext()
  const { watch, setValue } = formContext
  connetToFormContext(formContext)(field)
  const { field: { name}, textFieldType } = field;
  const value = watch(name)
  const handleDateChange = (date: any) => {
    setValue(name, date ? date.toISOString() : null)
  };
  const C = textFieldType === 'date'
    ? DatePicker
    : textFieldType === 'datetime'
      ? DateTimePicker
      : TimePicker
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <C
        format={"yyyy年MM月dd日 hh:mm"}
        value={value}
        onChange={handleDateChange}
        {...fieldToProps(field)}

      />
    </MuiPickersUtilsProvider>
  );
}

const SelectField: React.SFC<{
  field: TTextField,

} & TextFieldProps> = ({ field, ...others }) => {
  const { field: { name }, query } = field;
  const formContext = useFormContext()
  const { watch, setValue } = formContext
  connetToFormContext(formContext)(field)
  const { useQuery, queryName, variable } = query!

  const value = watch(name)
  const { data } = useQuery!({ variable:variable })

  return (data ? <_TextField
    select
    value={value}
    onChange={(event) => {
      setValue(name, event.target.value as any)
    }}
    {...fieldToProps(field)}
    {...others}
  >
    {SelectOptions(data && (data[queryName!]))}
  </_TextField > : null)
}

export const InputField: React.SFC<{
  field: TTextField,
} & TextFieldProps> = ({ field, ...others }) => {
  const { field: { name } } = field;
  const formContext = useFormContext()
  const { watch, setValue } = formContext
  connetToFormContext(formContext)(field)
  const value = watch(name)
  return <_TextField

    value={value}
    onChange={(event) => {
      setValue(name, event.target.value as any)
    }}
    {...fieldToProps(field)}
    {...others}
  >

  </_TextField>
}
export const NumberInput: React.SFC<{
  field: TTextField,
} & TextFieldProps> = ({ field, ...others }) => {
  const { field: { name } } = field;
  const formContext = useFormContext()
  const { watch, setValue, register } = formContext
  connetToFormContext(formContext)(field)
  // register({ name, type: 'custom' })
  const value = watch(name)
  // const handleFocus = (event) => event.target.select();
  return <_TextField

    value={value}
    onFocus={(event) => event.target.select()}
    onChange={(event) => {
      setValue(name, Number(event.target.value) as any)
    }}

    InputLabelProps={{
      shrink: true,
    }}
    type="number"
    {...fieldToProps(field)}
    {...others}
  >

  </_TextField>
}

export const DateInput: React.SFC<{
  field: TTextField,
} & TextFieldProps> = ({ field, ...others }) => {
  const { field: { name, title, helperText, } } = field;

  const formContext = useFormContext()
  const { watch, setValue } = formContext
  connetToFormContext(formContext)(field)
  const value = watch(name)

  return (<_TextField
    id={name as string}

    label={title}
    name={name as string}
    value={value}
    onChange={(event) => {
      if (event.target.value) {
        setValue(name, event.target.value)
      }

    }}
    helperText={helperText}
    InputLabelProps={{
      shrink: true,
    }}
    type="datetime"
    {...others}
  >

  </_TextField>)
}

const TextAreaField: React.SFC<{
  field: TTextField,
} & TextFieldProps> = ({ field, ...others }) => {
  const { field: { name }, rows = 3, rowsMax = 5 } = field;
  const formContext = useFormContext()
  const { watch, setValue } = formContext
  connetToFormContext(formContext)(field)
  const value = watch(name)
  return <_TextField
    multiline
    rows={rows}
    rowsMax={rowsMax}
    value={value}
    onChange={(event) => {
      setValue(name, event.target.value as any)
    }}
    InputLabelProps={{
      shrink: true,
    }}
    {...fieldToProps(field)}
    {...others}
  >
  </_TextField>
}


export const TextField: React.SFC<{
  field: TTextField,
} & TextFieldProps> = ({ field }) => {

  switch (field.field.type) {
    case 'number':
      return <NumberInput field={field}></NumberInput>
    case 'datetime':
      return <DateTimeField field={field}></DateTimeField>
    default: {
      if (field.query) {
        return <SelectField field={field}></SelectField>
      } else if (field.rows) {
        return <TextAreaField field={field}></TextAreaField>
      } else {
        return <InputField field={field}></InputField>
      }
    }


  }
}
export default TextField