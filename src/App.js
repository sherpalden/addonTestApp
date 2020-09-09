import React, {Component} from "react";
import "./App.css";
import Table from './components/Table';
import Navbar from './components/Navbar';
import MyDocument from './components/MyDocument';

class App extends Component  {
  	render() {
	  return (
	    <>
	    <Navbar />
	    <Table />
	    </>
	  );
  	}

}

export default App;
