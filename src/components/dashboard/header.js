import React, {Component} from 'react';
import {connect} from "react-redux";
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown} from 'reactstrap';
import {AppNavbarBrand, AppSidebarToggler} from '@coreui/react';

import {USER_SIGN_OUT} from "../../actions";

import logo from '../../assets/img/brand/Yantraksh Logo.png'
import logoY from '../../assets/img/Favicon_blue.png'
import {Link} from "react-router-dom";
import userImg from '../../assets/img/avatars/download.png'


const defaultProps = {};
class DefaultHeader extends Component {
    render() {

        // eslint-disable-next-line
        const {user, signOut} = this.props;
        const {email, dp, username} = user;

        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand
                    full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
                    minimized={{ src: logoY, width: 25, height: 27, alt: 'CoreUI Logo' }}
                />
                <AppSidebarToggler className="d-md-down-none" display="lg" />

                <Nav className="d-md-down-none" navbar>

                </Nav>
                <Nav className="ml-auto" navbar>

                    <UncontrolledDropdown nav direction="down">
                        <DropdownToggle nav>
                            {username}
                            <img src={userImg} className="img-avatar p-1" alt={email}/>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
                            {/*<DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>*/}
                            {/*<DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>*/}
                            {/*<DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>*/}
                            {/*<DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>*/}
                            {/*<DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>*/}
                            <DropdownItem href="freight/edit-profile/new">


                                <i className="fa fa-user"></i><a href="freight/edit-profile/new">Edit Profile</a>

                                <Link to={"/freight/edit-profile"}>
                                </Link>


                            </DropdownItem>
                            {/*<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>*/}
                            <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">2</Badge></DropdownItem>
                            {/*<DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>*/}
                            {/*<DropdownItem divider />*/}
                            {/*<DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>*/}
                            <DropdownItem onClick={signOut}><i className="fa fa-lock"></i> Logout</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                {/*<AppAsideToggler className="d-md-down-none" />*/}
                {/*<AppAsideToggler className="d-lg-none" mobile />*/}
            </React.Fragment>
        );
    }
}

DefaultHeader.defaultProps = defaultProps;


const mapStateToProps = (state) => ({
    user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch({type: USER_SIGN_OUT})
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);
