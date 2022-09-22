    //Super Class
    class Employee {
        constructor(name, age, annualSalary) {
        //This will be inherited by  partime and full time
        this.name = name;
        this.age = age;
        this.annualSalary = annualSalary;
        console.log("Employee Created");
        }
    }
    
    //contain properties only for a part time employee
    //this class should only have three properties: payRate, hours, and employee Type
    class PartTime extends Employee {
        constructor(name, age, payRate, hours) {
        super(name, age);
        this.payRate = payRate;
        this.hours = hours;
    
        this.calculatePay();
        }
    
        calculatePay() {
        //based on employee input for workweek. <40 hours.
    
        const annualSalary = this.hours * this.payRate * 52;
        this.annualSalary = annualSalary;
        }
    }
    
    //contain properties only for a full time emplyee
    //two properties: payRate and employee Type
    class FullTime extends Employee {
        constructor(name, age, payRate, hours) {
        super(name, age);
        this.payRate = payRate;
        this.hours = hours;
    
        this.calculatePay();
        }
    
        calculatePay() {
        //Calculate annual pay based on 52 weeks. assign to annualSalary. 40 hour workweek
        //include $1000 deduction in annual pay
        const annualSalary = this.hours * this.payRate * 52 - 1000;
        this.annualSalary = annualSalary;
        }
    }
    
    class Main {
        constructor() {
        this.selectInput();
        this.removeEmployee();
        this.employees = [];
        document.querySelector("#addbtn").addEventListener("click", (e) => this.onAdd(e));



        
    
        this.employees.push(new FullTime("Mark", 23, 40, 80));
        this.employees.push(new FullTime("Jason", 30, 50, 70));
        this.employees.push(new FullTime("Sarah", 30, 50, 50));
    
        for (let employee of this.employees) {
            this.addRow(employee);
        }
    
        console.log(this.employees);
        this.removeEmployee("Jason");
        console.log(this.employees);
        }
    
        //Add employee
        onAdd(e) {
        e.preventDefault();
        let employee;
        if(document.querySelector("#name").checkValidity() &&
        document.querySelector("#age").checkValidity() &&
        document.querySelector("#rate").checkValidity() &&
        document.querySelector("#hours").checkValidity()){

        
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const rate = document.getElementById("rate").value;
        const hours = document.getElementById("hours").value;
    
        if (hours >= 40) {
            employee = new FullTime(name, age, rate, hours);
        } else {
            employee = new PartTime(name, age, rate, hours);
        }
    
        this.employees.push(employee);
        this.addRow(employee);
        Utility.clearForm();

        }
        }
        //
        addRow(employee) {
        const { name, age, payRate, hours, annualSalary } = employee;
        console.log(employee);
    
        var table = document.getElementById("table");
        var row = table.insertRow(1);
        var nameCell = row.insertCell(0);
        var ageCell = row.insertCell(1);
        var rateCell = row.insertCell(2);
        var hoursCell = row.insertCell(3);
        var salaryCell = row.insertCell(4);
    
        rateCell.contentEditable = true;
    
        nameCell.innerHTML = name;
        ageCell.innerHTML = age;
        rateCell.innerHTML = payRate;
        hoursCell.innerHTML = hours;
        salaryCell.innerHTML = annualSalary;
        
        }


        //Display
        selectInput() {
            let rIndex, table = document.getElementById("table");
            for (let i=0; i<table.rows.length; i++) {
                table.rows[i].onClick = function(){
                    rIndex = this.rowIndex;
                    console.log(rIndex);
                }
            }
        }

    //remove employee
    //Click on person name to remove
    removeEmployee(){
    let index, table = document.getElementById("table");
    for (let i=1; i<table.rows.length; i++)
    {
        table.rows[i].cells[0].onclick = function()
        {
            let c = confirm("Do you want to delete this row?");
            if(c===true){
                index = this.parentElement.rowIndex;
                table.deleteRow(index);
                console.log(index);     
            }
        }
    }
    }


        //remove employee
        /* removeEmployee(name) {
        var table = document.getElementById("table");
        console.log(table.rows.length);
    
        for (let i = 1; i <= table.rows.length; i++) {
            table.deleteRow(i);
        }
        console.log(table.rows.length);
        const newEmployees = this.employees.filter(
            (employee) => employee.name !== name);
        this.employees = newEmployees;
    
        for (let employee of this.employees) {
            this.addRow(employee);
        }
        } */



        //edit
        editPayRate(e){
            let rIndex, table = document.getElementById("table");

            let pRate = document.getElementById("rate").value;
            table.rows[rIndex].cells[0].innerHTML = pRate;
        }
    }
    

    (() => {
        const main = new Main();
    })();
    