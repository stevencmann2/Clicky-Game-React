import React from "react";

const MemoryCard = ({
    name,
    bassImage
})=> {

    return(
        <div className="card m-3" style={styles.bassCard}>
            <img className="card-img-top" src={bassImage} alt={name}></img>
        </div>
    )
}


const styles = {
    bassCard: {
        width: '18rem'
    },
}


export default MemoryCard;