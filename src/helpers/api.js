/*
    Contains all URLs and ApiFunctions
 */
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";

import { API_TOKENS } from "../data/storage";
import { errorGettingUserInfoNotification, signINAgainNotification } from "./notifications";

// const BASE_URL = "http://0.0.0.0:8000/";
//const BASE_URL = "http://127.0.0.1:8000/"
const BASE_URL = "http://10.5.50.94:8000/";
//const BASE_URL = "https://backend.yantraksh.com/";
//const BASE_URL = "http://192.168.43.34:8000/";
//const BASE_URL = "https://yantracloudbackend.herokuapp.com/";
//const BASE_URL = "http://yantra-cloud.ap-south-1.elasticbeanstalk.com/";
// const BASE_URL = "http://yantra-cloud.ap-south-1.elasticbeanstalk.com/";
// sajkhciuab

export const GOOGLE_API_KEY = "AIzaSyDtuu39wICY-BsPDVIGS27FA9Sf0BQZggo";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-urlencoded';

const GET_TOKEN_PAIR = '/auth/token/';
export const CREATE_ACCOUNT_SHIPPER = 'shippercreateapi/';
export const CREATE_ACCOUNT_SUPPLIER = 'suppliercreateapi/';
export const CREATE_ACCOUNT_COMPANY = 'companycreateapi/';
const USER_DETAILS = "/auth/user/meta/";
const USERNAME_AVAILABLE = '/auth/username/available/';
const REFRESH_ACCESS_TOKEN = '/auth/token/refresh/';

//freight exchange for shipper: dashboard
const ASSIGNED_TRUCKS = '/api/assignedtrucks/';
const LIVE_AVAILABLE_TRUCKS = '/api/liveavailabletrucks/';
const MY_BIDS = '/suppliers/mybidsapi/';
const RFQ = '/api/rfq/';

//API for shipper
const LIVE_AVAILABLE_LOADS = '/api/liveavailableloads/';
const RFQ_RESULTS = 'shipper/rfqresultsapi/';
const SHIPPER_ALL_ORDER = '/api/all-orders/';
const CHANGE_ORDERS_STATUS = '/shipper/update-orders/';
const UPLOAD_ORDERS = 'shipper/uploadapi/';
const PLAN_VEHICLE = 'shipper/packit-api/';
const PLAN_VEHICLE_MANUALLY = 'manualpackit/';
const CONFIRM_RFQ = 'confirmapi/';

//Dispatch plan and Items
const DISPATCH_HISTORY = 'api/dispatcherhistory/';
const LOADING_PLAN = 'api/dispatchhistoryitem/';

const CREATE_NEW_RFQ = 'createrfq/';
const POST_TRUCK = 'post-truck/';

const BID_NOW = 'suppliers/quizapi/';
const EDIT_INVOICE = '/suppliers/invoiceapi/';
const EDIT_LR = '/api/lr/';

const ADD_ITEM_IN_INVOICE = 'invoicetransactions/';

const EDIT_PROFILE_SHIPPER = 'editprofileshipper/';
const GET_INVOICE = '/suppliers/invoiceapi/';
const GET_LR = '/api/lr/';
const EDIT_PROFILE_SUPPLIER = 'editprofilesupplier/';

const FETCH_SUPPLIER_TYPE = 'suppliertype/'

const TRACK_NOW = 'track/';

const INVOICE_TABLE_VIEW = '/suppliers/invoices/';
const LR_TABLE_VIEW = '/api/lr/';

const ALL_AVAILABLE_TRUCKS = 'api/trucksdb/';

//Reports
export const REPORT_DISPATCHER = 'dispatcherreportapi/';
export const REPORT_LR = 'lrreportapi/';
export const REPORT_INVOICE = 'invoicereportapi/';
export const REPORT_TRACKING = 'trackingreportapi/';

export const REPORT_DISPATCHER_VS_LR = 'DispatchervsLr/';
export const REPORT_TRACKING_VS_LR = 'TrackingvsLr/';

