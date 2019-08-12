import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
    AppAside,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppBreadcrumb2 as AppBreadcrumb,
    AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

import {connect} from "react-redux";

const DefaultHeader = React.lazy(() => import('../../components/dashboard/header'));
const DefaultAside = React.lazy(() => import('../../components/dashboard/aside'));
const DefaultFooter = React.lazy(() => import('../../components/dashboard/footer'));
const NotFound404Screen = lazy(() => import('../notFound404'));

class DefaultLayout extends Component {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;


    signOut(e) {
        e.preventDefault();
        this.props.history.push('/login')
    }

    render() {
        const {routes, navigation} = this.props;
        console.log(routes);

        return (
            <BrowserRouter basename={"/#/dashboard"}>
                <div className="app">
                    <AppHeader fixed>
                        <Suspense  fallback={this.loading()}>
                            <DefaultHeader onLogout={e=>this.signOut(e)}/>
                        </Suspense>
                    </AppHeader>
                    <div className="app-body">
                        <AppSidebar fixed display="lg">
                            <AppSidebarHeader />
                            <AppSidebarForm />
                            <Suspense>
                                <AppSidebarNav navConfig={{items: navigation}} {...this.props} router={router}/>
                                {/*<AppSidebarNav navConfig={{items: []}} {...this.props} router={router}/>*/}
                            </Suspense>
                            <AppSidebarFooter />
                            <AppSidebarMinimizer />
                        </AppSidebar>
                        <main className="main">
                            <AppBreadcrumb appRoutes={routes} router={router}/>
                            <Container fluid>
                                <Suspense fallback={this.loading()}>
                                    <Switch>
                                        {routes.map((route, idx) => {
                                            return route.component ? (
                                                <Route
                                                    key={idx}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    name={route.name}
                                                    render={props => (
                                                        <route.component {...props} />
                                                    )} />
                                            ) : (null);
                                        })}
                                        <Redirect from="/" to="/dashboard" />
                                        <Route component={NotFound404Screen} />
                                    </Switch>
                                </Suspense>
                            </Container>
                        </main>
                        <AppAside fixed>
                            <Suspense fallback={this.loading()}>
                                <DefaultAside />
                            </Suspense>
                        </AppAside>
                    </div>
                    <AppFooter>
                        <Suspense fallback={this.loading()}>
                            <DefaultFooter />
                        </Suspense>
                    </AppFooter>
                </div>
            </BrowserRouter>
        );
    }
}

const DashboardWithRouter = router.withRouter(DefaultLayout);

const mapStateToProps = (state) => ({
    routes: state.navigation.routes,
    navigation: state.navigation.navs
});

export default connect(mapStateToProps)(DashboardWithRouter);
