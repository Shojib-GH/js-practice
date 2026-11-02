console.log("JS is connected!");

const title = document.querySelector("#title");
const btn = document.querySelector("#btn");
let count = 0;
btn.addEventListener("click", () => {
  count++;
  title.textContent = `You clicked the button ${count} times! :0`;
});
