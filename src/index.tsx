import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostType={
    id:number
    message:string
    likesCount:number
}
export type DialogType={
    id:number
    name:string}
export type MessageType={
    id:number
    message:string
}

let posts: PostType[]=[
    {id:1, message:'Hi! How are you?',likesCount:3},
    {id:2, message:'It\'s my first post',likesCount:44},
]
let dialogs:DialogType[]=[
    {id:1, name:'Svetlana'},
    {id:2, name:'Natasha'},
    {id:3, name:'Irina'},
    {id:4, name:'Tanya'},
    {id:5, name:'Zlata'},
    {id:6, name:'Marina'},
]
let messages:MessageType[]=[
    {id:1, message:'Hello!'},
    {id:2, message:'How are you?'},
    {id:3, message:'Yo!'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);