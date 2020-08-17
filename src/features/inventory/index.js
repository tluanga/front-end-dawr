import React from 'react';
import {Switch} from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Supplier from './supplier';
import Product from './product';
import Category from './category';
import Gst from './gst';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 500,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                // variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Product" {...a11yProps(0)} />
                <Tab label="Supplier" {...a11yProps(1)} />
                <Tab label="Warehouse" {...a11yProps(2)} />
                <Tab label="Gst" {...a11yProps(3)} />
                <Tab label="Category" {...a11yProps(4)} />
                <Tab label="Report" {...a11yProps(5)} />
                
            </Tabs>
            <TabPanel value={value} index={0}>
                <Product/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                        <Supplier/>
            </TabPanel>
                    <TabPanel value={value} index={2}>
                        <h1>Warehouse</h1>
            </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Gst/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Category />
            </TabPanel>
                    <TabPanel value={value} index={5}>
                        <h1>Report</h1>
            </TabPanel>
      
        </div>
    );
}