import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { makeStyles } from '@material-ui/core/styles';

import { NavLink } from "react-router-dom";


import General from './General';

import {
    AppBar,
    Avatar as MuiAvatar,
    Box,
    Breadcrumbs,
    Button as MuiButton,
    Card as MuiCard,
    CardContent,
    Chip as MuiChip,
    Divider,
    Grid as MuiGrid,
    LinearProgress as MuiLinearProgress,
    Link,
    Tab,
    Tabs,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";

const CustomAppBar = styled(AppBar)`
  background: ${props => props.theme.palette.background.default};
  color: ${props => props.theme.palette.primary.main};
  padding: ${props => props.theme.spacing(2)}px;
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Profile() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (



        <div>
            <Helmet title="Profile" />
            <Typography variant="h3" gutterBottom display="inline">
                Profile
            </Typography>



            <Divider my={6} />
            <CustomAppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="General" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </CustomAppBar>
            <TabPanel value={value} index={0}>
                <General />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>


    );
}