//SupplierMasters
export const MASTER_ITEMS = 'suppliers/supplieritems/';
export const MASTER_CUSTOMERS = 'suppliers/suppliercustomer/';

//Supplier Invoice
export const SUPPLIER_INVOICE = 'suppliers/supplierinvoice/';

//User Account Verification
export const VERIFY_OTP = 'verifyotp/';
export const RESEND_OTP = 'resendotp/';

//Shipper Invoice
export const SHIPPER_INVOICE = "shipper/shipperinvoice/";


const getAccessToken = () => {
    return new Promise(async (resolve, reject) => {
        const data = reactLocalStorage.getObject(API_TOKENS);

        if (!data)
            return resolve('No User found');

        let access_token = '';
        const expires = new Date(data.expires * 1000);
        const currentTime = new Date();

        if (expires > currentTime) {
            access_token = data.tokens.access;
        } else {
            try {
                const new_token = await loadOpenUrl(REFRESH_ACCESS_TOKEN, {
                    method: 'post',
                    data: {
                        refresh: data.tokens.refresh,
                    }
                });
                access_token = new_token.access;
                const expires = new_token.expires;

                reactLocalStorage.setObject(API_TOKENS, {
                    tokens: {
                        ...data.tokens,
                        access: access_token
                    },
                    expires: expires
                });

            } catch (e) {
                try {
                    if (e.data.code === "token_not_valid")
                        signINAgainNotification();
                    else
                        errorGettingUserInfoNotification();
                } catch (e) {
                    // pass
                }
                return reject('Error refreshing token', e);
            }
        }
        return resolve(access_token);
    });
};

export const loadOpenUrl = async (url, config = {}) => {
    return new Promise((resolve, reject) => {
        axios(url, config)
            .then((res) => resolve(res.data))
            .catch(err => reject(err.response))
    });
};
export const loadSecureUrl = (url, config) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await loadOpenUrl(url, {
                ...config,
                headers: {
                    'Authorization': `Bearer ${await getAccessToken()}`
                }
            });
            return resolve(data)
        } catch (e) {
            return reject(e)
        }
    })
};
export const getAPITokens = async (username, password) => {
    return loadOpenUrl(GET_TOKEN_PAIR, {
        data: {
            username: username,
            password: password
        },
        method: "post"
    })
};
export const getUserDetails = () => {

    //TODO: Show loading screen
    const data = loadSecureUrl(USER_DETAILS);

    //TODO: hide loading screen
    return data;
};

export const isUsernameAvailable = async (username) => {
    try {
        return await loadOpenUrl(USERNAME_AVAILABLE, {
            params: {
                username: username
            }
        })
    } catch (e) {
        console.log(e);
        return false
    }
};
export const getReportsShipper = async (url, obj) => {
    return getReports(url, { 'date_from': obj.date_from, 'date_to': obj.date_to, 'c_name': obj.c_name })
};

export const getCompanyShipper = async (url) => {
    return loadOpenUrl(url, {
        method: 'get'
    })
};

export const signUpUserShipper = async (data) => {
    return loadOpenUrl(CREATE_ACCOUNT_SHIPPER, {
        method: 'post',
        data: data
    })
};

export const getReports = async (url, obj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const data = await axios.request(
                    {
                        method: 'post',
                        url: BASE_URL + url,
                        headers: {
                            'Content-Type': 'Application/Json',
                            'Authorization': `Bearer ${await getAccessToken()}`
                        },
                        data: obj
                    }
                );
                resolve(data);
            } catch (e) {
                reject(e)
            }
        }
    )
};

export const signUpUserSupplier = async (data) => {
    return loadOpenUrl(CREATE_ACCOUNT_SUPPLIER, {
        method: 'post',
        data: data
    })
};

export const signUpUserCompany = async (data) => {
    return loadOpenUrl(CREATE_ACCOUNT_COMPANY, {
        method: 'post',
        data: data
    })
};

