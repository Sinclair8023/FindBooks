import React, { PropTypes } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

import SlideMenu from '../components/SlideMenu'

class NavigationDrawer extends React.Component {
  constructor(props){
    super(props)

  }
  static defultProps={
    open:false
  };
  static propTypes = {
      navigationState: PropTypes.object,
  };
  render() {
    const state = this.props.navigationState;
    const open = this.props.open;
    const children = state.children;
    return (
      <Drawer
        ref="navigation"
        type="displace"
        open={open}
        onOpen={() => Actions.refresh({ key: state.key, open: true })}
        onClose={() => Actions.refresh({ key: state.key, open: false })}
        content={<SlideMenu />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}


export default NavigationDrawer;
