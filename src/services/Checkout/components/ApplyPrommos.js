import React from 'react'
import { connect } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import SettleBill from '../components/SettleBill'
import Promos from '../components/Promos'
import GrandTotal from '../components/GrandTotal';
import Button from '../.././../shared/components/Button/Basic'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import arrow5 from 'C:/Users/hp/Videos/Check-in-PWA/src/assets/home/arrow5.png'
import line5 from 'C:/Users/hp/Videos/Check-in-PWA/src/assets/home/line5.png'
import more from 'C:/Users/hp/Videos/Check-in-PWA/src/assets/home/more.png'
import promo5 from 'C:/Users/hp/Videos/Check-in-PWA/src/assets/home/promo5.png'
import Offers from 'C:/Users/hp/Videos/Check-in-PWA/src/services/MenuServices/components/Offers.js'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Percentage from '../../../assets/menu/percentageicon.svg';
import parser from 'html-react-parser'
import { blue } from '@material-ui/core/colors';

import CategoriesMore from 'C:/Users/hp/Videos/Check-in-PWA/src/services/Checkout/components/CategoriesMore.js'


const ApplyPrommos = (props) => {

    const handleApply = () => {
        history.push("/settlebill")
        // console.log("sdfg")

    }
    const handleMore = () => {
        console.log("more")

    }

    // console.log(props)
    const { menu } = props;
    const promos = menu.promos.data;
    //  console.log(Promos)
    const history = useHistory()
    let windowWidth = window.innerWidth;
    return (
        <div>
            <div style={{ height: '130px', width: '100%', backgroundColor: '#ececec' }}>
                <div >

                    <ArrowBackIosIcon style={{ color: '#6d6d6d', margin: '12px 0px -5px 12px' }}
                        onClick={() => history.hasOwnProperty("back") ? history.back() : history.push("/settlebill")} />
                    <span style={{ color: "#6d6d6d", fontSize: '20px', marginTop: '15px', }}>
                        Apply Coupons
                    </span>

                    <Paper
                        elevation={0}
                        component="form"
                        style={{
                            borderRadius: '10px',
                            margin: '10px',
                            height: '43px',
                            marginTop: '10px',
                            //marginRight: '250px',
                            border: "1px solid #cdcdcd",
                        }}
                    >
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "-3px"
                        }}
                        >
                            <InputBase
                                placeholder="Search for promo code"
                                style={{ marginLeft: '8px', marginTop: '5px' }}
                            />
                            <IconButton aria-label="search" style={{ marginLeft: windowWidth * 0.32 + 'px' }} >
                                <img src={arrow5} style={{ color: '#ff5656' }} width="20" height="20" viewBox="0 0 30 30"></img>

                            </IconButton>

                        </div>
                    </Paper>


                </div>
                <div style={{ color: "#6d6d6d", fontSize: '15px', margin: '15px 0px 0px 15px' }}>
                    Available Promos
                </div>
                <div >
                    <br></br>
                    {promos.map(res =>
                        <div >
                            <img src={promo5} style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', marginLeft: '10px', margin: '12px 0px -10px 12px' }} width="30" height="30"></img>
                            <span style={{ color: '#ff5656', fontSize: '12px', marginLeft: '5px', fontWeight: 800 }} onClick={() => history.push("/settlebill")}>CHECKOUT</span>

                            <span style={{ marginLeft: '200px', color: '#ff5656', fontSize: '15px', fontWeight: 800 }} onClick={handleApply}>Apply</span>
                            <p style={{ display: 'flex', marginBottom: '0', marginLeft: '6px', fontSize: '14px', color: '#6d6d6d' }}>

                                &nbsp;Get&nbsp;<div style={{ whiteSpace: 'pre-line', fontSize: '11px' }} > {parser(res.name)}</div>
                            </p>

                            <p style={{ color: '#bebebe', marginTop: '0px', marginLeft: '6px', fontSize: '10px', marginLeft: '10px', marginTop: '1px' }}>Applicable for orders above  99 </p>
                            <img src={more} style={{ width: '50px', marginLeft: '10px', marginBottom: '5px' }} onclick={handleMore}></img>
                            {/* <Collapse> */}
                            {/* <Button style={{ backgroundColor: '#00888C', color: '#ffffff', width: '1px', marginLeft: '10px', height: '20px' }} onclick={handleMore} >More</Button> */}
                            {/* <div style={{ position: 'absolute', zIndex: 10, width: '100%', }} > <CategoriesMore /></div> */}
                            {/* </Collapse> */}

                            <img src={line5} style={{ marginLeft: '10px', width: '350px' }}></img>
                        </div>
                    )}



                </div>

                <div className="text-center" style={{ bottom: 20, position: 'fixed', width: '100%' }}><Button fullWidth style={{ backgroundColor: '#32c282', marginTop: '30px', color: '#fff', width: '90%' }}>PAY</Button></div>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => ({
    menu: state.menu,
})


const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyPrommos)
