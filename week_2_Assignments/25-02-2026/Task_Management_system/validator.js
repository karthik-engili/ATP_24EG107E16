
// TODO: Export these validation functions

// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  // Your code here
  if (!title) {
    return "Title required";
  }
  if (title.length <= 3) {
    return "Min 3 char required";
  }
  return true;
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    if(priority=="low"  || priority=="medium" || priority=="high"){
        return true;
    }else{
        return false;
    }
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {     // DATE FORMAT = 'YYYY-MM-DD'   dueDate=new Date('    ')
    dueDate= new Date('2026-12-06')
    date=new Date()
    if(date<dueDate){                // date=new Date();  returns todays date
        return true;
    }else{
        return  false;
    }
}

export{validateTitle,validatePriority,validateDueDate};