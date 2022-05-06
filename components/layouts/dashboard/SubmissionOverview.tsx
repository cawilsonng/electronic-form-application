import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Box, Typography} from "@mui/material";
import {format} from "date-fns";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/dashboardHooks";
import WarrantyFormAction from "../../../redux/actionTypes/dashboard/WarrantyFormAction";
import createAction from "../../../redux/actionTypes/Action";

type OverviewTableType = {
    id: number,
    submitDate: string,
    applicationNumber: string,
    name: string,
    dateOfPurchase: string,
    purchasedFrom: string,
}

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function SubmissionOverview() {
    const warrantyFormState = useAppSelector(state => state.warrantyFormReducer);
    const userState = useAppSelector(state => state.userReducer);
    const [rows, setRows] = useState<Array<OverviewTableType>>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(createAction(WarrantyFormAction.GET_OVERVIEW, userState.accessToken));
    }, []);

    useEffect(() => {
        const timeout = setInterval(() => {
            dispatch(createAction(WarrantyFormAction.GET_OVERVIEW, userState.accessToken));
        }, 5000);
        return () => clearInterval(timeout);
    }, [userState.accessToken]);

    useEffect(() => {
        let rows: Array<OverviewTableType> = [];
        warrantyFormState.overviewModel.forEach((element: any) => {
                rows.push({
                    id: element._id,
                    applicationNumber: element.applicationNumber,
                    name: element.firstName + " " + element.lastName,
                    dateOfPurchase: format(new Date(element.dateOfPurchase), 'dd MMM yyyy'),
                    purchasedFrom: element.purchasedFrom,
                    submitDate: format(new Date(element.createDtm), 'dd MMM yyyy'),
                });
            }
        )
        setRows(rows);
    }, [warrantyFormState.overviewModel]);

    return (
        <Box sx={{overflow: 'auto'}}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Recent submission
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Submit date</TableCell>
                        <TableCell>Application number</TableCell>
                        <TableCell>Customer name</TableCell>
                        <TableCell>Purchase date</TableCell>
                        <TableCell>Purchased from</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.submitDate}</TableCell>
                            <TableCell>{row.applicationNumber}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.dateOfPurchase}</TableCell>
                            <TableCell>{row.purchasedFrom}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/*<Link color="primary" href="#" onClick={preventDefault} sx={{mt: 3}}>*/}
            {/*    See more orders*/}
            {/*</Link>*/}
        </Box>
    );
}