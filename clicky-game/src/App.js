import React, { useState } from 'react';
import {
    Navbar, 
    Footer, 
    MemoryCard,
    Wrapper,
} from "./components";
import guitars from "./guitars.json";


const App = () => {

    const [guitarsList, setGuitarsList]= useState(guitars);

    return(
        <div>
             <Navbar />
                
                <Wrapper>
                {guitarsList.map(guitar =>(
                    <MemoryCard
                      id = {guitar.id}
                      name = {guitar.name}
                      bassImage = {guitar.image}
                    />
                  ))}
                </Wrapper>
            <Footer />
        </div>
    )

}


export default App;
