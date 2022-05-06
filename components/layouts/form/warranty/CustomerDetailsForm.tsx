import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {MobileDatePicker} from '@mui/x-date-pickers';
import {WarrantyForm} from "../../../../interface/WarrantyForm";

export const CustomerDetailsForm = (props: any) => {
    const warrantyForm: WarrantyForm = props.warrantyForm;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Warranty Card
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={warrantyForm.firstName}
                        onChange={e => {
                            props.onCustomerChange({firstName: e.target.value});
                        }}
                        error={warrantyForm.firstNameError !== ''}
                        helperText={warrantyForm.firstNameError}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={warrantyForm.lastName}
                        onChange={e => {
                            props.onCustomerChange({lastName: e.target.value});
                        }}
                        error={warrantyForm.lastNameError !== ''}
                        helperText={warrantyForm.lastNameError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        value={warrantyForm.address1}
                        onChange={e => {
                            props.onCustomerChange({address1: e.target.value});
                        }}
                        error={warrantyForm.address1Error !== ''}
                        helperText={warrantyForm.address1Error}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                        value={warrantyForm.address2}
                        onChange={e => {
                            props.onCustomerChange({address2: e.target.value});
                        }}
                        error={warrantyForm.address2Error !== ''}
                        helperText={warrantyForm.address2Error}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        value={warrantyForm.city}
                        onChange={e => {
                            props.onCustomerChange({city: e.target.value});
                        }}
                        error={warrantyForm.cityError !== ''}
                        helperText={warrantyForm.cityError}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                        value={warrantyForm.state}
                        onChange={e => {
                            props.onCustomerChange({state: e.target.value});
                        }}
                        error={warrantyForm.stateError !== ''}
                        helperText={warrantyForm.stateError}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        value={warrantyForm.zip}
                        onChange={e => {
                            props.onCustomerChange({zip: e.target.value});
                        }}
                        error={warrantyForm.zipError !== ''}
                        helperText={warrantyForm.zipError}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        value={warrantyForm.country}
                        onChange={e => {
                            props.onCustomerChange({country: e.target.value});
                        }}
                        error={warrantyForm.countryError !== ''}
                        helperText={warrantyForm.countryError}
                    />
                </Grid>
                <Grid item xs={6}>
                    <MobileDatePicker
                        label="Date of purchase"
                        inputFormat="MM/dd/yyyy"
                        value={warrantyForm.dateOfPurchase}
                        onChange={
                            (newValue) => {
                                props.onCustomerChange({dateOfPurchase: newValue});
                            }}
                        renderInput={(params) => <TextField
                            required
                            id="dateOfPurchase"
                            name="dateOfPurchase"
                            label="Date of purchase"
                            fullWidth
                            variant="standard"
                            error={warrantyForm.dateOfPurchaseError !== ''}
                            helperText={warrantyForm.dateOfPurchaseError}
                            {...params} />}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="purchasedFrom"
                        name="purchasedFrom"
                        label="Purchased from"
                        fullWidth
                        variant="standard"
                        value={warrantyForm.purchasedFrom}
                        onChange={e => {
                            props.onCustomerChange({purchasedFrom: e.target.value});
                        }}
                        error={warrantyForm.purchasedFromError !== ''}
                        helperText={warrantyForm.purchasedFromError}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}