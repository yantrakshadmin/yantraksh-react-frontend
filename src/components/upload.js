import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useDropzone} from 'react-dropzone';
import {uploadOrders} from "../helpers/api";


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
                                {acceptedFiles[0].path} ({acceptedFiles[0].size} bytes)
                            </h5>
                            <br/>

                            <Button color={"primary"} size="lg" onClick={async () => {
                                try {
                                    await uploadOrders(acceptedFiles[0]);
                                    alert('Done')
                                } catch (e) {
                                    console.log(e);
                                    alert('error')
                                }
                            }}>
                                <i className={"icon-cloud-upload"}/> &nbsp;
                                Upload
                            </Button>

                            <Button color={"error"}>
                                Cancel
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <i className={"icon-cloud-upload"} style={{fontSize: '5rem'}}/>
                            <br/>
                            <input {...getInputProps()} />
                            <h3>Drag 'n' drop some files here, or click to select files</h3>
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
                    }}
                >
                    <Basic/>
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

export default Upload;
