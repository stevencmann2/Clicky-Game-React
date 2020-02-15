import React from "react";

const MemoryCard = () => {

    return(
        <div className="card" style={styles.bassCard}>
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFgkejynt_tcv6ViB_q3pJOZ92UJ3KAIYYd1G0pEA7dEn1e5iV" alt="Card image cap"></img>
        </div>
    )
}


const styles ={
    bassCard: {
        width: '18rem'
    },
}


export default MemoryCard;