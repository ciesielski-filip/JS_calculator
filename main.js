const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "ac") {
            result.value = ""
        }
        else if (btn.id === "=") {
            if (result.value === "") {
                result.value = ""
            }
            else {
                result.value = eval(result.value)
            }
        }
        else {
            result.value += btn.id
        }
    })
})