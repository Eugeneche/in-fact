let currentSwitchData = "pillow", currentPatternSrc

document.querySelectorAll(".fitting__container-svg").forEach((el, i)=> {

    i === 0 && el.style.removeProperty("display")
    i !== 0 && el.style.setProperty("display", "none")
})

document.querySelectorAll(".fitting__subject-img").forEach(el => {
    el.addEventListener('click', (e) => switchSubject(e))
})

document.querySelectorAll(".fitting__settings-thumb-item").forEach(el => {
    el.addEventListener('click', (e) => switchPattern(e))
})

function switchSubject(e) {

    document.querySelectorAll(".fitting__subject-img").forEach(el => {
        el.classList.remove("fitting-active")
    })
   
    e.target.classList.contains("fitting__subject-img") && e.target.classList.add("fitting-active")

    currentSwitchData = e.target.id

    document.querySelectorAll(".fitting__subject-bg").forEach(el => {
        el.classList.remove("fitting-shown")

        el.getAttribute("data-switcher") === currentSwitchData && el.classList.add("fitting-shown")
    })

    document.querySelectorAll(".fitting__container-svg").forEach(el => {

        if (el.getAttribute("data-switcher") === currentSwitchData) {         
            el.style.removeProperty("display")
        } else {
            el.style.setProperty("display", "none")
        }
    })
}

function switchPattern(e) {
    currentPatternSrc = e.target.currentSrc

    document.querySelectorAll(".fitting__container-svg").forEach(el => {

        if (el.getAttribute("data-switcher") === currentSwitchData) {
            el.querySelector("pattern image").setAttribute("href", currentPatternSrc)
        } 
    })
}

document.getElementById("printScale").addEventListener("input", (e) => currentPatternSrc && setScale(e))

function setScale(e) {

    document.querySelectorAll(".fitting__container-svg").forEach(el => {

        if (el.getAttribute("data-switcher") === currentSwitchData) {
            let patternTransformAttr = el.querySelector("pattern").getAttribute("patternTransform")
            let changeableAttr = patternTransformAttr.replace(/scale\(.+\)/, `scale(${e.target.value})`)
            el.querySelector("pattern").setAttribute("patternTransform", `${changeableAttr}`)
        } 
    })
}

document.getElementById("printRotate").addEventListener("input", (e) => currentPatternSrc && setRotate(e))

function setRotate(e) {

    document.querySelectorAll(".fitting__container-svg").forEach(el => {

        if (el.getAttribute("data-switcher") === currentSwitchData) {
            let patternTransformAttr = el.querySelector("pattern").getAttribute("patternTransform")
            let changeableAttr = patternTransformAttr.replace(/rotate\(.+\)\s/, `rotate(${e.target.value}) `)
            el.querySelector("pattern").setAttribute("patternTransform", `${changeableAttr}`)
        } 
    })
}