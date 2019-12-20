import React from 'react';
import {Button, Modal} from 'reactstrap';
import {useDropzone} from 'react-dropzone';
import {uploadOrders} from "../helpers/api";
import Link from "react-router-dom/es/Link";
import {toast} from "react-toastify";
import { loadOrders } from '../actions/data';

import {connect} from "react-redux";


function Basic(props) {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    console.log(acceptedFiles);

    return (
        <section>
            <div {...getRootProps({className: 'dropzone'})} style={{
                height: '50vh',
                // width: '50vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                textAlign: 'center'
            }}>
                <div>
                    {acceptedFiles[0] ? (
                        <div>
                            <h5>
                                {acceptedFiles[0].path} ({acceptedFiles[0].size / 1000} Kbytes)
                            </h5>
                            <br/>

                            <Button color={"primary"} size="lg" onClick={async () => {
                                try {
                                    await props.upload(acceptedFiles[0]);
                                    await props.loadOrders();
                                    await props.onClose();
                                    toast.success("Upload Successful!");
                                } catch (e) {
                                    console.log(e);
                                    toast.error("Upload failed!");
                                }
                            }}>
                                <i className={"icon-cloud-upload"}/> &nbsp;
                                Upload
                            </Button>

                            <Link to={'/orders/all'}>

                            </Link>
                            <Button color={"error"} onClick={(e) => props.onClose(e)}>
                                Cancel
                            </Button>

                        </div>
                    ) : (
                        <div>
                            <i className={"icon-cloud-upload"} style={{fontSize: '5rem'}}/>
                            <br/>
                            <input {...getInputProps()} />
                            <h3>Drag & drop files here, or click to select files</h3>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}


class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            backdrop: true
        };

        this.toggle = this.toggle.bind(this);
        this.changeBackdrop = this.changeBackdrop.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    changeBackdrop(e) {
        let value = e.target.value;
        if (value !== 'static') {
            value = JSON.parse(value);
        }
        this.setState({backdrop: value});
    }

    render() {
        return (
            <div style={{display: 'inline-block'}}>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                    backdrop={true}
                    style={{
                        padding: 0,
                        height: '50vh',
                        width: '50vw',
                        top: '25%',
                    }}
                >
                    <Basic loadOrders={this.props.loadOrders} upload={this.props.upload} onClose={this.toggle}/>
                </Modal>
                <Button color={"secondary"}
                        style={{backgroundColor: 'white'}} onClick={this.toggle}>
                    <i className={"icon-cloud-upload"}/> &nbsp;
                    Upload
                </Button>
            </div>
        );
    }
}

export default connect(null,{ loadOrders })(Upload);
