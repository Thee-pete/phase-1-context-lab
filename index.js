/* Your Code Here */


function createEmployeeRecord(employee){
    const employeeArray = {firstName: employee[0], familyName: employee[1],
         title:employee[2], payPerHour:employee[3],
          timeInEvents:[], timeOutEvents:[]}
    return employeeArray
}
function createEmployeeRecords(records){
    const employeeRecords = []
    records.forEach(record => {
        const employeeRecord = createEmployeeRecord(record)
        employeeRecords.push(employeeRecord)
    });
    return employeeRecords;


}
function createTimeInEvent(dateStamp) {
    const dateAndTime = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        date: dateAndTime[0],
        hour: parseInt(dateAndTime[1]),
    })
    return this;
}
function createTimeOutEvent(dateStamp) {
    const dateAndTime = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        date: dateAndTime[0],
        hour: parseInt(dateAndTime[1]),
    })
    return this;
}

function hoursWorkedOnDate( dateStr) {
    const timeIn = this.timeInEvents.find(record => record.date === dateStr)
    const timeOut = this.timeOutEvents.find(record => record.date === dateStr)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate( dateStr) {
    return hoursWorkedOnDate.call(this, dateStr) * this.payPerHour
}



function calculatePayroll(employeeRecordsArray){
    let sum = 0
    for (let i = 0; i < employeeRecordsArray.length; i++){
      sum = sum + allWagesFor.call(employeeRecordsArray[i])
    }
    return sum 
  }

  function findEmployeeByFirstName(srcArray, firstName) {
    let nameArray = []
      srcArray.forEach(employee => {
          if (employee.firstName === firstName) {
            nameArray.push(employee);     
            }
        })
  return nameArray[0];
  } 




/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

