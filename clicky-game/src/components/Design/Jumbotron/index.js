import React from 'react';
import Scales from '../../../assets/images/scales.jpg'

const Jumbotron = () => {

    return(
<div className ="row">
<div className="col-12">
<div className ="jumbotron text-center text-light " style={styles.behind}>
  <h1 className ="display-4 mt-5">Bass Clicky Game!</h1>
  <p className ="lead">Click on an image to score points, just don't click the same image twice!</p>
</div>
</div>
</div>
    )
}

const styles= {
    behind: {
        backgroundImage: `url(${Scales})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

}


export default Jumbotron;