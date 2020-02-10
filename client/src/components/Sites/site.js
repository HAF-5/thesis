import React, { Component } from "react";
import moment from "moment";
import "./site.css";
class Site extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="img-container">
            <div className="card " style={{ width: "22rem", height: "30rem" }}>
              <a href="#">
                <img
                  src="https://colorlib.com/wp/wp-content/uploads/sites/2/best-personal-website-builder.jpg"
                  className="img-fluid"
                  alt="sample"
                />
              </a>
              {/* card content */}
              <div
                className="card-body text-center"
                style={{ marginBottom: "50px" }}
              >
                {console.log(this.props.website)}
                <h4 className="card-title">{this.props.website.title}</h4>
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
                <button className="btn btn-view" style={{ display: "block" }}>
                  View
                </button>
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
                    defaultValue={this.props.website.title}
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
                    defaultValue={this.props.website.contact.email}
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
                    defaultValue={this.props.website.contact.phoneNumber}
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
                    defaultValue={this.props.website.description}
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
                <button class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Site;
