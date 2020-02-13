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
			<button style= {{backgroundColor: 'blue'}} onClick= {(e) => this.createElement(e, 'button')}>ok</button>,
			<button  onClick= {(e) => this.createElement(e, 'button')}>no</button>,
			<button type="button" className= 'btn btn-primary' onClick= {(e) => this.createElement(e, 'button')}>no</button>,
			<button type="button" className="btn btn-primary"  onClick= {(e) => this.createElement(e, 'button')}>Primary</button>,
			<button type="button" className="btn btn-secondary"  onClick= {(e) => this.createElement(e, 'button')}>Secondary</button>,
			<button type="button" className="btn btn-success"  onClick= {(e) => this.createElement(e, 'button')}>Success</button>,
			<button type="button" className="btn btn-danger"  onClick= {(e) => this.createElement(e, 'button')}>Danger</button>,
			<button type="button" className="btn btn-warning"  onClick= {(e) => this.createElement(e, 'button')}>Warning</button>,
			<button type="button" className="btn btn-info"  onClick= {(e) => this.createElement(e, 'button')}>Info</button>,
			<button type="button" className="btn btn-light"  onClick= {(e) => this.createElement(e, 'button')}>Light</button>,
			<button type="button" className="btn btn-dark"  onClick= {(e) => this.createElement(e, 'button')}>Dark</button>
		],
		'navbar': [
		<nav 
			style= {{width: '100%', backgroundColor: 'red'}}
			onClick= {(e) => this.createElement(e, 'navbar')}
		>
			{
				this.props.pages.map(page => <a href= '#'>{page.title}</a>)
			}
			
		  </nav>,
		  <nav 
		  style= {{width: '100%', backgroundColor: 'red'}}
		  onClick= {(e) => this.createElement(e, 'navbar')}
	    >
		  <a href= '#'>home</a>
		</nav>],
		'menu': [],
		'text': [
			<h1 onClick= {(e) => {this.createElement(e, 'text')}}>no</h1>
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
			<div className="" >                
				<div className="left-bar menu-collapsed-wrapper">
					<ul className="left-bar-items menu-collapsed">
								<ul className="left-bar-item bg-panel" onClick= {(e) => this.openSideMenu('navbar')}>
									<svg width="25" height="25" baseProfile="full" viewBox="0 0 25 25" className="symbol symbol-leftBarBackgroundPanel icon">
									<path d="M19.5 5.5v14h-14v-14h14m0-5h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5z"></path></svg>
									<span className="mask"></span>
									<span className="text">Navbar</span>
								</ul>
				
								<ul 
									className="left-bar-item first-panel pages-panel-pp"
									onClick= {(e) => this.openSideMenu('menu')}
								>
									<svg width="23" height="26" viewBox="0 0 22 26" className="symbol symbol-leftBarPagesPanelManager icon">
									<path fill-rule="evenodd" d="M17 0a5 5 0 0 1 5 5v16a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h12zm0 20V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM8 10V8h6v2H8zm0 4v-2h6v2H8zm0 4v-2h6v2H8z"></path></svg>
									<span className="mask"></span>
									<span className="text">Menus</span> 
								</ul>
								
								<ul className="left-bar-item bg-panel"
									onClick= {(e) => this.openSideMenu('button')}
								>
									<svg width="25" height="25" baseProfile="full" viewBox="0 0 25 25" className="symbol symbol-leftBarBackgroundPanel icon">
									<path d="M12.99 0C6.189 0 .51 5.678.51 12.479.51 19.28 6.189 25 12.99 25c6.8 0 12.5-5.699 12.5-12.5S19.79 0 12.99 0zm6.676 14h-5v5h-3v-5h-5v-3h5V6h3v5h5v3z"></path></svg>
									<span className="mask"></span>
									<span className="text">Button</span>
								</ul>

								<ul className="left-bar-item add-panel"
										onClick= {(e) => this.openSideMenu('text')}
								>
									<svg width="24" height="23" baseProfile="full" viewBox="0 0 21 25" class="symbol symbol-leftBarAddPanel icon">
									<path  d="M13.5 2h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5M13.662 4H4.338a.5.5 0 0 0-.464.314L.001 14l8 16h.5V16.929a1.997 1.997 0 0 1 .06-3.882A2.002 2.002 0 0 1 11.002 15c0 .931-.64 1.706-1.5 1.929V30h.5l8-16-3.878-9.686A.5.5 0 0 0 13.663 4"></path></svg>
									<span class="mask"></span>
									<span class="text">Text</span>
								</ul>
						</ul>
						{
				this.state.display 
				&& <ul className="sideMenu-list">
					{
						this.state.elements.map((element)=> <li className="sideMenu-list-item">{element}</li>	)
					}
				</ul>
				}  
				</div>
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
