import React from 'react';


const Footer=() => {
return(

<footer className="mt-5" style={styles.footer}>
    <div className="footer-copyright text-center py-3">
        <a href="/" style={styles.text}>Clicky Game</a> 
        Developed by: 
        <a href="https://github.com/stevencmann2" style={styles.text}> 
        Steven Mann</a>
        </div>
</footer>

)


}

const styles ={
footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#30485e' 
},

text : {
    fontFamily: 'Modak, cursive', 
    color: '#a813e8',
    padding: '7px',
    fontSize: '1.4em',
}

}


export default Footer;