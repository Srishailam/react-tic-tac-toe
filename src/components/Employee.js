import React, { useEffect, useState } from 'react'
const employeesData = [{
  id: 2,
  name: 'Abhishek (CTO)',
  reportees: [6] 
}, {
  id: 3,
  name: 'Abhiram (COO)',
  reportees: []
}, {
  id: 6,
  name: 'Abhimanyu (Engineering Manager)',
  reportees: [9] 
}, {
  id: 9,
  name: 'Abhinav (Senior Engineer)',
  reportees: []
}, {
  id: 10,
  name: 'Abhijeet (CEO)',
  reportees: [2, 3],
}];
const Chart = () => {

}
function Employee() {
  // const [employeesData, setEmployeesData] = useState([])

  const findCeo = (currentEmployee) => {
    const parentEmployee = employeesData.filter(emp => emp.reportees.indexOf(currentEmployee.id) > -1);
    if (parentEmployee && parentEmployee.length > 0){
        return findCeo(parentEmployee[0]);
    } else {
      return currentEmployee;
    }
  }

  // const Card = () => {
  //   return (

  //   )
  // }
  const traverse = (currentEmployee) => {
    const ceo = findCeo(currentEmployee);

    function logHeirarchy(currentEmployee){
      return (
        <ul>
          <li>
            <div className="card">{currentEmployee.name}</div>
          {currentEmployee.reportees.map( (emp, id) => {
            const employee = employeesData.filter( e => e.id === currentEmployee.reportees[id]);
            return logHeirarchy(employee[0])
          })}
          </li>
        </ul>
      )
    }
    return logHeirarchy(ceo);
  }

  return (
    <div className="container">
      <div className="org-tree">
      {traverse(employeesData[0])}
      </div>
    </div>
  )
}

export default Employee
