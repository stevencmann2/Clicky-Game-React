import React from 'react';
import {
    Navbar, 
    Footer, 
    MemoryCard,
} from "./components"


const App = () => {
    return(
        <div>
            <Navbar />
                <div className="container">
                    <MemoryCard />
                </div>
            <Footer />
        </div>
    )

}


export default App;
