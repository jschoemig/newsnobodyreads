import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
//import  Icon from './happinessicon.jpg';



class NavBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {inputValue: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
    
     handleChange(e){            //function to handle state change of input value as soon as something is typed in the the input window
        this.setState(
        {inputValue: e.target.value}
        );
    }
    
    handleSubmit(){
        this.props.loadNews(this.state.inputValue);  //takes in inputValue and sends it to addTodo function in TodoList -> can access it via passed props (from parent to child!)
        
    }
    
    handleEnter = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        this.props.loadNews(this.state.inputValue); 
    }
  }

  render(){
    const iconStyle = {textDecoration: 'none',border: '1px solid black', color: 'black', padding:'2px'};
    const defaultStyle = {textDecoration: 'none', color:'black'};
    
    return(
        <div className="navbar">
            <nav>
                <li><NavLink to="/" style={iconStyle} > nnr.com </NavLink></li>
                <li><NavLink to="/" style={defaultStyle}> NewsNobodyReads.com </NavLink></li>
            </nav>
            <form className="form">
				<input type="text" className="form-control" placeholder="Search" 
                    value={this.state.inputValue}
                    onChange = {this.handleChange}
                    onKeyPress={this.handleEnter}/>
				<button type="button" className="btn" onClick = {this.handleSubmit} >
				    <span className="fa fa-search"></span>
				</button>
			</form>
        </div>
    );
  }
}


export default NavBar;