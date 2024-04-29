let tbody = document.getElementById("tbody");
let page = 1;
let previous = document.getElementById("Previous");
let next = document.getElementById("Next");
let Department = document.getElementById("departments");
let Gender = document.getElementById("gender");
let Salary = document.getElementById("salary");
let PAGINATIONAPI = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`;
let DEFAULTAPI = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10`;

//  adding eventListeners to filter by department:
Department.addEventListener("change",filterByDepartment);

//  adding eventListeners to filter by gender:
Gender.addEventListener("change",filterByGender);

//  adding eventListeners to sort by salary:
Salary.addEventListener("change",findSortValue);

// adding eventListeners to previous and next buttons:
previous.addEventListener("click",function(){
    // console.log("prev");
    page--;
    handlePrevious(page)
   
})

next.addEventListener("click",function() {
    page++;
    handleNext(page);
})

// function to Previous button:
async function handlePrevious(pageNo) {
    if(pageNo === 1) {
        previous.disabled = true;
    }else if(pageNo < 10 ){
        next.disabled = false;
    }
        try {
            let res = await getData(`${PAGINATIONAPI}?page=${pageNo}&limit=10`);

            displayData(res.data);
           } catch (error) {
            console.log(error);
           }
}


async function handleNext(pageNo) {

    if(pageNo === 10) {
        next.disabled = true;
    }else if(pageNo > 1){
        previous.disabled = false;
    }
        try {
            let res = await getData(`${PAGINATIONAPI}?page=${pageNo}&limit=10`);
            displayData(res.data)
           } catch (error) {
            console.log(error);
           }
}


data();


async function getData(url) {
    try {
        let res = await fetch(url);
        let finalData = await res.json();
        return finalData;
    } catch (error) {
        console.log(error)
    }
}


async function data (){
    try {
        let data = await getData(DEFAULTAPI);
        let mainData = data.data;
        displayData(mainData);
    } catch (error) {
        console.log(error)
    }
}



function displayData(employeesData) {

    tbody.innerHTML = "";

    employeesData.forEach(({id,department,gender,name,salary}) => {

        let tablerow = document.createElement("tr");


        let tdSerial = document.createElement("td");
    tdSerial.textContent = id;


    let tdName = document.createElement("td");
    tdName.textContent = name;


    let tdGender = document.createElement("td");
    tdGender.textContent = gender;


    let tdDepartment = document.createElement("td");
    tdDepartment.textContent = department;


    let tdSalary = document.createElement("td");
    tdSalary.textContent = salary;


    tablerow.append(tdSerial,tdName,tdGender,tdDepartment,tdSalary);


    tbody.append(tablerow);

    });
}


async function filterByDepartment(){
    let departmentValue = Department.value;
    if(departmentValue === "all" || departmentValue === "" ) {
        try {

            let res = await getData(DEFAULTAPI);

            displayData(res.data);
        } catch (error) {
            console.log(error)
        }
    }else{
        try {

            let res = await getData(`${DEFAULTAPI}&filterBy=department&filterValue=${departmentValue}`);

            displayData(res.data);
        } catch (error) {
            console.log(error)
        }
    } 
}


async function filterByGender(){
    let genderValue = Gender.value;
    if(genderValue === "all" || genderValue === "" ) {
        try {

            let res = await getData(DEFAULTAPI);

            displayData(res.data);
        } catch (error) {
            console.log(error)
        }
    }else{
        try {

            let res = await getData(`${DEFAULTAPI}&filterBy=gender&filterValue=${genderValue}`);

            displayData(res.data);
        } catch (error) {
            console.log(error)
        }
    } 
}


function findSortValue () {
    let sortValue = Salary.value;

    if(sortValue === "desc") {
        sortDesc();
    }else if(sortValue === "asc"){
        sortAsc();
    }
}


async function sortAsc(){
        try {

            let res = await getData(`${DEFAULTAPI}&sort=salary&order=asc`);

            displayData(res.data);
        } catch (error) {
            console.log(error)
        }
    
}


async function sortDesc(){
    try {

        let res = await getData(`${DEFAULTAPI}&sort=salary&order=desc`);

        displayData(res.data);
    } catch (error) {
        console.log(error)
    }

}