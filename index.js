function saturdayFun(someActivity="roller-skate") {
    return `This Saturday, I want to ${someActivity}!`
  }
  
function mondayWork(workActivity = "go to the office"){
    return `This Monday, I will ${workActivity}.`
}

const wrapAdjective = function(style="%"){
    return function(adjective = "a dedicated programmer") {
        return `You are ${style}${adjective}${style}!`
    }
}