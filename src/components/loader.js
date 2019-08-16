import React from "react";
import {BeatLoader} from "react-spinners";


export default (props) => {
    let size = 20;
    if(props)
        size = props.size;

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <BeatLoader size={size} color={'#076af2'}/>
        </div>
    );
}
