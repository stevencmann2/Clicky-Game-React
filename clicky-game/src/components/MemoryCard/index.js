import React from "react";

const MemoryCard = ({
    id,
    name,
    bassImage,
    clickHandler,
    guessed
})=> {


    return(
        <div className="col">
            <div className="card m-3" style={styles.bassCard} onClick={()=> clickHandler(id, guessed)} >
                <img className="card-img-top" src={bassImage} alt={name}></img>
            </div>
        </div>
    )
}


const styles = {
    bassCard: {
        width: '18rem'
    },
}


export default MemoryCard;