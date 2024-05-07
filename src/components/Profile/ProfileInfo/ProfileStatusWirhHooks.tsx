import React, {ChangeEvent, useEffect, useState} from 'react';


/*type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}*/

type ProfileStatusWithHooksType = {
    updateStatus: (status: string) => void
    status: string
}

const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)

    }, [props.status]);
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus onBlur={deActivateEditMode}
                        value={status}/>
                </div>
            }

        </div>
    )
}


export default ProfileStatusWithHooks;