/* Your Code Here */
function createEmployeeRecord (array) {
    const testEmployee= {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return testEmployee
}
 
function createEmployeeRecords (array) {
 return array.map(createEmployeeRecord)

}

function createTimeInEvent (dateStamp) {
   //When timestamps are needed, they will be provided as Strings in the form: 
   //"YYYY-MM-DD 800" or "YYYY-MM-DD 1800" e.g. "2018-01-01 2300"

   const [date, hour] =dateStamp.split (' ')
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }

  this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent (dateStamp) {
    const [date, hour] =dateStamp.split (' ')
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }

    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(date) {
    let hoursWorked = 0
    for (let i=0; i < this.timeInEvents.length; i++){
      if(this.timeInEvents[i].date === date){
         hoursWorked = (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) * .01
       break  
      }  
  }
  return hoursWorked
}

function wagesEarnedOnDate (date) {
    let payHour = 0
    let hoursWorked=0
    hoursWorked=hoursWorkedOnDate.call(this, date)
    payHour = (payHour + hoursWorked) * this.payPerHour
  
    return payHour
}

function  findEmployeeByFirstName (empArray, firstName) {
    return empArray.find (employee=>employee.firstName===firstName)
}

function  calculatePayroll (array){
    let payRoll=0
    for (let i = 0; i < array.length; i++) {
        payRoll = payRoll + allWagesFor.call(array[i])
    }   
   return payRoll
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

