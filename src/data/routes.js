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
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        class: 'text-uppercase',             // (v2.5.1 up) optional
        attributes: { class: 'bg-success' }, // (v2.5.1 up) optional valid JS object with JS API naming,
        component: lazy(() => import('../screens/supplier/iconTest')),
        children: [
            {
                name: 'Flags',     // item options apply
                url: '/icons/flags',
                icon: 'icon-star',
                component: lazy(() => import('../screens/supplier/iconTest')),
                badge: {
                    variant: 'success',
                    text: 'NEW'
                }
            },
        ]
    }
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
