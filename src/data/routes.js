import {lazy} from "react";
import {navToRoutes} from "../helpers/getRoutes";

const supplierNavigation = [];
const supplierRoutes = navToRoutes(supplierNavigation);

const shipperNavigation = [
    {
        url: '/dashboard',
        component: lazy(() => import('../screens/shipper/dashboard')),
        name: 'Dashboard',
        icon: 'cui-dashboard',
        badge: {
            variant: 'info',
            text: 'NEW',
        },
    },

    {
        name: 'Orders Management',
        url: '/orders',
        icon: 'icon-layers',
        component: lazy(() => import('../screens/shipper/orderManagement/allOrders')),
        children: [
            {
                name: 'All Orders',
                component: lazy(() => import('../screens/shipper/orderManagement/allOrders')),

                url: '/orders/all',
                icon: 'icon-list',
            },

            {
                name: 'Orders on hold',
                component: lazy(() => import('../screens/shipper/orderManagement/holdOrders')),

                url: '/orders/on-hold',
                icon: 'fa fa-pause-circle',
            },
            {
                name: 'Ready to Dispatch',
                component: lazy(() => import('../screens/shipper/orderManagement/rtdOrders')),

                url: '/orders/ready-to-dispatch',
                icon: 'fa fa-share',
            },
            {
                name: 'Dispatched',
                component: lazy(() => import('../screens/shipper/orderManagement/dispatchedOrders')),

                url: '/orders/dispatched',
                icon: 'fa fa-rocket',
            },
            {
                divider: true
            }
        ],
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
            },
            {
                name: 'Assigned Trucks',
                component: lazy(() => import('../screens/shipper/freightManagement/assignedTrucks')),
                url: '/freight/assigned-trucks',
                icon: 'fa fa-circle',
            },
            {
                name: 'Live Trucks',
                component: lazy(() => import('../screens/shipper/freightManagement/liveAvailableTrucks')),

                url: '/freight/live-available-trucks',
                icon: 'fa fa-road',
            },
            {
                divider: true
            }
        ],
    },
    {
        name: 'Auto-Dispatcher',
        url: '/dispatcher',
        icon: 'fa fa-compass',
        component: lazy(() => import('../screens/shipper/dispatcher')),
    },

    {
        name: 'Manual-Dispatcher',
        url: '/dispatcher',
        icon: 'fa fa-compass',
        component: lazy(() => import('../screens/shipper/dispatcher')),
    },
    {
        name: 'Shipping',
        url: '/shipping',
        icon: 'fa fa-compass',
        component: lazy(() => import('../screens/shipper/shipping/tracking')),
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
        path: '/supplier/profile/:id',
        component: lazy(() => import('../screens/supplier/profile')),
        name: 'Supplier Profile',
        exact: true
    },
];
const shipperRoutes = [...shipperExtraRoutes, ...navToRoutes(shipperNavigation)];

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
