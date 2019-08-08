function enablePowers(event) {
    let selector = event.target.id.split("-")[1]
    let element = document.querySelector(`#${selector}`)
    element.classList.remove("disabled")
    element.classList.add("enabled")
}
document.querySelector("#activate-flight").addEventListener("click", enablePowers)
document.querySelector("#activate-mindreading").addEventListener("click", enablePowers)
document.querySelector("#activate-xray").addEventListener("click", enablePowers)

function enableAllPowers() {
    let powers = document.querySelectorAll("#powerlist section")
    powers.forEach(power => {
        power.classList.remove("disabled")
        power.classList.add("enabled")
    })
}

document.querySelector("#activate-all").addEventListener("click", enableAllPowers)

function disableAllPowers() {
    let powers = document.querySelectorAll("#powerlist section")
    powers.forEach(power => {
        power.classList.remove("enabled")
        power.classList.add("disabled")
    })
}

document.querySelector("#deactivate-all").addEventListener("click", disableAllPowers)