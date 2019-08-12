import {lazy} from "react";
import {navToRoutes} from "../helpers/getRoutes";


const supplierNavigation = [
    {
        url: '/dashboard',
        component: lazy(() => import('../screens/supplier/dashboard')),
        name: 'Dashboard',
        icon: 'cui-dashboard',
        badge: {
            variant: 'info',
            text: 'NEW',
        },
    },
    {
        title: true,
        name: 'Orders Management',
        wrapper: {
            element: '',
            attributes: {},
        },


    },

    {

        name: 'Orders',
        url: '/shipper/myitems/',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'Upload',
                component: lazy(() => import('../screens/supplier/orderManagement/upload')),
                url: '/upload/',
                icon: 'icon-puzzle',
            },

            {
                name: 'All Orders',
                component: lazy(() => import('../screens/supplier/orderManagement/allOrders')),

                url: '/all-orders',
                icon: 'icon-puzzle',
            },

            {
                name: 'Orders on hold',
                component: lazy(() => import('../screens/supplier/orderManagement/holdOrders')),

                url: '/hold-orders',
                icon: 'icon-puzzle',
            },



            {
                name: 'Ready to Dispatch',
                component: lazy(() => import('../screens/supplier/orderManagement/rtdOrders')),

                url: '/rtd-orders',
                icon: 'icon-puzzle',
            },
            {
                name: 'Dispatched',
                component: lazy(() => import('../screens/supplier/orderManagement/dispatchedOrders')),

                url: '/dispatched-orders',
                icon: 'icon-puzzle',
            },

        ],
    },
];
const supplierRoutes = navToRoutes(supplierNavigation);


const shipperNavigation = [];
const shipperRoutes = navToRoutes(shipperNavigation);


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
