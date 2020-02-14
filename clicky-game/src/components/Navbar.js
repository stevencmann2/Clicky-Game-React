import React from 'react';

const Navbar = () => {

return(


<nav className="navbar navbar-expand-lg navbar-light bg-light text-center" >
    <ul>
    <li className="navbar-brand">
        Clicky Memory Game
    </li>
    <li className="navbar-brand">
        Begin by clicking any image
    </li>
    <li className="navbar-brand float-right">
        Score:
    </li>
    </ul>
</nav>


);
};

const styles= {
    display: 'inline-block'
}

export default Navbar;