import React from 'react';
import GuestScreen from "../guestScreen";
import SignInCard from "../../components/signInCard";


export default () => (
    <GuestScreen>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: '100vh'
        }}>
            <div>
                <h1>
                    <span style={{fontSize: '2.5rem'}}>Welcome to</span><br/>
                    YANTRAKSH FREIGHT
                </h1>
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                }}>
                    From Planning to Delivering.
                </div>
            </div>

            <SignInCard/>

            {/*Empty for a reason*/}
            <div/>
        </div>
    </GuestScreen>
)
