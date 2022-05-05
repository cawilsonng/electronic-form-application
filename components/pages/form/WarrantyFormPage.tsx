import React, {useEffect, useState} from "react";
import {Box, Button, CssBaseline, Grid, Paper, Step, StepLabel, Stepper, Typography} from "@mui/material";
import Page from "../../page";
import {CustomerDetailsForm} from "../../layouts/form/warranty/CustomerDetailsForm";
import {Review} from "../../layouts/form/warranty/Review";
import {CustomerDetail, WarrantyForm} from "../../../interface/WarrantyForm";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/formHooks";
import WarrantyFormAction from "../../../redux/actionTypes/form/WarrantyFormAction";
import createAction from "../../../redux/actionTypes/Action";

const steps = ['Customer details', 'Review your information'];

function getStepContent(step: number, warrantyForm: WarrantyForm, handleCustomerDetailChanges: any) {
    switch (step) {
        case 0:
            return <CustomerDetailsForm warrantyForm={warrantyForm} onCustomerChange={handleCustomerDetailChanges}/>;
        case 1:
            return <Review warrantyForm={warrantyForm}/>
        default:
            throw new Error('Unknown step');
    }
}

export const WarrantyFormPage = (props: any) => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [warrantyForm, setWarrantyForm] = useState<WarrantyForm>(
        {
            firstName: "",
            firstNameError: "",
            lastName: "",
            lastNameError: "",
            address1: "",
            address1Error: "",
            address2: "",
            address2Error: "",
            city: "",
            cityError: "",
            state: "",
            stateError: "",
            zip: "",
            zipError: "",
            country: "",
            countryError: "",
            dateOfPurchase: null,
            dateOfPurchaseError: "",
            purchasedFrom: "",
            purchasedFromError: "",
        }
    );
    const [isValidated, setIsValidated] = useState<Boolean>(false);

    const warrantFormState = useAppSelector(state => state.warrantFormReducer);
    const disPatch = useAppDispatch();

    const handleCustomerDetailChanges = (field: Partial<CustomerDetail>) => {
        let customerDetail: WarrantyForm = {...warrantyForm, ...field};
        setWarrantyForm({...customerDetail, ...validateInput(customerDetail, Object.keys(field))});
    }

    const validateInput = (customerDetail: CustomerDetail, fields: Array<string>) => {
        let validationForm = {};
        fields.forEach((field: string) => {
            if (field === 'firstName') {
                if (customerDetail.firstName === '') {
                    validationForm = {...validationForm, 'firstNameError': 'This field is required.'};
                } else {
                    validationForm = {...validationForm, 'firstNameError': ''};
                }
            }
            if (field === 'lastName') {
                if (customerDetail.lastName === '') {
                    validationForm = {...validationForm, 'lastNameError': 'This field is required.'};
                } else {
                    validationForm = {...validationForm, 'lastNameError': ''};
                }
            }
            if (field === 'address1') {
                if (customerDetail.address1 === '') {
                    validationForm = {...validationForm, 'address1Error': 'This field is required.'};
                } else {
                    validationForm = {...validationForm, 'address1Error': ''};
                }
            }

            if (field === 'city') {
                if (customerDetail.city === '') {
                    validationForm = {...validationForm, 'cityError': 'This field is required.'};
                } else {
                    validationForm = {...validationForm, 'cityError': ''};
                }
            }
            if (field === 'zip') {
                if (customerDetail.zip === '') {
                    validationForm = {...validationForm, 'zipError': 'This field is required.'};
                } else {
                    validationForm = {...validationForm, 'zipError': ''};
                }
            }
            if (field === 'country') {
                if (customerDetail.country === '') {
                    validationForm = {...validationForm, 'countryError': 'This field is required.'};
                } else {
                    validationForm = {...validationForm, 'countryError': ''};
                }
            }
            if (field === 'dateOfPurchase') {
                if (customerDetail.dateOfPurchase === null) {
                    validationForm = {...validationForm, 'dateOfPurchaseError': 'This field is required.'};
                } else {
                    validationForm = {...validationForm, 'dateOfPurchaseError': ''};
                }
            }
            if (field === 'purchasedFrom') {
                if (customerDetail.purchasedFrom === '') {
                    validationForm = {...validationForm, 'purchasedFromError': 'This field is required.'};
                } else {
                    validationForm = {...validationForm, 'purchasedFromError': ''};
                }
            }
        });
        validateForm({...customerDetail, ...validationForm} as WarrantyForm);
        return validationForm;
    }

    const validateForm = (warrantyForm: WarrantyForm): void => {
        setIsValidated(
            warrantyForm.firstName != '' && warrantyForm.lastName !== '' &&
            warrantyForm.address1 !== '' && warrantyForm.city !== '' &&
            warrantyForm.zip !== '' && warrantyForm.country !== '' &&
            warrantyForm.dateOfPurchase !== null && warrantyForm.purchasedFrom !== '' &&
            warrantyForm.firstNameError === '' && warrantyForm.lastNameError === '' &&
            warrantyForm.address1Error === '' && warrantyForm.address2Error === '' &&
            warrantyForm.cityError === '' && warrantyForm.stateError === '' &&
            warrantyForm.zipError === '' && warrantyForm.countryError === '' &&
            warrantyForm.dateOfPurchaseError === '' && warrantyForm.purchasedFromError === '');
    }

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            let {
                firstName, lastName, address1, address2,
                city, state, zip, country, dateOfPurchase, purchasedFrom
            } = warrantyForm;
            let submitFormModel: CustomerDetail = {
                firstName: firstName,
                lastName: lastName,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                zip: zip,
                country: country,
                dateOfPurchase: dateOfPurchase,
                purchasedFrom: purchasedFrom,
            };
            disPatch(createAction(WarrantyFormAction.SUBMIT_FORM, submitFormModel));
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    useEffect(() => {
        if (warrantFormState.applicationNumber) {
            setActiveStep(2);
        }
    }, [warrantFormState.isSubmitted])

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Page title="Warranty Form">
            <Box sx={{
                display: 'flex', flexDirection: 'column', height: '100vh',
            }} bgcolor="background.default">
                <CssBaseline/>
                <Grid container justifyContent="center" alignItems="center"
                      sx={{
                          height: '100vh', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', backgroundColor: 'background.default',
                          flexGlow: 1,
                          pt: 1,
                      }}
                      spacing={{xs: 2, md: 2}} columns={{xs: 4, sm: 8, md: 12}}>
                    <Grid item xs={4} sm={6} md={6} sx={{maxWidth: '550px !important'}}>
                        <CssBaseline/>
                        <Paper elevation={2} sx={{
                            pt: 4,
                            pb: 2,
                            px: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'background.paper',
                        }}>
                            <Typography component="h1" variant="h4" align="center">
                                Warranty Form
                            </Typography>
                            <Stepper activeStep={activeStep} sx={{mx: 2, pt: 3, pb: 5}}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <React.Fragment>
                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <Typography variant="h5" gutterBottom>
                                            Thank you for submission.
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Your application number is {warrantFormState.applicationNumber}.
                                            We will send you an confirmation email when your information is properly.
                                        </Typography>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        {getStepContent(activeStep, warrantyForm, handleCustomerDetailChanges)}
                                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                            {activeStep !== 0 && (
                                                <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                                                    Back
                                                </Button>
                                            )}
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                disabled={!isValidated}
                                                sx={{mt: 3, ml: 1}}
                                            >
                                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Page>
    );
};