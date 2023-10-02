const EmpObj = {
    empList: [
        {
            empid: 10,
            empName: 'Sachin',
            empSalary: 1000,
        },
        {
            empid: 20,
            empName: 'Virat',
            empSalary: 2000,
        },
        {
            empid: 30,
            empName: 'Laxman',
            empSalary: 3000,
        }
        
    ],
    getAllEmps: function(){
        return this.empList
    },

    getEmp: function(id){
        let emp = this.empList.find(emp=> emp.empid === id)
        return emp
    }
}

export default EmpObj