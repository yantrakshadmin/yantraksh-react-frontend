import React from 'react';
import {Link} from "react-router-dom";

export default () => (
    <div>
        <h1>
            Welcome,
        </h1>
        <Link to={'/sign-in/'}>
            Sign IN
        </Link>

        <br/>
        <br/>
        <br/>

        or &nbsp;
        <Link to={'/sign-up/'}>
            Create a new account to access our awesome new services.
        </Link>
    </div>
)
