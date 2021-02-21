import React from "react"
import OrderFirstImage from '../../../assets/home/noun_shopping_basket.png'
import OrderSecondImage from '../../../assets/home/noun_cooking.png'
import OrderThirdImage from '../../../assets/home/noun_waiter.png'
import RoundedButton from '../../../shared/components/Button/Rounded'
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



export default function OrderStatus() {

    return (
        <div style={{ height: "130px", backgroundColor: "#ffefef", display: "flex" }}>

            <Grid container spacing={3}>

                <Grid style={{ margin: "20px", backgroundColor: "white", borderRadius: "6px", height: "70px", marginTop: "50px" }} item xs={7}>
                    <Grid container spacing={1}>
                        <Grid style={{ textAlign: "center" }} item xs={4}>
                            <img src={OrderFirstImage} height="16px" />
                        </Grid>
                        <Grid style={{ textAlign: "center" }} item xs={4}>
                            <img src={OrderSecondImage} height="16px" />
                        </Grid>
                        <Grid style={{ textAlign: "center" }} item xs={4}>
                            <img src={OrderThirdImage} height="18px" />
                        </Grid>
                        <Grid style={{ textAlign: "center" }} item xs={4}>
                            <p style={{ fontSize: 12, marginLeft: "6px", marginTop: "0", color: "#000000" }}>New</p>
                        </Grid>
                        <Grid style={{ textAlign: "center" }} item xs={4}>
                            <p style={{ fontSize: 12, marginLeft: "6px", marginTop: "0", color: "#000000" }}>InProgress</p>
                        </Grid>
                        <Grid style={{ textAlign: "center" }} item xs={4}>
                            <p style={{ fontSize: 12, marginLeft: "6px", marginTop: "0", color: "#000000" }}>Delivered</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid style={{ marginTop: "40px" }} item xs={3}>
                    <div>
                        <div style={{ fontSize: 14, color: "#000000", fontWeight: 800, textAlign: "left", display: "flex" }}><span>Order</span> &nbsp;<span>Status</span> </div>
                        <div >
                            <RoundedButton
                                size={"small"}
                            >
                                Status
                            </RoundedButton>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}