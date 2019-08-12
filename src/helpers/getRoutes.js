export const navToRoutes = (navigation) => {
    let routes = [];
    navigation.map(item => {
        console.log('ITEM', item.url, item.component);

        routes.push({
            path: item.url,
            component: item.component,
            name: item.name,
            exact: true
        });

        if(item.children)
            routes.push(...navToRoutes(item.children));

        return []
    });

    return routes
};
