import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
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

// sidebar nav config
import navigation from './_nav';

// routes config
import routes from './_routes';

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

        console.log(this.props);

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
                                <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
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
                                        <Route component={NotFound404Screen} />
                                        {/*<Redirect from="/" to="/dashboard" />*/}
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

export default router.withRouter(DefaultLayout);
