import React, { Component } from "react";

class HorizontalForm extends Component {
	constructor(props){
		super(props);
	}

  	render() {
  		return(
  			<>
  			<div className="form-container">
  			<form className="record-Employee">
		        <input
			        className="form-control"
			        id="name"
			        name="name"
			        type="text"
			        value={this.props.employee.name}
			        onChange={this.props.handleInput}
			        placeholder="Name"
			     />
		        <input
			        className="form-control"
			        id="email"
			        name="email"
			        type="text"
			        value={this.props.employee.email}
			        onChange={this.props.handleInput}
			        placeholder="Email"
			     />
		        <input
			        className="form-control"
			        id="phone"
			        name="phone"
			        type="number"
			        value={this.props.employee.phone}
			        onChange={this.props.handleInput}
			        placeholder="Phone"
			     />
		        <button
		        	className="addEmpButton"
		          	onClick={this.props.handleFormSubmit}
		        >Add
		        </button>
	      	</form>
	      	</div>
  			</>
		);
  	}

}

export default HorizontalForm;