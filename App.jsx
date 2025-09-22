import React from "react";


import { FaFacebookF, FaYoutube } from "react-icons/fa";

const App =() => {
    return (
        <div>
            <h1>Welcome to React</h1>

            <button>
                <FaFacebookF className="icon" />
            </button>
             <button>
                <FaYoutube className="icon" />
            </button>
        </div>
    )
}

export default App;