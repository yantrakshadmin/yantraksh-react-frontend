import React, { lazy } from "react";
import { navToRoutes } from "../helpers/getRoutes";
import { Redirect } from "react-router-dom";

const supplierNavigation = [
    {
        name: 'Available Loads',
        component: lazy(() => import('../screens/supplier/freightManagement/availableLoads')),
        url: '/freight/available-loads',
        icon: 'fa fa-archive',
    },
    {
        name: 'Active Trucks',
        component: lazy(() => import('../screens/supplier/freightManagement/activeTrucks')),
        url: '/freight/active-trucks',
        icon: 'fa fa-truck',
    }, {
        name: 'My Bids',
        component: lazy(() => import('../screens/supplier/freightManagement/myBids')),
        url: '/freight/my-bids',
        icon: 'fa fa-money',
    }, {
        name: 'Trips',
        component: lazy(() => import('../screens/supplier/freightManagement/trips')),
        url: '/freight/trips',
        icon: 'fa fa-suitcase',
    }, {
        name: 'Financial',
        component: lazy(() => import('../screens/supplier/freightManagement/financials')),
        url: '/freight/financial',
        icon: 'fa fa-clipboard',
    },
    {
        name: 'Feedback',
        url: '/feedback',
        icon: 'icon-feed',
        class: 'mt-auto',
        variant: 'success',
        attributes: { target: '_blank', rel: "noopener" },
        component: lazy(() => import('../screens/feedback')),
    },
];

const shipperNavigation = [
    {
        url: '/dashboard',
        component: lazy(() => import('../screens/shipper/dashboard')),
        name: 'Dashboard',
        icon: 'cui-dashboard',
        badge: {
            variant: 'info',

        },
    }, {
        name: 'Items Management',
        url: '/orders',
        icon: 'icon-layers',
        component: lazy(() => import('../screens/shipper/orderManagement/allOrders')),
        children: [
            {
                name: 'All Items',
                component: lazy(() => import('../screens/shipper/orderManagement/allOrders')),

                url: '/orders/all',
                icon: 'icon-list',
            }, {
                name: 'Items on hold',
                component: lazy(() => import('../screens/shipper/orderManagement/holdOrders')),

                url: '/orders/on-hold',
                icon: 'fa fa-pause-circle',
            }, {
                name: 'Ready to Dispatch',
                component: lazy(() => import('../screens/shipper/orderManagement/rtdOrders')),

                url: '/orders/ready-to-dispatch',
                icon: 'fa fa-play-circle',
            }, {
                name: 'Dispatched Items',
                component: lazy(() => import('../screens/shipper/orderManagement/dispatchedOrders')),

                url: '/orders/dispatched',
                icon: 'fa fa-rocket',
            }, {
                divider: true
            }
        ],
    },
    {
        name: 'Dispatch Plans',
        url: '/dispatcher',
        icon: 'fa fa-rocket',
        component: lazy(() => import('../screens/shipper/dispatchManagement/dispatcher')),
    },
    {
        name: 'Freight Exchange',
        url: '/freight',
        icon: 'fa fa-truck',

        children: [
            {
                name: 'RFQ',
                component: lazy(() => import('../screens/shipper/freightManagement/RFQ')),

                url: '/freight/request-for-quotation',
                icon: 'fa fa-money',
            }, {
                name: 'Assigned Trucks',
                component: lazy(() => import('../screens/shipper/freightManagement/assignedTrucks')),
                url: '/freight/assigned-trucks',
                icon: 'fa fa-circle',
            }, {
                name: 'Live Trucks',
                component: lazy(() => import('../screens/shipper/freightManagement/liveAvailableTrucks')),

                url: '/freight/live-available-trucks',
                icon: 'fa fa-road',
            }, {
                divider: true
            }
        ],
    }, {
        name: 'Shipping',
        url: '/shipping',
        icon: 'fa fa-compass',
        component: lazy(() => import('../screens/shipper/shipping/tracking')),
    },
    {
        name: 'Finance',
        url: '/finances',
        icon: 'fa fa-clipboard',
        component: lazy(() => import('../screens/shipper/finances/financials')),
    },

    {
        name: 'Reports & Analytics',
        url: '/reports',
        icon: 'fa fa-line-chart',
        component: lazy(() => import('../screens/shipper/reports/reportsHome')),
    },

    {
        name: 'Feedback',
        url: '/feedback',
        icon: 'icon-feed',
        class: 'mt-auto',
        variant: 'success',
        attributes: { target: '_blank', rel: "noopener" },
        component: lazy(() => import('../screens/feedback')),
    },
];
const reportPath = [
    {
        path: '/report-dispatcher-vs-lr',
        component: lazy(() => import('../screens/shipper/reports/analyticReports/dispatcherVsLr')),
        name: 'Dispatcher vs LR',
        exact: true
    },
    {
        path: '/report-tracking-vs-lr',
        component: lazy(() => import('../screens/shipper/reports/analyticReports/trackingVsLr')),
        name: 'Tracking Vs LR',
        exact: true
    },
    {
        path: '/report-tracking-vs-invoice',
        component: lazy(() => import('../screens/shipper/reports/analyticReports/trackingVsInvoice')),
        name: 'Tracking Vs Invoice',
        exact: true
    },
    {
        path: '/report-lr',
        component: lazy(() => import('../screens/shipper/reports/normalReports/lr')),
        name: 'LR',
        exact: true
    },
    {
        path: '/report-tracking',
        component: lazy(() => import('../screens/shipper/reports/normalReports/tracking')),
        name: 'Tracking',
        exact: true
    },
    {
        path: '/report-invoice',
        component: lazy(() => import('../screens/shipper/reports/normalReports/invoice')),
        name: 'Invoice',
        exact: true
    },
    {
        path: '/report-dispatcher',
        component: lazy(() => import('../screens/shipper/reports/normalReports/dispatcher')),
        name: 'Dispatcher',
        exact: true
    },
];
const shipperExtraRoutes = [
    {
        path: '/freight/request-for-quotation/bids/:id',
        component: lazy(() => import('../screens/shipper/freightManagement/bids')),
        name: 'View Bids',
        exact: true
    },
    {
        path: '/supplier/printinvoice/:id',
        component: lazy(() => import('../screens/supplier/forms/printInvoice')),
        name: 'Print Invoice',
        exact: true
    },
    {
        name: 'Manual-Dispatcher',
        path: '/manual-dispatcher',
        icon: 'fa fa-compass',
        component: lazy(() => import('../screens/shipper/dispatchManagement/manualDispatcher')),
    }, {
        path: '/supplier/profile/:id',
        component: lazy(() => import('../screens/supplier/profile')),
        name: 'Supplier Profile',
        exact: true
    }, {
        path: '/freight/request-for-quotation/new',
        component: lazy(() => import('../screens/shipper/forms/rfq')),
        name: 'New Request For Quotation',
        exact: true
    }, {
        path: '/freight/edit-profile/new',
        component: lazy(() => import('../screens/shipper/forms/editProfile')),
        name: 'Edit Profile',
        exact: true

    }, {
        path: '/edit-profile',
        component: lazy(() => import('../screens/shipper/forms/editProfile')),
        name: 'Edit Profile',
        exact: true
    }, {
        path: '/card',
        component: lazy(() => import('../screens/signInCard')),
        name: 'New Request For Quotation',
        exact: true
    },
    ...reportPath
];

