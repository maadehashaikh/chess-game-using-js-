//Selecting all .files divs
const arrayofFiles = document.querySelectorAll(".files");
const filesNameArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

//counter for files array
let fileNumber = 0;

for (const i of arrayofFiles) {
  //counter variables of ranks (row)
  let counter = 1;
  for (const j of i.children) {
    j.setAttribute("id", filesNameArray[fileNumber] + counter);
    console.log(j);
    counter++;
  }
  fileNumber++;
}
