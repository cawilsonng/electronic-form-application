import React from 'react';
import {Button, Container} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/dashboardHooks";
import UserAction from "../../../redux/actionTypes/dashboard/UserAction";

export const Test1Page = (props: any) => {
    // const classes = useStyles();
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch();

    return (
        <Container>
            {count}
            <Button>Primary</Button>
            <Button color="secondary">Secondary</Button>

            <button onClick={() => {
                dispatch(UserAction.LOGIN);
            }}>
                Increment after 1 second
            </button>
        </Container>
    );
};
// store.subscribe(() => {
//     console.log(store.getState());
// })