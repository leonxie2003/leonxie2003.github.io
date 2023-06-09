const crabImg = document.querySelector("img")

crabImg.onclick = () => {
    let crabSrc = crabImg.getAttribute("src")
    if (crabSrc === "images/crab.png") {
        crabSrc = "images/crab2.png"
    } else if (crabSrc === "images/crab2.png") {
        crabSrc = "images/crab.png"
    }
    crabImg.setAttribute("src", crabSrc)
}

let btn = document.querySelector("button")
let hdng = document.querySelector("h2")

function setUserName() {
    const name = prompt("Please enter your name.")
    if (!name) {
        setUserName()
    } else {
        localStorage.setItem("name", name)
        hdng.textContent = `Welcome, ${name}.`
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const name = localStorage.getItem("name")
    hdng.textContent = `Welcome, ${name}.`
}

btn.onclick = () => {
    console.log("clicked")
    setUserName()
}