//API's for supplier:
export const liveAvailableLoads = () => loadSecureUrl(LIVE_AVAILABLE_LOADS);
export const rfqresults = (id) => loadSecureUrl(`${RFQ_RESULTS}${id}/`);


export const getShipperProfileDetails = () => loadSecureUrl(EDIT_PROFILE_SHIPPER);
export const getSupplierProfileDetails = () => loadSecureUrl(EDIT_PROFILE_SUPPLIER);
export const getInvoiceDetails = (id) => loadSecureUrl(`${GET_INVOICE}${id}/`);
export const getLRDetails = (id) => loadSecureUrl(`${GET_LR}${id}/`);


export const invoiceView = () => loadSecureUrl(INVOICE_TABLE_VIEW);

export const invoiceSupView = () => loadSecureUrl(`api/financials-api/`);
export const LRView = () => loadSecureUrl(LR_TABLE_VIEW);


export const fetchSupplierType = () => loadSecureUrl(FETCH_SUPPLIER_TYPE);

// export const getTotalTruckChartData = () => loadSecureUrl(TRUCK_CHART_DATA);
export const getShipperAllOrderDetails = () => loadSecureUrl(SHIPPER_ALL_ORDER);
export const liveAvailableTrucks = () => loadSecureUrl(LIVE_AVAILABLE_TRUCKS);
export const myBids = () => loadSecureUrl(MY_BIDS);

export const addItemsInInvoice = data => loadSecureUrl(ADD_ITEM_IN_INVOICE, {
    method: 'post',
    data: data,
});

export const assignedTrucks = () => loadSecureUrl(ASSIGNED_TRUCKS);
export const rfq = () => loadSecureUrl(RFQ);
export const markHoldItemsApi = (ids) => loadSecureUrl(CHANGE_ORDERS_STATUS, {
    method: 'post',
    data: {
        'undispatch_items': 1,
        'quiz-pids': ids
    }
});
export const markItemsForDispatchApi = (ids) => loadSecureUrl(CHANGE_ORDERS_STATUS, {
    method: 'post',
    data: {
        'select_items': 1,
        'quiz-pids': ids
    }
});
export const uploadOrders = (file) => {
    let formData = new FormData();
    formData.append('file', file);

    return loadSecureUrl(UPLOAD_ORDERS, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: formData,
        method: 'post'
    });
};
export const uploadPODFile = (file, id) => {
    let formData = new FormData();
    formData.append('file', file);

    return loadSecureUrl(`uploadpod/${id}/`, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: formData,
        method: 'post'
    });
};
export const planVehicle = () => loadSecureUrl(PLAN_VEHICLE);
export const planVehicleManuallyButton = (truckId, selected, noOfTrucks) => loadSecureUrl(PLAN_VEHICLE_MANUALLY, {
    method: 'post',
    data: {
        'chosentruck': truckId,
        'quiz-pids': selected,
        'total_trucks': noOfTrucks,
    }
});
export const assignRFQs = (id, bi) => loadSecureUrl(`confirmapi/${id}/${bi}/`, {
    method: 'post'
});

//Dispatch plan and Items
export const getDispatchHistory = () => loadSecureUrl(DISPATCH_HISTORY);
export const getLoadingPlan = (pk) => loadSecureUrl(`${LOADING_PLAN}${pk}`);

export const createNewRFQ = (data) => loadSecureUrl(CREATE_NEW_RFQ, {
    data: data,
    method: 'post'
});

export const postTruck = (data) => loadSecureUrl(POST_TRUCK, {
    data: data,
    method: 'post'
});

export const bidNow = (data, id) => loadSecureUrl(`${BID_NOW}${id}/`, {
    data: data,
    method: 'post'
});

export const editProfileShipper = (data) => loadSecureUrl(EDIT_PROFILE_SHIPPER, {
    data: data,
    method: 'patch'
});

export const editInvoice = (data, id) => loadSecureUrl(`${EDIT_INVOICE}${id}/`, {
    data: data,
    method: 'patch'
});

export const trackNow = (id) => loadSecureUrl(`${TRACK_NOW}${id}/`);


