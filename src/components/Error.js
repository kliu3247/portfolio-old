import React from 'react';
import '../assets/css/error.css';

import error from '../assets/images/error/error404.png';

const Error = () => (
    <>
    
        <div id = "errbackground">
        <img src= {error} id = "errimg"></img>
        </div>
        <div id = "bc">
    </div>
   </>
);

export default Error;