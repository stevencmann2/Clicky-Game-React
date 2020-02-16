import React, { useState } from "react";

const MemoryCard = ({
    id,
    name,
    bassImage,
    guessed
})=> {

    const [prevClicked, setPrevClicked] =useState(guessed)

    const handleGuessed = () => {
        const confirmClicked = {guessed: true }
        setPrevClicked(confirmClicked)
    }

    return(
        <div className="col">
            <div className="card m-3" style={styles.bassCard} onClick={handleGuessed} >
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