// export const trackNow = () => loadSecureUrl(`track/96`);





export const editLR = (data, id) => loadSecureUrl(`${EDIT_LR}${id}/`, {
    data: data,
    method: 'patch'
});

export const editProfileSupplier = (data) => loadSecureUrl(EDIT_PROFILE_SUPPLIER, {
    data: data,
    method: 'patch'
});
export const getNumberOfWeightData = () => loadSecureUrl('weightvmonth/');
export const forgetPassword = (data) => loadOpenUrl('password-reset/', {

    data: data,
    method: 'post'

});

export const confirmPassword = (data) => loadOpenUrl('password-reset/confirm/', {

    data: data,
    method: 'post'

});

export const getNumberOfTrucksData = () => loadSecureUrl('truckvmonth/');
export const getEventsData = () => loadSecureUrl('calenderapi/')
export const addEventsData = data => loadSecureUrl('calenderapi/', {
    data: data,
    method: 'post'
})


export const feedback = (data) => loadSecureUrl('shipper/feedbackapi/', {
    data: data,
    method: 'post'
});

export const getKPIData = () => loadSecureUrl('api/kpi/');
export const uploadPOD = () => loadSecureUrl('api/pod/');
export const getMap = () => loadSecureUrl('map/');
export const allAvailableTrucks = () => loadSecureUrl(ALL_AVAILABLE_TRUCKS);
//takequiz/<int pk>



//Supplier ITEMS Master

export const fetchMasterItems = () => loadSecureUrl(MASTER_ITEMS);

export const createMasterItem = data => loadSecureUrl(MASTER_ITEMS, {
    data: data,
    method: 'post',
})

export const fetchMasterItem = id => loadSecureUrl(`${MASTER_ITEMS}${id}/`, {
    method: 'get',
})

export const editMasterItem = (id, data) => loadSecureUrl(`${MASTER_ITEMS}${id}/`, {
    data: data,
    method: 'patch',
})

export const deleteMasterItem = id => loadSecureUrl(`${MASTER_ITEMS}${id}/`, {
    method: 'delete',
})


//Supplier CUSTOMERS Master

export const fetchMasterCustomers = () => loadSecureUrl(MASTER_CUSTOMERS);

export const createMasterCustomer = data => loadSecureUrl(MASTER_CUSTOMERS, {
    data: data,
    method: 'post'
})

export const fetchMasterCustomer = id => loadSecureUrl(`${MASTER_CUSTOMERS}${id}/`, {
    method: 'get',
})

export const editMasterCustomer = (id, data) => loadSecureUrl(`${MASTER_CUSTOMERS}${id}/`, {
    data: data,
    method: 'patch',
})

export const deleteMasterCustomer = id => loadSecureUrl(`${MASTER_CUSTOMERS}${id}/`, {
    method: 'delete',
})

//Supplier Invoice

export const fetchSupplierInvoices = () => loadSecureUrl(SUPPLIER_INVOICE);

export const createSupplierInvoice = data => loadSecureUrl(SUPPLIER_INVOICE, {
    data: data,
    method: 'post',
})

export const fetchSupplierInvoice = id => loadSecureUrl(`${SUPPLIER_INVOICE}${id}/`, {
    method: 'get',
})

export const editSupplierInvoice = (id, data) => loadSecureUrl(`${SUPPLIER_INVOICE}${id}/`, {
    data: data,
    method: 'patch',
})

export const deleteSupplierInvoice = id => loadSecureUrl(`${SUPPLIER_INVOICE}${id}/`, {
    method: 'delete',
})

//Shipper Invoice
export const fetchShipperInvoices = () => loadSecureUrl(SHIPPER_INVOICE);

export const fetchShipperInvoice = id => loadSecureUrl(`${SHIPPER_INVOICE}${id}/`, {
    method: 'get',
})

//User Account Verification

export const verifyOTP = data => loadSecureUrl(VERIFY_OTP, {
    data: data,
    method: 'post',
})

export const resendOTP = () => loadSecureUrl(RESEND_OTP);
