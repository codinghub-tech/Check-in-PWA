import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


export default function Trending() {
    let items = [
        {
            itemname: "Chicken Biryani",
            imageUrl: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Mutton-Biryani-Recipe.jpg",
            rate: "$5"

        },
        {
            itemname: "Fried Rise",
            imageUrl: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Fried-Rice-min.jpg",
            rate: "$4"
        },

    ]

    return (
        <div>
            <div>
                <h3>Trending Dishes</h3>
            </div>
            <div style={{ display: "flex" }} >
                {items.map(res =>
                    <Card style={{ height: "120px", width: "190px", margin: "20px", }}>
                        <CardMedia
                            style={{ height: "70px" }}
                            image={res.imageUrl}
                            title="Item"
                        />
                        <Typography variant="subtitle1" color="textSecondary">
                            <p style={{ fontSize: 14, marginLeft: "6px", marginTop: "0", marginBottom: "0", color: "#000000" }}> {res.itemname}</p>
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary">
                            <p style={{ fontSize: 14, marginLeft: "6px", marginTop: "0", color: "#000000" }}> {res.rate}</p>

                        </Typography>
                    </Card>
                )}
            </div>

        </div>
    )
}