import React,{ useCallback } from 'react';
import {Card,CardBody,Button} from 'reactstrap';
import Barcode from 'react-barcode';


const PrintGrn = props => {

    const generateBarcodeText = useCallback(
        qty => {
            // let final = "";
            // row.items.forEach(i => {
            //     final = final + `${i.item}-${i.item_quantity} `;
            // });
            // return _.trimEnd(final);
            return `YNT9299${props.match.params.grnid}-${props.match.params.itembatchid}-${props.match.params.itemname}-${qty}`;
        }, [props,]
    )

    const renderListOfBarcodes = useCallback(
        () => {

            var foo = new Array(parseInt(props.match.params.itemqty));

            for(var i = 1; i < (parseInt(props.match.params.itemqty)+1); i++){
                foo.push(i);
            }

            return foo.map(e => {
                return (
                    <div>
                        <Barcode displayValue={true} height="70%" width="2" value={generateBarcodeText(e)} />
                    </div>
                );
            })

        }, [props,]
    )

    return (
        <Card>
            <CardBody>
                <Button color="primary" onClick={() => global.print()}>
                    Print
                </Button>

                <hr />

                {renderListOfBarcodes()}

            </CardBody>
        </Card>
    )
}

export default PrintGrn;