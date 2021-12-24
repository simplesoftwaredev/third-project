const target = document.getElementById("target");
let array = ["Freelancer", "Designer", "Developer"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement("span")
    target.appendChild(letter)


    letter.textContent = array[wordIndex][letterIndex]
    setTimeout(() => {
        letter.remove()
    }, 2000)
};

const loop = () => {
    setTimeout(() => {
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop()
        } else if (letterIndex < array[wordIndex].length) {
            createLetter()
            letterIndex++
            loop()
        } else {
            wordIndex++
            letterIndex = 0;
            setTimeout(() => {
                loop()
            }, 2000)
        }
    }, 50)
};
loop();

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLink = document.getElementsByClassName("nav-link")[0];

toggleButton.addEventListener("click", () => {
    navLink.classList.toggle("active")
    
})