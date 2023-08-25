import "./employeeListItem.css";

export default function EmployeeListItem({
  employeeName,
  employeeTitle,
  handleUserClick,
}) {
  return (
    <div
      onClick={() => {
        handleUserClick({ name: employeeName, title: employeeTitle });
      }}
      className='employeelistitem'
    >
      <img></img>
      <h3>{employeeName}</h3>
      <p>{employeeTitle}</p>
    </div>
  );
}