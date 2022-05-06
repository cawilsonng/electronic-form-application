import React from 'react';
import {Container, Grid, Paper} from "@mui/material";
import Page from "../../page";
import {Dashboard} from "../../layouts/dashboard/Dashboard";
import SubmissionOverview from "../../layouts/dashboard/SubmissionOverview";

export const DashboardPage = (props: any) => {
    return (
        <Page title="Dashboard">
            <Dashboard>
                <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                                <SubmissionOverview/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Dashboard>
        </Page>
    );
};