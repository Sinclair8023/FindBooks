/**
 * Created by Sinclair on 2017/4/12.
 */
import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Attention, Bookshelf, Home, NavigationDrawer,Login} from '../pages';
import TabBarIcon from '../components/TabBarIcon';
/**
 *d导航路由
 */
class Routes extends React.Component {
    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene key="tabbar" initial={true} component={NavigationDrawer} >
                    <Scene key="root" tabs leftTitle="left" rightTitle="right" >
                        <Scene key="home" component={Home} title="首页" drawerImage={require("../imgages/book.png")} leftButtonImage={require("../imgages/duration-time.png")}
                               icon={(props)=><TabBarIcon {...props} icon="home"/>}  />
                        <Scene key="attention" component={Attention} title="关注"
                               icon={(props)=><TabBarIcon {...props} icon="star"/>}/>
                        <Scene key="bookshelf" component={Bookshelf} title="书架"
                               icon={(props)=><TabBarIcon {...props} icon="book"/>}/>
                    </Scene>
                </Scene>
                <Scene key="login" component={Login}/>
            </Router>
        )
    }
}
// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 54;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};
export default Routes;