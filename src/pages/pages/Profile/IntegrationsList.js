import React from "react";
import styled from "styled-components/macro";

import {
    List,
    ListItemIcon,
    Avatar as MuiAvatar,
    Breadcrumbs as MuiBreadcrumbs,
    Button as MuiButton,
    Card as MuiCard,
    CardContent as MuiCardContent,
    Divider as MuiDivider,
    ListItem as MuiListItem,
    ListItemText as MuiListItemText,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    TextField,
    Typography,
} from "@material-ui/core";

import {
    BeachAccess as BeachAccessIcon,
    Drafts as DraftsIcon,
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
    Image as ImageIcon,
    Inbox as InboxIcon,
    Work as WorkIcon,
    Send as SendIcon,
    StarBorder as StarBorderIcon,
    Save as SaveIcon,
} from "@material-ui/icons";

import GitHubIcon from '@material-ui/icons/GitHub';

import { spacing } from "@material-ui/system";

import { OutlinedTextFields } from '../../forms/TextFields'

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const ListItem = styled(MuiListItem)(spacing);

const ListItemNotButton = styled(MuiListItem)(spacing);

const ListItemText = styled(MuiListItemText)(spacing);

const ListItemSecondaryAction = styled(MuiListItemSecondaryAction)(spacing)

const GithubLabel = () => <Typography variant="h6" gutterBottom>Github</Typography>

const GithubField = () => {
    return (
        <TextField
            id="standard-password-input"
            label="Token"
            type="text"
            variant="outlined"
        />
    )
}

function IntegrationsList() {
    return (
        <Card mb={8}>
            <List style={{ "marginTop": "20px" }} component="nav">
                <ListItem >
                    <ListItemIcon>
                        <GitHubIcon fontSize='large'/>
                    </ListItemIcon>
                    <ListItemText primary={GithubLabel()} />
                    <ListItemText primary={GithubField()} />
                    <ListItemSecondaryAction mb={8}>
                        <Button mr={2} variant="contained" size="large">
                            <SaveIcon />
                            Save
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Card>
    );
}


export default IntegrationsList;
