import React from "react";

export default function Employee({
  employeeInfo,
  deleteEmployee,
  initUpdateEmployee,
}) {
  const { id, name, salary, designation } = employeeInfo;

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{salary}</td>
        <td>{designation}</td>
        <td>
          <button
            className="btn btn-success  me-4"
            onClick={() => initUpdateEmployee(employeeInfo)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger "
            onClick={() => deleteEmployee(employeeInfo)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
