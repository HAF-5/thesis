import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setMenuElementDispatcher } from "./../../store/actions/sideMenu";
import { addElement } from "./../../store/actions/elements";

import { elementsData } from "./../../sideMenuElementsData";

import "./sideMenu.css";

class sideMenu extends Component {
	
	state = {
		display: false,
		elements: []
	}
	elements = {
		'button': [
			[<button type="button" className="btn btn-outline-primary"  onClick= {(e) => this.createElement(e, 'button')}>Primary</button>,
			<button type="button" className="btn btn-outline-secondary"  onClick= {(e) => this.createElement(e, 'button')}>Secondary</button>,
			<button type="button" className="btn btn-outline-success"  onClick= {(e) => this.createElement(e, 'button')}>Success</button>,
			<button type="button" className="btn btn-outline-danger"  onClick= {(e) => this.createElement(e, 'button')}>Danger</button>,
			<button type="button" className="btn btn-outline-warning"  onClick= {(e) => this.createElement(e, 'button')}>Warning</button>,
			<button type="button" className="btn btn-outline-info"  onClick= {(e) => this.createElement(e, 'button')}>Info</button>,
			<button type="button" className="btn btn-outline-light"  onClick= {(e) => this.createElement(e, 'button')}>Light</button>,
			<button type="button" className="btn btn-outline-dark"  onClick= {(e) => this.createElement(e, 'button')}>Dark</button>],
			[<button type="button" className="btn btn-ghost-primary"  onClick= {(e) => this.createElement(e, 'button')}>Primary</button>,
			<button type="button" className="btn btn-ghost-secondary"  onClick= {(e) => this.createElement(e, 'button')}>Secondary</button>,
			<button type="button" className="btn btn-ghost-success"  onClick= {(e) => this.createElement(e, 'button')}>Success</button>,
			<button type="button" className="btn btn-ghost-danger"  onClick= {(e) => this.createElement(e, 'button')}>Danger</button>,
			<button type="button" className="btn btn-ghost-warning"  onClick= {(e) => this.createElement(e, 'button')}>Warning</button>,
			<button type="button" className="btn btn-ghost-info"  onClick= {(e) => this.createElement(e, 'button')}>Info</button>,
			<button type="button" className="btn btn-ghost-light"  onClick= {(e) => this.createElement(e, 'button')}>Light</button>,
			<button type="button" className="btn btn-ghost-dark"  onClick= {(e) => this.createElement(e, 'button')}>Dark</button>],
			[<button type="button" className="btn btn-primary radius" onClick= {(e) => this.createElement(e, 'button')}>Primary</button>,
			<button type="button" className="btn btn-secondary radius"  onClick= {(e) => this.createElement(e, 'button')}>Secondary</button>,
			<button type="button" className="btn btn-success radius"  onClick= {(e) => this.createElement(e, 'button')}>Success</button>,
			<button type="button" className="btn btn-danger radius"  onClick= {(e) => this.createElement(e, 'button')}>Danger</button>,
			<button type="button" className="btn btn-warning radius"  onClick= {(e) => this.createElement(e, 'button')}>Warning</button>,
			<button type="button" className="btn btn-info radius"  onClick= {(e) => this.createElement(e, 'button')}>Info</button>,
			<button type="button" className="btn btn-light radius"  onClick= {(e) => this.createElement(e, 'button')}>Light</button>,
			<button type="button" className="btn btn-dark radius"  onClick= {(e) => this.createElement(e, 'button')}>Dark</button>],
			[<button type="button" className="btn btn-ghost-primary radius"  onClick= {(e) => this.createElement(e, 'button')}>Primary</button>,
			<button type="button" className="btn btn-ghost-secondary radius"  onClick= {(e) => this.createElement(e, 'button')}>Secondary</button>,
			<button type="button" className="btn btn-ghost-success radius"  onClick= {(e) => this.createElement(e, 'button')}>Success</button>,
			<button type="button" className="btn btn-ghost-danger radius"  onClick= {(e) => this.createElement(e, 'button')}>Danger</button>,
			<button type="button" className="btn btn-ghost-warning radius"  onClick= {(e) => this.createElement(e, 'button')}>Warning</button>,
			<button type="button" className="btn btn-ghost-info radius"  onClick= {(e) => this.createElement(e, 'button')}>Info</button>,
			<button type="button" className="btn btn-ghost-light radius"  onClick= {(e) => this.createElement(e, 'button')}>Light</button>,
			<button type="button" className="btn btn-ghost-dark radius"  onClick= {(e) => this.createElement(e, 'button')}>Dark</button>]],
		'navbar': [
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary" onClick= {(e) => this.createElement(e, 'navbar')} >
			<a className="navbar-brand" href="#">Navbar</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Features</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Pricing</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#"></a>
					</li>
				</ul>
			</div>
		</nav>,
		<nav className="navbar navbar-expand-lg navbar-light bg-dark " onClick= {(e) => this.createElement(e, 'navbar')}>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
			<ul className="navbar-nav">
				<li className="nav-item active">
					<a className="nav-link" href="#">Centered nav only <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Link</a>
				</li>
				
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
					<div className="dropdown-menu" aria-labelledby="dropdown10">
						<a className="dropdown-item" href="#">Action</a>
						<a className="dropdown-item" href="#">Another action</a>
						<a className="dropdown-item" href="#">Something else here</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>,
		<nav className="navbar navbar-expand-lg navbar-light bg-light" onClick= {(e) => this.createElement(e, 'navbar')}>
			<a className="navbar-brand" href="#">Navbar</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0" style={{display:"contents"}}>
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>,
		<nav class="navbar navbar-light bg-light" onClick= {(e) => this.createElement(e, 'navbar')}>
			<form class="form-inline">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</nav>
		],
		'section': [
		<section style= {{top: '57px'}} class="jumbotron" onClick= {(e) => this.createElement(e, 'section')}>
			<div class="container">
			<h1 >Album example</h1>
			<p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
			<p>
				<a href="" class="btn btn-primary my-2">Main call to action</a>
				<a href="" class="btn btn-secondary my-2">Secondary action</a>
			</p>
			</div>
		</section>,
		<section class="card" onClick= {(e) => this.createElement(e, 'section')}>
			<img class="card-img-top" src="https://advancepetproduct.com/wp-content/uploads/2019/04/no-image.png" style={{width:"100px"}} alt="Card image cap"/>
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
		</section>,
		<section onClick= {(e) => this.createElement(e, 'section')}>
			<div class="card-body">
				<h5 class="card-title">Special title treatment</h5>
				<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
		</section>,
		<section style= {{top: '495px'}} class="jumbotron" onClick= {(e) => this.createElement(e, 'section')}>
			<h1 class="display-4">Hello, world!</h1>
			<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<hr class="my-4"/>
			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			<p class="lead">
				<button class="btn btn-primary btn-lg">Learn more</button>
			</p>
		</section>,
		<section class="jumbotron jumbotron-fluid" onClick= {(e) => this.createElement(e, 'section')}>
			<div class="container">
				<h1 class="display-4">Fluid jumbotron</h1>
				<p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
			</div>
		</section>
	
		],
		'text': [
			<h1 class="display-1" onClick= {(e) => this.createElement(e, 'text')}>Display 1</h1>,
			<h2 class="display-2" onClick= {(e) => this.createElement(e, 'text')}>Display 2</h2>,
			<h1 class="display-3" onClick= {(e) => this.createElement(e, 'text')}>Display 3</h1>,
			<h2 class="display-4" onClick= {(e) => this.createElement(e, 'text')}>Display 4</h2>,
    	],
		'background': [
		[<div style={{backgroundColor:"#FFD954", color:"#FFD954", width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#E4B660", color:"#E4B660",  width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#F2AB39", color:"#F2AB39",  width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#69491A", color:"#69491A",  width:"50px", height:"50px"}}>color </div>],
		[<div style={{backgroundColor:"#D1EDE1", color:"#D1EDE1", width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#7BC5AE", color:"#7BC5AE",  width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#028C6A", color:"#028C6A",  width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#003E19", color:"#003E19",  width:"50px", height:"50px"}}>color </div>],
		[<div style={{backgroundColor:"#D1DDDB", color:"#D1DDDB", width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#85B8CB", color:"#85B8CB",  width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#1D6A96", color:"#1D6A96",  width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#283B42", color:"#283B42",  width:"50px", height:"50px"}}>color </div>],
		[<div style={{backgroundColor:"#D5D2C1", color:"#D5D2C1", width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#BD8E62", color:"#BD8E62",  width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#A46843", color:"#A46843",  width:"50px", height:"50px"}}>color </div>,
		<div style={{backgroundColor:"#370D00", color:"#370D00",  width:"50px", height:"50px"}}>color </div>]
		]
	}

	createElement = (e, type) => {
		this.props.createElement(e, type)
		this.closeSideMenu();
	}
	componentDidMount() {
	}

	openSideMenu = (type) => {
		this.setState(()=>({display: true}));
		document.getElementById('editor').addEventListener('click', this.closeSideMenu);
		this.setState(()=>({elements: this.elements[type]}))
	}

	closeSideMenu = (e) => {
		this.setState(()=>({display: false}));
		document.removeEventListener('click', this.closeSideMenu)

	}

	render() {
		return (	               
			<div className="left-bar menu-collapsed-wrapper">
				<ul className="left-bar-items menu-collapsed">
          <ul className="left-bar-item bg-panel" 
          onClick= {(e) => this.openSideMenu('navbar')}>
						<svg width="23" height="26" viewBox="0 0 22 26" className="symbol symbol-leftBarPagesPanelManager icon">
            <path fillRule="evenodd" d="M17 0a5 5 0 0 1 5 5v16a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h12zm0 20V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM8 10V8h6v2H8zm0 4v-2h6v2H8zm0 4v-2h6v2H8z"></path></svg>
            <span className="mask"></span>
          <span className="text">Navbar</span>
        </ul>

          <ul className="left-bar-item  pages-panel-pp"
            onClick= {(e) => this.openSideMenu('section')}
          >
						<svg width="25" height="25" baseProfile="full" viewBox="0 0 25 25" className="symbol symbol-leftBarBackgroundPanel icon">
						<path d="M19.5 5.5v14h-14v-14h14m0-5h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5z"></path></svg>
						<span className="mask"></span>            
            <span className="text">Sections</span> 
          </ul>
          
          <ul className="left-bar-item bg-panel"
            onClick= {(e) => this.openSideMenu('button')}
          >
            <svg width="25" height="25" baseProfile="full" viewBox="0 0 25 25" className="symbol symbol-leftBarBackgroundPanel icon">
            <path d="M12.99 0C6.189 0 .51 5.678.51 12.479.51 19.28 6.189 25 12.99 25c6.8 0 12.5-5.699 12.5-12.5S19.79 0 12.99 0zm6.676 14h-5v5h-3v-5h-5v-3h5V6h3v5h5v3z"></path></svg>
            <span className="mask"></span>
            <span className="text">Button</span>
          </ul>

          <ul className="left-bar-item add-panel text-style"
              onClick= {(e) => this.openSideMenu('text')}
          >
            <svg width="24" height="23" baseProfile="full" viewBox="0 0 21 25" className="symbol symbol-leftBarAddPanel icon">
            <path  d="M13.5 2h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5M13.662 4H4.338a.5.5 0 0 0-.464.314L.001 14l8 16h.5V16.929a1.997 1.997 0 0 1 .06-3.882A2.002 2.002 0 0 1 11.002 15c0 .931-.64 1.706-1.5 1.929V30h.5l8-16-3.878-9.686A.5.5 0 0 0 13.663 4"></path></svg>
            <span className="mask"></span>
            <span className="text">Text</span>
          </ul>
          
          <ul className="left-bar-item add-background"
            onClick= {(e) => this.openSideMenu('background')}>
						<svg width="75" height="89" baseProfile="full" viewBox="0 0 75 89" className="symbol symbol-leftBarButtonEarMiddle icon"></svg>
						<svg width="25" height="24" viewBox="0 0 25 24" className="symbol symbol-leftBarMediaPanelC icon">
						<path d="M21.5 21.003c.38 0 .62-.41.439-.75l-3.72-6.68a.991.991 0 0 0-1.74 0l-2.787 5.007a.3.3 0 0 1-.52.008l-.694-1.154a1.001 1.001 0 0 0-1.718-.001l-1.69 2.81a.501.501 0 0 0 .43.76h12zm-10-11c-.83 0-1.5.67-1.5 1.5 0 .82.67 1.5 1.5 1.5s1.5-.68 1.5-1.5c0-.83-.67-1.5-1.5-1.5zm10.5-3c1.66 0 3 1.34 3 3v11A3 3 0 0 1 22 24H9a3 3 0 0 1-3-2.997v-11c0-1.66 1.34-3 3-3h13zM20 4v1H9a5 5 0 0 0-5 5v7.003H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4.172a2 2 0 0 1 1.414.585L9 2h9a2 2 0 0 1 2 2z"></path></svg>
						<span className="mask"></span>
						<span className="text">Background</span>
					</ul>
				</ul>
				{
				this.state.display && 
				<ul className="sideMenu-list ">
					{
						this.state.elements.map((element)=> <li className="sideMenu-list-item">{element}</li>	)
					}
				</ul>
				}  	
			</div>	
		)
	}
}

const mapStateToProps = state => ({
  menuItems: state.sideMenuElements,
  pages: state.pages
});

const mapDispatchToProps = dispatch => ({
  setMenuElements: payload => dispatch(setMenuElementDispatcher(payload)),
  addElement: payload => dispatch(addElement(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(sideMenu);
