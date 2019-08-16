import React from 'react';
import {Redirect} from "react-router";

// does nothing than redirect the user to dashboard
export default () => (
    <div>
        <Redirect to={'/dashboard/dashboard'} />
    </div>
)
