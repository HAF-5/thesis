import React, { Component } from "react";
import { connect } from "react-redux";
import Site from "../Sites/site";
import Dashboard from "../Dashboard/Dahboard";
class DashboardWebsite extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Dashboard />
        <div style={{ display: "flex", flexWrap: "wrap", width: "75vw", justifyContent: "space-around" }}>
          {this.props.websites.map(website => (
            <Site website={website} key={website._id} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  websites: state.websites
});
export default connect(mapStateToProps)(DashboardWebsite);
