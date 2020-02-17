import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { updateWebsite } from "../../store/actions/websites";

import "./site.css";
class Site extends Component {
  state = {
    title: this.props.website.title,
    description: this.props.website.description,
    contact: {
      email: this.props.website.contact.email,
      phoneNumber: this.props.website.contact.phoneNumber
    },
    img: this.props.website.img
  };

  onChangeTitle = e => {
    this.setState({ title: e.target.value });
  };
  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };
  onChangeEmail = e => {
    let email = e.target.value;
    this.setState(prevState => ({
      contact: { ...prevState.contact, email }
    }));
  };
  onChangePhone = e => {
    let phoneNumber = e.target.value;
    this.setState(prevState => ({
      contact: { ...prevState.contact, phoneNumber }
    }));
  };

  updateWebsiteHandler(e, id, website) {
    e.preventDefault();
    const data = { id: id, website: website };
    this.props.updateWebsite(data);
  }

  viewWebsite = (e, id) => {
    e.preventDefault();
  };

  render() {
    return (
      <div style={{ marginTop: "15px" }}>
        <section>
          <div className="img-container">
            <div className="card " style={{ width: "22rem", height: "30rem" }}>
              <a href="#">
                <img
                  src={this.props.website.img}
                  className="img-fluid henry-img"
                  alt="sample"
                />
              </a>
              {/* card content */}
              <div
                className="card-body text-center"
                style={{ marginBottom: "50px" }}
              >
                <h4 className="card-title" style={{ display: "block" }}>
                  {this.props.website.title}
                </h4>
                <hr />
                <p
                  className="font-small grey-dark-text mb-0"
                  style={{ top: "65%", position: "absolute" }}
                >
                  {this.props.website.description}
                </p>
              </div>
              {/* card footer */}
              <div className=" text-center">
                <ul className="list-unstyled ">
                  <li
                    className="white-text font-small"
                    style={{ top: "88%", position: "absolute", right: "1%" }}
                  >
                    <i className="far fa-clock pr-1"></i>
                    {moment(this.props.website.createdAt).fromNow()}
                  </li>
                </ul>
              </div>
            </div>
            <div className="overlay">
              <span className="span1">
                <Link
                  to={`/editor/${this.props.website._id}/`}
                  className="btn btn-view"
                  style={{ display: "block" }}
                // onClick={e => this.viewWebsite(e, this.props.website._id)}
                >
                  View
                </Link>
                <button
                  className="btn btn-edit "
                  data-toggle="modal"
                  data-target="#modalCart"
                  style={{ display: "block" }}
                >
                  Edit
                </button>
              </span>
            </div>
          </div>
        </section>
        {/* popup form */}
        <div
          className="modal fade"
          id="modalCart"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {/* <!--Header--> */}
              <div className="modal-header">
                <h4 className="modal-title" id="myModalLabel">
                  Edit
                </h4>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {/* <!--Body--> */}
              <div className="modal-body">
                <div className="md-form input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text md-addon"
                      style={{ backgroundColor: "#dadfe3" }}
                      id="inputGroupMaterial-sizing-default"
                    >
                      Website Name
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroupMaterial-sizing-default"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="md-form input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text md-addon"
                      style={{ backgroundColor: "#dadfe3" }}
                      id="inputGroupMaterial-sizing-default"
                    >
                      Email
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroupMaterial-sizing-default"
                    value={this.state.contact.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div className="md-form input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text md-addon"
                      style={{ backgroundColor: "#dadfe3" }}
                      id="inputGroupMaterial-sizing-default"
                    >
                      Phone Number
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroupMaterial-sizing-default"
                    value={this.state.contact.phoneNumber}
                    onChange={this.onChangePhone}
                  />
                </div>
                <div className="md-form input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text md-addon"
                      style={{ backgroundColor: "#dadfe3" }}
                      id="inputGroupMaterial-sizing-default"
                    >
                      Description
                    </span>
                  </div>
                  <textarea
                    className="md-textarea form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroupMaterial-sizing-default"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  ></textarea>
                </div>
              </div>
              {/* <!--Footer--> */}
              <div className="modal-footer  d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  class="btn btn-primary"
                  onClick={e =>
                    this.updateWebsiteHandler(
                      e,
                      this.props.website._id,
                      this.state
                    )
                  }
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  updateWebsite: data => dispatch(updateWebsite(data))
});

export default connect(null, mapDispatchToProps)(Site);
