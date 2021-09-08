import React from 'react';
import { useDispatch } from "react-redux";
import { filterContacts } from "redux/contacts/filter/filter-actions";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { Search, Input } from "./styles";


const Filter = () => {
    const dispatch = useDispatch()
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '50ch',
        },
    }));
  
    const classes = useStyles();
    return (
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <Input
                id="outlined-basic"
                label="Search"
                type="text"
                variant="outlined"
                onChange={({ target: { value } }) => dispatch(filterContacts(value))}
            />
            <Search />
        </FormControl>
    );
};

export default Filter;