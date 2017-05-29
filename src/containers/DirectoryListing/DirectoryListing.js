/**
 * Created by akshaybindal on 29/05/17.
 */


import React, {Component} from 'react';
//import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import cx from 'classnames';
//import s from  './Popup.scss';
import { showPopUp, addFolder, dirClick, addSubFolder, lastFolderID } from '../../actions/index.js';

class DirectoryListing extends Component {
    constructor(props) {
        super(props);
        this.childIDs = [];
    }

    addChildFolder = (e, dir) => {
        e.stopPropagation();
        const { addSubFolder, addFolder, showPopUp } = this.props;
        //showPopUp();
        //this.props.addFolder(id+10,'').id;
        const childId = this.props.addFolder(dir.name + '_' + dir.childFoldersIDs.length,true).id;
        addSubFolder(dir.id, childId);
    }

    renderChildHtml = (dir, keys) => {
        if(!keys.length) {
            return null;
        }
        return (
            <ul>
                {
                    keys.map((d, idx )=> {
                        if(dir[d].isChild) {
                            return (
                                <div key={idx} onClick={() => this.props.dirClick(dir[d].id)}>
                                    <img />
                                    {dir[d].name}
                                    {
                                        dir[d].childVisible &&
                                        <div
                                            onClick={(e) => this.addChildFolder(e,dir[d])}
                                            >
                                            New Folder?
                                        </div>
                                    }
                                    {
                                        dir[d].childFoldersIDs.length > 0 && this.renderChildHtml(dir,dir[d].childFoldersIDs)
                                    }
                                </div>
                            );
                        }
                        else {
                            return null;
                        }
                    })
                }
            </ul>
        );
    }

    renderHtml = (dir, keys) => {
        if(!keys.length) {
            return null;
        }
        return (
            <ul>
                {
                    keys.map((d, idx )=> {
                        if(!dir[d].isChild) {
                            return (
                                <div key={idx} onClick={() => this.props.dirClick(dir[d].id)}>
                                    <img />
                                    {dir[d].name}
                                    {
                                        dir[d].childVisible &&
                                        <div
                                            onClick={(e) => this.addChildFolder(e,dir[d])}
                                            >
                                            New Folder?
                                        </div>
                                    }
                                    {
                                        dir[d].childFoldersIDs.length > 0 &&
                                        this.renderChildHtml(dir,dir[d].childFoldersIDs)
                                    }
                                </div>
                            );
                        }
                        else {
                            return null;
                        }
                    })
                }
            </ul>
        );
    }

    render() {
        const keys = Object.keys(this.props.dirList);
        if(!keys.length) {
            return null;
        }

        var html = this.renderHtml(this.props.dirList,keys);
        return html;

    }
}

DirectoryListing.propTypes = {

};

DirectoryListing.defaultTypes = {

};

export default (connect(
        state => {
            console.log(state);
        return {
            dirList: state.directories
            //pwd: state.pwd
        };
    }, {
        addFolder,
        dirClick,
        addSubFolder,
        showPopUp
    }
)(DirectoryListing));

