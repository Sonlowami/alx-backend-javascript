export default function createReportObject(employeesList) {
  const staff = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return staff;
}
