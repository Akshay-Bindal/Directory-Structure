/**
 * Created by akshaybindal on 29/05/17.
 */

import React from 'react'
import { connect } from 'react-redux'
import { showPopUp } from '../actions'

let NewDirectory = ({ dispatch }) => {

    return (
        <button
            onClick={e => {
                dispatch(showPopUp())
            }}
        >
            New Folder
        </button>
    )
}

NewDirectory = connect()(NewDirectory)

export default NewDirectory
