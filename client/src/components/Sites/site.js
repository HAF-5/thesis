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
              <span>
                <button className="btn btn-view" style={{ display: "block" }}>
                  View
                </button>
                <button className="btn btn-edit " style={{ display: "block" }}>
                  Edit
                </button>
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Site;
