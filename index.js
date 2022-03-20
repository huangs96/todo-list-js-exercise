function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    //changed newTask to be ann object to clear the arrays

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }, //logged state is now a "method" within the task object

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task; //completing the task
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
console.log(tasks);

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
