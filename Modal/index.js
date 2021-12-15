import React from 'react'
import "./Modal.css"
import {useSelector, useDispatch} from 'react-redux'
import { closed } from '../../Store/actions'

export default function Modal(props) {
    // Redux state with initial value to "false"
    const close = useSelector(state => state.isClosed)
    // Redux dispatch hooks which trigger the updating state with the action
    const dispatch = useDispatch()

    const closedModdal = () =>{
        //triggering by the action
        dispatch({type: closed})
    }

    return (
        <React.Fragment>
            {/* Close the modal if the state is updated  */}
            {close ? null :
                <div id={props.id} className="modal-container">
                    <p className="modal">
                        {props.value}
                        {/* Closing modal icon */}
                        <i onClick={closedModdal} className="fas fa-times-circle close-modal"></i>
                    </p>
                </div>
            }
        </React.Fragment>
    )
}
