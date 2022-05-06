import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Alert, Box, styled, Table, TableBody, TableCell, TableContainer, TableProps, TableRow} from '@mui/material';
import {format} from "date-fns";
import {CustomerDetail} from "../../../../interface/WarrantyForm";
import {useAppSelector} from "../../../../redux/hooks/dashboardHooks";

function createData(
    field: string,
    value: string,
) {
    return {field, value};
}

function fetchCustomerIntoTable(customer: CustomerDetail) {
    return [
        createData('First Name', customer.firstName),
        createData('Last Name', customer.lastName),
        createData('Address1', customer.address1),
        createData('Address2', customer.address2),
        createData('City', customer.city),
        createData('State', customer.state),
        createData('Zip', customer.zip),
        createData('Country', customer.country),
        createData('Date of purchase', customer.dateOfPurchase ? format(customer.dateOfPurchase, 'MM/dd/yyyy') : ''),
        createData('Purchased from', customer.purchasedFrom),
    ]
}

const CustomizeTableCell = styled(TableCell)<TableProps>(({theme}) => ({
    borderWidth: 0,
    padding: "4px 16px",
}));

export const Review = (props: any) => {
    const warrantyForm: CustomerDetail = props.warrantyForm;
    const warrantFormState = useAppSelector(state => state.warrantFormReducer);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Information summary
            </Typography>
            <TableContainer component={Box}>
                <Table aria-label="simple table">
                    <TableBody>
                        {fetchCustomerIntoTable(warrantyForm).map((row) => (
                            <TableRow
                                key={row.field}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <CustomizeTableCell component="th" scope="row">
                                    {row.field}
                                </CustomizeTableCell>
                                <CustomizeTableCell align="right">{row.value}</CustomizeTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {warrantFormState.errorMsg === '' ? '' :
                <Alert severity="error">{warrantFormState.errorMsg}</Alert>}
        </React.Fragment>
    );
}