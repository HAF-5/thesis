import React, { Component } from 'react';
import moment from 'moment'
import './site.css'
class Site extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1,
      isShown: false
    }
  }


  render() {
    return (
      <div style={{ margin: '50px', display: 'inline-flex', height: '50px' }}>
        <section className='px-1' >
          <div style={{ opacity: this.state.opacity }} >
            <div className='card ' style={{ width: '22rem', height: '35rem' }} onMouseEnter={() => this.setState({ opacity: 0.1, isShown: true })
            } onMouseLeave={() => this.setState({ opacity: 1, isShown: false })
            }>
              <div className='view overlay'>
                {this.state.isShown &&
                  <button className='henry-edit' style={{ opacity: 1 }}>Edit</button>
                }
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
          </div>
        </section>
      </div >
    );
  }
}


export default Site;