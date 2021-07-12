import React, { useState } from "react";
import styled from "styled-components/macro";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Card as MuiCard,
    TextField,
} from "@material-ui/core";

import { Add as AddIcon, Person as PersonIcon } from "@material-ui/icons";

import { spacing } from "@material-ui/system";
import './NewComponents.css'

const Card = styled(MuiCard)(spacing);

const NewComponent = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* <Button
                variant="contained"
                color="primary"
                onClick={() => setOpen(true)}
            >
                Open form dialog
            </Button> */}
            <Button onClick={() => setOpen(true)} variant="contained" color="primary">
                <AddIcon />
                New Component
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create Component</DialogTitle>
                <DialogContent >
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address
                        here. We will send updates occasionally.
                    </DialogContentText> */}
                    <TextField 
                        
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                    />
                    <TextField className="margin"
                        
                        margin="dense"
                        id="github"
                        label="Gihub Repository URL"
                        type="url"
                        fullWidth
                    />
                    <TextField className="margin"
                        
                        margin="dense"
                        id="type"
                        label="Type"
                        type="text"
                        fullWidth
                    />
                    <TextField className="margin"
                        
                        margin="dense"
                        id="lifecycle"
                        label="Lifecycle"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}

export default NewComponent;