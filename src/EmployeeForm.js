import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
     data : [],
     displayData : false
    }
    this.ShowEmployeeData = this.ShowEmployeeData.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    this.setState((prevState) => ({data: [...prevState.data, formData]}), ()=>{ Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );})
  }

  ShowEmployeeData(){
    this.setState({displayData : true})
  }

render(){
  return (
    <div className="app">
      <h1>EMPLOYEE FORM</h1>

      <form className="eForm" onSubmit={(e)=>{this.handleSubmit(e)}}>
        <table className="fields">
          <tbody>
              <tr>
                <td><label for="name">Name : </label></td>
                <td><input ref="name" type='text' id="name" required/></td>
              </tr>
              <tr>
                <td><label for="designation">Designation : </label></td>
                <td> <input ref="designation" type='text' id="designation" required/></td>
              </tr>
              <tr>
                <td><label for="phone" >Contact Number : </label></td>
                <td><input ref="phone" type="tel" id="phone" placeholder="Enter 10 digit number" pattern="^\d{10}$" required/></td>
              </tr>
              <tr>
                <td><label for="skills">Skills : </label></td>
                <td> <input ref="skills" type='text' id="skills" required/></td>
              </tr>
              <tr>
                <td><label for="dob">Date of Birth : </label></td>
                <td><input ref="dob" type='date' id="dob" required/></td>
              </tr>
          </tbody>
        </table>
        <button type="submit" className="button">Add Employee</button>
      </form>

      <button type="button" onClick={this.ShowEmployeeData} className="button">View Data</button>

      <div className="printBlock">
        {this.state.displayData && this.state.data.map((item, index) => (
           <div>
              <table className="fields">
           <tbody>
               <tr>
                 <td>Employee : </td>
                 <td>{index + 1}</td>
               </tr>
               <tr>
                 <td>Name :</td>
                 <td>{item.name}</td>
               </tr>
               <tr>
                 <td>Designation :</td>
                 <td>{item.designation}</td>
               </tr>
               <tr>
                 <td>Phone :</td>
                 <td>{item.phone}</td>
               </tr>
               <tr>
                 <td>Skills :</td>
                 <td>{item.skills}</td>
               </tr>
               <tr>
                 <td>DOB :</td>
                 <td>{item.dob}</td>
               </tr>
           </tbody>
         </table>   
        </div>
        ))}
      </div>

      <button className="button"> 
        <a className="downloadLink" href={`data:application/json,${JSON.stringify(this.state.data,null,2)}`} download="employeeData.json">
          Download JSON
        </a>
      </button>

    </div>
  );
}
}

export default EmployeeForm;
