import React, {lazy} from "react";
import AuthSwitch from "../../helpers/authSwitch";
import {connect} from "react-redux";

const PrivateScreen = lazy(() => import('./private'));
const PublicScreen = lazy(() => import('./public'));

export default () => <AuthSwitch private={PrivateScreen} public={PublicScreen} />;
