import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store, {StateType} from './redux/redux-store';


 let rerenderEntireTree=(state:StateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
               /* addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}*/ />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(()=>{
    let state=store.getState()
    rerenderEntireTree(state)
})