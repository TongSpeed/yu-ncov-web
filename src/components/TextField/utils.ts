import { TTextField } from '../../types'

import * as dateFns from 'date-fns';
import { FormContextValues } from "react-hook-form";
export const fieldToProps = ({ field:{name, title, required, helperText,defaultValue}, readonly,  fullWidth = true }: TTextField) => ({
    id: name,
    label: title,
    disabled: readonly,
    fullWidth,
    helperText,
    required,
    //  defaultValue: getDefaultValue(defaultValue)
})
export const getDefaultValue = (defaultValue: TTextField['field']['defaultValue']) => defaultValue === 'now'
    ? (new Date()).toISOString()
    : defaultValue === 'yesterday'
        ? dateFns.addDays(new Date(), -1).toISOString()
        : defaultValue
export const connetToFormContext = ({ setValue, register }: FormContextValues) => ({ field:{name, defaultValue} }: TTextField) => {
    register({ name, type: 'custom' })
    if (defaultValue) {

        //   setValue(name, getDefaultValue(defaultValue))s

    }

}