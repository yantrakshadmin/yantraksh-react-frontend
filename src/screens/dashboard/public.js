import React from 'react';
import {Redirect} from "react-router";

// does nothing than redirect guest to sign-in
export default () => (
    <div>
        <Redirect to={'/sign-in/'} />
    </div>
)
