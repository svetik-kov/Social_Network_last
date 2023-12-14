import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';



const maxLength50 = maxLengthCreator(50)
 const AddMessageForm = (props: InjectedFormProps) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       validate={[required, maxLength50]}
                       placeholder={'Enter your message'}/>
            </div>
            <div>

                <button>Send</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

