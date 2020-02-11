import React, { Component } from "react";
import { connect } from "react-redux";
import Site from "../Sites/site";
class DashboardWebsite extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "inline-flex" }}>
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
