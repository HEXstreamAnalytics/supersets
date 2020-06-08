import React, { useState } from 'react';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as Actions from '../../../messageToasts/actions';

function Row(props) {
    let item = props.data;

    const [open, setOpen] = useState(false);
    const [name, setName] = useState(item.name);
    const [creator, setCreator] = useState(item.creator);
    const [modified, setModified] = useState(item.modified);

    const handleShow = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleDelete = () => {
        props.removeFolderviewData(item.ID);
    }

    const handleSave = () => {
        setOpen(false);
        let folderviewData = props.folderviewData;
        let index = 0;
        for (index = 0; index < folderviewData.length; index++) {
            if (JSON.stringify(folderviewData[index]) == JSON.stringify(item)) break;
        }

        props.removeFolderviewData(item.ID);
        props.addFolderviewData({
            index: index,
            Head_ID: item.Head_ID,
            name: name,
            creator: creator,
            modified: modified,
            child: item.child
        });
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const handleChange = (type, value) => {
        if (type == 'name') setName(value);
        if (type == 'creator') setCreator(value);
        if (type == 'modified') setModified(value);
    }

    return (
        <div>
            <RemoveRedEyeOutlinedIcon className="mlr-5"/>
            <EditOutlinedIcon className="mlr-5" onClick={() => handleShow()} />
            <DeleteOutlineOutlinedIcon className="mlr-5" onClick={() => handleDelete()} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                <form className="modal" noValidate autoComplete="off">
                    <div className="p-50">
                        <div className="m-20">
                            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => handleChange('name', e.target.value)} value={name} />
                        </div>
                        <div className="m-20">
                        <TextField
                            onChange={(e) => handleChange('modified', e.target.value)}
                            id="date"
                            label="Modified"
                            type="date"
                            value={modified}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        </div>
                        <div className="m-20">
                            <TextField onChange={(e) => handleChange('creator', e.target.value)} label="Creator" variant="outlined" value={creator} />
                        </div>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="primary" onClick={handleSave}> SAVE </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="primary" onClick={handleCancel}> CANCEL </Button>
                            </Grid>
                        </Grid>

                    </div>
                </form>
            </Modal>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      folderviewData: state.messageToasts.folderviewData
    };
};
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeFolderviewData: Actions.changeFolderviewData,
        removeFolderviewData: Actions.removeFolderviewData,
        addFolderviewData: Actions.addFolderviewData,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Row);