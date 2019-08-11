export default {
    items: [

        {
            name: 'Dashboard',
            url: '',
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
                    url: '/shipper/upload/',
                    icon: 'icon-puzzle',
                },

                {
                    name: 'All Orders',
                    url: '/base/all-orders',
                    icon: 'icon-puzzle',
                },

                {
                    name: 'Orders on hold',
                    url: '/base/hold-orders',
                    icon: 'icon-puzzle',
                },

                {
                    name: 'Ready to Dispatch',
                    url: '/base/rtd-orders',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Dispatched',
                    url: '/base/dispatched-orders',
                    icon: 'icon-puzzle',
                },

            ],
        },



        {
            title: true,
            name: 'Dispatch Management',
            wrapper: {
                element: '',
                attributes: {},
            },


        },

        {
            name: 'Auto Dispatcher',
            url: '/base/dispatcher',
            icon: 'fa fa-truck',
            badge: {
                variant: 'info',
                text: 'PRO',
            },
        },
        {
            name: 'Manual Dispatcher',
            url: '/shipper/history/',
            icon: 'fa fa-truck',
            badge: {
                variant: 'info',
            },
        },


        {
            title: true,
            name: 'Freight Management',
            wrapper: {
                element: '',
                attributes: {},
            },


        },
        {
            name: 'Freight Management',
            url: '/theme/colors',
            icon: 'fa fa-paper-plane',
            children: [

                {
                    name: 'RFQ',
                    url: '/base/RFQ',
                    icon: 'fa fa-paper-plane',
                },

                {
                    name: 'Trucks Assigned',
                    url: '/base/assigned_trucks',
                    icon: 'fa fa-paper-plane',
                },


                {
                    name: 'Live Available Trucks',
                    url: '/base/live_available_trucks',
                    icon: 'fa fa-paper-plane',
                }

            ],
        },
        {
            title: true,
            name: 'Finances',
            wrapper: {
                element: '',
                attributes: {},
            },


        },
        {
            name: 'Financial',
            url: '/base/orders',
            icon: 'icon-cursor',

        },



        {
            name: 'Feedback',
            url: '/base/orders',
            icon: 'fa fa-comments',
            class: 'mt-auto',
            variant: 'success',
            attributes: { target: '_blank', rel: "noopener" },
        },

    ],
};
