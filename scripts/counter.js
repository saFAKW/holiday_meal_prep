function giveFunctionToButton(){
    let count = 0;
    const button = document.getElementById("btn");
    const display = document.getElementById("count");
    button.addEventListener("click", () => {
      count++;
      display.textContent = count;
    });
}

export {giveFunctionToButton}