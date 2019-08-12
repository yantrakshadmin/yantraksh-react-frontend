export const navToRoutes = (navigation) => {
    let routes = [];
    navigation.map(item => {
        console.log('ITEM', item.url, item.component);

        routes.push({
            url: item.url,
            component: item.component,
            exact: true
        });

        if(item.children)
            routes.push(...navToRoutes(item.children));

        return []
    });

    return routes
};
