import React from 'react'

export const required = (value: any) => {
    if (value) return undefined;
    return 'Field the required '
}

export const maxLengthCreator=(maxLength:number)=>(value: any)=>{
    if (value && value.length>maxLength) return `max length ${maxLength} symbol`
    return undefined
}

export const minLength12=(value: any)=>{
    if (value && value.length<12) return 'min length 12 symbol'
    return undefined
}