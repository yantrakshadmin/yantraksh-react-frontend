import React, { useState, useEffect } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';


const Items = props => {
    return (
        <div className="animated fadeIn">
            <Card>
                <CardBody>
                    <div className="text-right">
                        <Link to="/masters/items/add">
                            <Button color="primary"><FontAwesomeIcon icon={faPlus} /> Add Item</Button>
                        </Link>
                    </div>

                </CardBody>
            </Card>
        </div>
    )
}

export default Items;