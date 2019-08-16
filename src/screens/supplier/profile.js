import React, {useState, useEffect} from "react";
import {Button} from "reactstrap";
import Loaded from "../../components/loader";


export default (props) => {

    const [data, setData] = useState(false);

    useEffect(() => {
        setData({
            'name': 'Faisal Manzer',
            'company': 'Yantraksh Pvt. Ltd.',
            'email': 'faisal_manzer@yahoo.in',
            'address': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores porro, tenetur! Accusantium aliquam asperiores, at blanditiis culpa dicta dolorem eligendi incidunt ipsa laborum nisi nostrum perspiciatis quasi rem reprehenderit sint!',
            'supplier': '',
            'services': '0',
            'id': props.match.params.id
        })
    }, []);

    if (!data)
        return <Loaded/>;

    const {name} = data;

    return (
        <div>
            <Button
                outline color="secondary" style={{backgroundColor: 'white', color: 'black'}}
                onClick={() => window.history.back()}
            >
                <i className={"fa fa-angle-left"}/> &nbsp;&nbsp;&nbsp;
                GO BACK
            </Button>

            <br/><br/><br/>
            <h1>
                <img src={`https://api.adorable.io/avatars/50/${data.id}`} alt=""
                     style={{height: 50, width: 50, borderRadius: 25, marginRight: 10}}/>
                {name}
            </h1>
            <b>Name:</b> {data.name} <br/>
            <b>Company:</b> {data.company} <br/>
        </div>
    )
}
