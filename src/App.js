import React from 'react';

import Login from "./components/Login"
import { useStateValue } from "./StateProvider";
import Home from "./Page/Home"


function App() {
    const [{ user }] = useStateValue();


    return (
        <div className="App">
            {!user ? (<Login/>) : (<Home />)}
        </div>
    );
}

export default App;
