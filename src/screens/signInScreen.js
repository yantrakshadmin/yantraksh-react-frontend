import React from 'react';
import GuestScreen from "./guestScreen";
import SignInCard from "../components/signInCard";
import RedirectWhenAuthenticated from "../helpers/redirectWhenAuthenticated";

const SignInScreen = () => (
    <GuestScreen>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh'
        }}>
            <SignInCard/>
        </div>
    </GuestScreen>
);

export default () => (
    <RedirectWhenAuthenticated component={SignInScreen} />
);
