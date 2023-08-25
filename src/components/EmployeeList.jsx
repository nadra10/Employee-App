import EmployeeListItem from "./EmployeeListItem";
import "./employeeList.css";

export default function EmployeeList({ handleUserClick }) {
  const employeeObjectList = [
    { name: "James King", title: "President and CEO" },
    { name: "Julie Taylor", title: "Security Analyst" },
    { name: "Eugene Lee", title: "Help Desk" },
    { name: "John Williams", title: "Head Of Sales" },
    { name: "Ray Moore", title: "Software Engineer" },
  ];

  return (
    <div className='employeelist'>
      {employeeObjectList.map((item) => {
        return (
          <EmployeeListItem
            handleUserClick={handleUserClick}
            employeeName={item.name}
            employeeTitle={item.title}
          />
        );
      })}
    </div>
  );
}