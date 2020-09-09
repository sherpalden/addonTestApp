import React, { Component } from "react";
import HorizontalForm from './HorizontalForm';

import MyDocument from './MyDocument';
import { PDFViewer } from '@react-pdf/renderer';

class Table extends Component {
   constructor(props) {
      super(props)  
      this.state = {
         employee: {
            name: '',
            email: '',
            phone: '',
         },
         employees: [],
         isPdfCLicked: false,
      }

      this.handleInput = this.handleInput.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleGeneratePdfClick = this.handleGeneratePdfClick.bind(this);
   }

   /*API call to the node server to get employee data*/
   componentDidMount() {
      fetch("http://localhost:3000/user/getEmployeeData", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
      }).then(response => {
         response.json().then(data => {
           this.setState({
              employees: data.EmpData,
           })
         });
      })
   }

   /*generates the PDFView on button click event. I have set the button to toggle its state
   on click*/
   handleGeneratePdfClick() {
      this.setState({
         isPdfCLicked: !this.state.isPdfCLicked,
      })
   }

   /*change event handler for input of employee data*/
   handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
       this.setState(
         prevState => ({
           employee: {
             ...prevState.employee,
             [name]: value
           }
         })
       );
   }

   /*on submission of form the employee data is posted to the database via node server*/
   handleFormSubmit() {
      let data = {
         name: this.state.employee.name,
         email: this.state.employee.email,
         phone: this.state.employee.phone,
      }
      if(data.name !== '' && data.email !== '' && data.phone !== ''){
        fetch("http://localhost:3000/user/addEmployee", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
        }).then(response => {
           response.json().then(data => {
             console.log(data.message);
           });
        })
      }
   }


   /*method to render table headers*/
   renderTableHeader() {
      return(
        <>
         <th> {"S.N."} </th>
         <th> {"Name"} </th>
         <th> {"Email"} </th>
         <th> {"Phone"} </th>
         <th> {"Action"} </th>
        </>
      )
   }

   /*method to render table data*/
   renderTableData() {
      return(
         this.state.employees.map((employee, index) => {
            const {name, email, phone} = employee //destructuring
            return (
               <tr key={index}>
                  <td style={{textAlign: "center"}}>{index+1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td style={{textAlign: "center"}}>
                     <button className="editButton">Edit</button>
                  </td>
               </tr>
            )
         })
      );
   }

   render() {
      return (
         <>
         <div className="mainTable">
            <HorizontalForm 
            employee = {this.state.employee}
            handleInput = {this.handleInput}
            handleFormSubmit = {this.handleFormSubmit}
            />
            <table className="employeeTable">
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
         <button id="generatePdf" onClick={this.handleGeneratePdfClick}>Generate Pdf</button>
         {this.state.isPdfCLicked?
          <PDFViewer 
          width="100%"
          height="1000"
          >
           <MyDocument data = {this.state.employees}/>
          </PDFViewer>:""
         }
         </>
      )
   }
}

export default Table; 