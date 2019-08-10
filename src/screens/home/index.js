import React from "react";

import AuthSwitch from "../../helpers/authSwitch";
import PrivateComp from "./private"
import PublicComp from "./public";


export default () => <AuthSwitch private={PrivateComp} public={PublicComp} />;
