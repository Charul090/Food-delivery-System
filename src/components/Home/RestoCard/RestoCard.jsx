import React from 'react';
import styles from "./RestoCard.module.css";
import {useHistory} from "react-router-dom"
import {Box,Card, CardMedia,Button} from "@material-ui/core"

export default function RestoCard(props) {
    let {data,id}=props;
    let history = useHistory();

    const handleClick=()=>{
        history.push(`/order/${id}`)
    }
    
    return (
        <Card className={styles.card} elevation={3}>
            <Box className={styles.title}>
                <Box className={styles.thumb}>
                    <CardMedia image={data.thumb_url} className={styles.img}/>
                </Box>
                <Box className={styles.name}>
                    <h2>{data.name}</h2>
                </Box>
                <Box className={styles.score}>
                    <span className={styles.rating}>
                        {data.user_rating.aggregate_rating === null ?"N/A":data.user_rating.aggregate_rating}
                    </span>
                    <br></br>
                    <span className={styles.votes}>
                        {data.user_rating.votes} votes
                    </span>
                </Box>
            </Box>
            <Box className={styles.info}>
                <p>Cuisines: {data.cuisines.join(", ")}</p>
                <p>Cost For Two: {data.average_cost_for_two}</p>
                <p>Type: {data.type.join(", ")}</p>
            </Box>
            <Box className={styles.buy}>
                <Button size="small" variant="contained" color="secondary" onClick={handleClick}>
                    Order Now
                </Button>
            </Box>
        </Card>
    )
}
