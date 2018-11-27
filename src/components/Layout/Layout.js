import React from "react";
import Auxx from "../../hoc/Auxx";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosed = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawerToggle = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxx>
        <Toolbar drawerToggleClicked={this.sideDrawerToggle} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosed}
        />
        <main className="Content">{this.props.children}</main>
      </Auxx>
    );
  }
}

export default Layout;