const supplierExtraRoutes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => (<Redirect to={'/freight/available-loads'} />)
        // component:() => (<Redirect to={'/freight/available-loads'}/>)
    },
    {
        name: 'Bid Now',
        path: '/freight/bid-now/:id',
        component: lazy(() => import('../screens/supplier/forms/bidNow')),
        exact: true
    },
    {
        name: 'Post Truck',
        path: '/freight/post-truck/',
        component: lazy(() => import('../screens/supplier/forms/postTruck')),
        exact: true
    }, {
        path: '/freight/request-for-quotation/bids/:id',
        component: lazy(() => import('../screens/shipper/freightManagement/bids')),
        name: 'View Bids',
        exact: true
    }, {
        path: '/supplier/invoice/:id',
        component: lazy(() => import('../screens/supplier/forms/editInvoice')),
        name: 'Invoices',
        exact: true
    }, {
        path: '/supplier/printinvoice/:id',
        component: lazy(() => import('../screens/supplier/forms/printInvoice')),
        name: 'Print Invoice',
        exact: true
    }, {
        path: '/supplier/profile/:id',
        component: lazy(() => import('../screens/supplier/profile')),
        name: 'Supplier Profile',
        exact: true
    }, {
        path: '/freight/request-for-quotation/new',
        component: lazy(() => import('../screens/shipper/forms/rfq')),
        name: 'New Request For Quotation',
        exact: true
    }, {
        path: '/freight/edit-profile/new',
        component: lazy(() => import('../screens/supplier/forms/editProfile')),
        name: 'Edit Profile',
        exact: true
    }, {
        path: '/edit-profile',
        component: lazy(() => import('../screens/supplier/forms/editProfile')),
        name: 'Edit Profile',
        exact: true
    }, {
        path: '/freight/edit-lr/:id',
        component: lazy(() => import('../screens/supplier/forms/editLR')),
        name: 'Edit LR',
        exact: true
    }, {
        path: '/freight/print-lr/:id',
        component: lazy(() => import('../screens/supplier/forms/printLR')),
        name: 'Print LR',
        exact: true
    },
];

const shipperRoutes = [...shipperExtraRoutes, ...navToRoutes(shipperNavigation)];
const supplierRoutes = [...supplierExtraRoutes, ...navToRoutes(supplierNavigation)];


export const getNavigations = category => {
    switch (category) {
        case 'supplier':
            return supplierNavigation;
        case 'shipper':
            return shipperNavigation;
        default:
            return []
    }
};

export const getRoutes = category => {
    switch (category) {
        case 'supplier':
            return supplierRoutes;
        case 'shipper':
            return shipperRoutes;
        default:
            return []
    }
};
