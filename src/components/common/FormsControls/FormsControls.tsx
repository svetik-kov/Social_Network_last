import React, {ReactNode} from 'react'
import styles from './FormsControls.module.css'
import {maxLengthCreator, minLength12, required} from 'utils/validators/validators';
import {Field} from 'redux-form';

type TextAreaType = {
    input: {
        name: string
        onBlur: () => void
        onChange: () => void
        onDragStart: () => void
        onDrop: () => void
        onFocus: () => void
        value: string
    },
    meta: {
        active: boolean
        asyncValidating: boolean
        autofilled: boolean
        dirty: boolean
        dispatch: () => void
        error: string
        form: string
        initial: undefined
        invalid: boolean
        pristine: boolean
        submitFailed: boolean
        submitting: boolean
        touched: boolean
        valid: boolean
        visited: boolean
        warning: undefined
    }
    placeholder: string
    children: ReactNode
}

const FormControl = (props: TextAreaType) => {
    const {input, meta:{touched,error}, children, ...arg} = props
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Textarea = (props: TextAreaType) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: TextAreaType) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
type ValidatorFn = typeof required | typeof maxLengthCreator | typeof minLength12
export const createField = (placeholder: string, name: string, validators: ValidatorFn[], component: (props: TextAreaType) => JSX.Element,props={},text='') =>(
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        />
        {text}
    </div>)