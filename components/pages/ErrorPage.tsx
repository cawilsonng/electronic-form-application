import React from "react";
import {Redirect, RouteComponentProps} from "react-router-dom";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import {locationStateType} from "../../interface/locationStateType";
import {Grid} from "@mui/material";
import Page from "../page";

export class ErrorPage extends React.Component<RouteComponentProps<any, any, locationStateType>> {
    render() {
        return (
            <Page title='Error Occurred'>
                <div style={{height: "auto", minHeight: "100%",}}>
                    {!this.props.history.location.state && <Redirect to={"/"}/>}
                    {this.props.history.location.state &&
                        <div
                            style={{
                                textAlign: "center",
                                width: "800px",
                                marginLeft: "-400px",
                                position: "absolute",
                                top: "30%",
                                left: "50%",
                            }}>
                            <Grid container spacing={2}>
                                <Grid container xs={4} style={{padding: "0px"}} justifyContent="center"
                                      alignItems="center">
                                    <ReportProblemOutlinedIcon style={{fontSize: "15em"}}/>
                                </Grid>
                                <Grid container xs={8} direction="column" justifyContent="center" alignItems="center">
                                    <h2 style={{
                                        fontSize: "30px",
                                        margin: "10px"
                                    }}>{this.props.history.location.state.msgTitle}</h2>
                                    <p style={{margin: "0px"}}>{this.props.history.location.state.msgDescription}</p>
                                </Grid>
                            </Grid>
                        </div>
                    }
                </div>
            </Page>
        )
    }
}