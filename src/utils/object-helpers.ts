import React from 'react'
import {UserType} from 'redux/users-reducer';
export const  updateObjectIsArray=(items:UserType[],itemId:number,objPropName:keyof UserType,newObjProps:Partial<UserType>)=>{
   return  items.map(u => u[objPropName] === itemId ? {...u, ...newObjProps} : u)
}