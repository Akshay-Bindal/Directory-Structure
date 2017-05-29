/**
 * Created by akshaybindal on 29/05/17.
 */


import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import { addFolder,hidePopUp } from '../../actions/index.js';

class PopUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let input;

        var html = (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                      return
                    }
                    this.props.addFolder(input.value,'');
                    this.props.hidePopUp();
                    input.value = '';
                  }}
                >
                    <input ref={node => {
                            input = node
                        }}
                    />
                    <button type="submit">
                        Add Folder
                    </button>
                </form>
            </div>
        );

        return this.props.visibility ? html : null

    }
}

PopUp.propTypes = {

};

PopUp.defaultTypes = {

};

export default (connect(
        state => {
            return {
                visibility: state.newFolderPopUp
                //pwd: state.pwd
            };
}, {
        addFolder,
        hidePopUp
}
)(PopUp));

