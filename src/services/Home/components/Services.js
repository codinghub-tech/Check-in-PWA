import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RoundedButton from '../../../shared/components/Button/Rounded';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



export default function TextFieldSizes() {
    let items = [
        {
            services: "RoomService",
            imageUrl: "https://previews.123rf.com/images/yupiramos/yupiramos1806/yupiramos180610335/102991061-dental-care-kit-mouthwash-tooth-crown-medication-vector-illustration.jpg"

        },
        {
            services: "Dental Care",
            imageUrl: "https://previews.123rf.com/images/yupiramos/yupiramos1806/yupiramos180610335/102991061-dental-care-kit-mouthwash-tooth-crown-medication-vector-illustration.jpg"
        },
        {
            services: "Shaving Kit",
            imageUrl: "https://previews.123rf.com/images/yupiramos/yupiramos1806/yupiramos180610335/102991061-dental-care-kit-mouthwash-tooth-crown-medication-vector-illustration.jpg"
        }
    ]

    return (


        <div>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <div ><h3>Services</h3></div>
                <div ><RoundedButton size="small" style={{ backgroundColor: "#0295aa" }}>My Requests</RoundedButton></div>
            </div>
            <form noValidate autoComplete="off">


                <div>
                    <TextField
                        // className={classes.inputfield}
                        label="Search"
                        id="outlined-size-small"
                        // defaultValue="Small"
                        placeholder="Ask for anything"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />

                </div>
                <div style={{ display: "flex" }} >
                    {items.map(res =>
                        <Card style={{ height: "90px", width: "100px", margin: "20px", marginRight: "10px" }}>
                            <CardMedia
                                style={{ height: "30px", margin: "20px", marginBottom: "0" }}
                                image={res.imageUrl}
                                title="Contemplative Reptile"
                            />
                            <Typography>
                                <p style={{ fontSize: 14, marginLeft: "6px", color: "#000000" }}>  {res.services}</p>
                            </Typography>
                        </Card>
                    )}
                </div>
            </form>

        </div>
    );
}

