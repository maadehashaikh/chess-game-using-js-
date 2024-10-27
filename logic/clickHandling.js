const allsquares = document.getElementsByClassName("square");

for (const i of allsquares) {
  i.addEventListener("click", () => {
    const idOfElement = i.getAttribute("id");
    console.log(document.getElementById(idOfElement).innerHTML);
  });
}
