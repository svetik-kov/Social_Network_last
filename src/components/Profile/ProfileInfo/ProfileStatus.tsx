import React from 'react';


type ProfileStatusType = {
    status: string
}
type StateType = {
    editMode: boolean
}

class ProfileStatus extends React.Component<ProfileStatusType, StateType> {
    state: StateType = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        //this.state.editMode = true
        //this.forceUpdate()
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }

            </div>
        )
    };
}


export default ProfileStatus;