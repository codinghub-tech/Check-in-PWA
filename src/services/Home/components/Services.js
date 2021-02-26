import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RoundedButton from '../../../shared/components/Button/Rounded';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import ScrollMenu from "react-horizontal-scrolling-menu";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

export default function TextFieldSizes() {
    // const history = useHistory()
    // const handleService = () => {
    //     history.push("/Home/Roomservice")
    // }
    let items = [
        {
            services: "RoomService",
            imageUrl: "https://c8.alamy.com/comp/2EAEMTP/bedroom-interior-with-cleaning-maids-home-cleaning-or-hotel-room-service-cartoon-vector-illustration-interior-with-women-in-black-dresses-and-white-2EAEMTP.jpg"

        },
        {
            services: "Dental Care",
            imageUrl: "https://previews.123rf.com/images/yupiramos/yupiramos1806/yupiramos180610335/102991061-dental-care-kit-mouthwash-tooth-crown-medication-vector-illustration.jpg"
        },
        {
            services: "Shaving Kit",
            imageUrl: "https://previews.123rf.com/images/skypicsstudio/skypicsstudio1904/skypicsstudio190400081/120798802-beard-care-vector-flat-illustration-hair-shaving-machine-or-trimmer-water-spray-bottle-mirror-afters.jpg"
        },
        {
            services: "Fresh towels",
            imageUrl: "https://png.pngtree.com/png-vector/20190117/ourmid/pngtree-yellow-towel-beautiful-towel-hand-painted-towel-cartoon-towel-png-image_415925.jpg"
        },
        {
            services: "water",
            imageUrl: "https://w7.pngwing.com/pngs/363/350/png-transparent-water-bottle-glass-bottle-plastic-bottle-blue-water-bottle-glass-blue-cartoon.png"
        },
        {
            services: "Tissue",
            imageUrl: "https://image.freepik.com/free-vector/cute-tissue-box-cartoon-icon-illustration-healthy-mascot-character-health-medical-icon-concept-isolated_138676-889.jpg"
        }
    ]
    let windowWidth = window.innerWidth;
    return (


        <div>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <div style={{ marginLeft: '10px' }}><h3>Services</h3></div>
                <div ><RoundedButton size="small" style={{ backgroundColor: "#0295aa" }}>My Requests</RoundedButton></div>
            </div>
            <form noValidate autoComplete="off">


                <div>
                    {/* <TextField
                        // className={classes.inputfield}
                        label="Search"
                        id="outlined-size-small"
                        // defaultValue="Small"
                        placeholder="Ask for anything"
                        variant="outlined"
                        size="small"
                        fullWidth
                    /> */}
                    <Paper component="form" style={{ borderRadius: '20px', margin: '5px', height: '43px', marginTop: '-10px' }}>

                        <InputBase
                            placeholder="Ask for Something"
                            style={{ marginLeft: '10px' }}
                        />
                        <IconButton type="submit" aria-label="search" style={{ marginLeft: windowWidth * 0.32 + 'px', marginBottom: '5px' }} >
                            <SendIcon style={{ color: '#ff5656' }} />
                        </IconButton>

                    </Paper>
                </div>

            </form>

            <div style={{ display: "flex", overflow: "scroll", marginTop: "0px" }} >

                <ScrollMenu

                    data={items.map(res =>
                        <Card style={{ height: "90px", width: "100px", margin: "20px", marginRight: "10px", }}>
                            <CardMedia
                                style={{ height: "30px", margin: "20px", marginBottom: "0", borderRadius: "10px" }}
                                image={res.imageUrl}
                                title="Contemplative Reptile"
                            // onClick={handleService}
                            />
                            <Typography>
                                <p style={{ fontSize: 14, marginLeft: "6px", color: "#000000" }}>  {res.services}</p>
                            </Typography>
                        </Card>
                    )} />
            </div>

        </div>
    );
}

