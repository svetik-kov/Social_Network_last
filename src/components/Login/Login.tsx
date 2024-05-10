import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {required} from 'utils/validators/validators';
import {connect} from 'react-redux';
import {login} from 'redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {StateType} from 'redux/redux-store';
import styles from '../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm = ({handleSubmit, error}: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField('Password', 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {/*<div>  <Field placeholder={'Email'}
                       name={'email'}
                       validate={[required]}
                       component={Input}/></div> */}
            {/*  <div>
                <Field placeholder={'Password'}
                       validate={[required]}
                       type={'password'}
                       name={'password'} component={Input}/>
            </div>*/}
            {/* <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>*/}
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>

        </form>)
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>


    )
}
const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)