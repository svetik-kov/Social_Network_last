import React, {ReactNode} from 'react'
import styles from './FormsControls.module.css'

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
    children:ReactNode
}

const FormControl = (props: TextAreaType) => {
    const {input, meta,children, ...arg} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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

/*
export const Textarea = (props: TextAreaType) => {
    const {input, meta, ...arg} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input}{...arg}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = (props: TextAreaType) => {
    const {input, meta, ...arg} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <input {...input}{...arg}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}*/
