import React, { Component } from 'react';
import moment from 'moment'
class Site extends Component {
  render() {
    return (
      <div style={{ margin: '50px', display: 'inline-flex' }}>
        <section className='px-1' >
          <div className='card' style={{ width: '22rem', height: '35rem' }}>
            <div className='view overlay'>
              <a href='#'>
                <img src='https://colorlib.com/wp/wp-content/uploads/sites/2/best-personal-website-builder.jpg'
                  className='img-fluid' alt='sample' />
                <div className='mask rgba-white-slight waves-effect waves-light'></div>
              </a>
            </div>
            <a className='btn-floating btn-action ml-auto mr-4 mdb-color lighten-3 waves-effect waves-light'>
              <i className='fas fa-chevron-right pl-1'></i>
            </a>
            {/* card content */}
            <div className="card-body text-center">
              {console.log(this.props.website)}
              <h4 className='card-title'>{this.props.website.title}</h4>
              <hr />
              <p className='font-small grey-dark-text mb-0'>
                {this.props.website.description}
              </p>
            </div>
            {/* card footer */}
            <div className='mdb-color lighten-3 text-center'>
              <ul className='list-unstyled list-inline font-small mt-3'>
                <li className='list-inline-item pr-2 white-text'>
                  <i className='far fa-clock pr-1'></i>
                  {moment(this.props.website.createdAt).fromNow()}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default Site;