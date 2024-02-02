let currentSwitchData = document.querySelector(".fitting__subject-img")?.getAttribute("id"), 
activeCell = document.querySelector("#fitting__settings-select-cells option")?.value,
currentPatternSrc
currentSwitchData === "smallbed" ? document.querySelector(".fitting__settings-header").style.display = "block" : document.querySelector(".fitting__settings-header").style.display = "none"

document.querySelectorAll(".fitting__subject-img").forEach((el, i) => {

    i === 0 && el.classList.add("fitting-active")
})

document.querySelectorAll(".fitting__container-svg").forEach((el, i) => {

    i === 0 && el.style.setProperty("display", "block")
})

document.querySelectorAll(".fitting__subject-bg").forEach((el, i) => {

    i === 0 && el.classList.add("fitting-shown")
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

    currentSwitchData === "smallbed" ? document.querySelector(".fitting__settings-header").style.display = "block" : document.querySelector(".fitting__settings-header").style.display = "none"
}

function switchPattern(e) {

    if (currentSwitchData !== "smallbed") {

        currentPatternSrc = e.target.currentSrc.substring(e.target.currentSrc.lastIndexOf('/') + 1)

        document.querySelectorAll(".fitting__container-svg").forEach(el => {

            if (el.getAttribute("data-switcher") === currentSwitchData) {
                el.querySelector("pattern image").setAttribute("href", `/user/documents/patterns/${currentPatternSrc}`)
            } 
        })

    }  
    
    if (currentSwitchData === "smallbed" && activeCell === "pillow") {

        currentPatternSrc = e.target.currentSrc

        document.querySelector("#patternSmallbedPillow image").setAttribute("href", currentPatternSrc)

    } else if (currentSwitchData === "smallbed" && activeCell === "blanket") {
        
        currentPatternSrc = e.target.currentSrc

        document.querySelector("#patternSmallbedDuvetCover image").setAttribute("href", currentPatternSrc)
    }
    
}

document.getElementById("printScale")?.addEventListener("input", (e) => currentPatternSrc && setScale(e))

function setScale(e) {

    if (currentSwitchData !== "smallbed") {
        document.querySelectorAll(".fitting__container-svg").forEach(el => {

            if (el.getAttribute("data-switcher") === currentSwitchData) {
                let patternTransformAttr = el.querySelector("pattern").getAttribute("patternTransform")
                let changeableAttr = patternTransformAttr.replace(/scale\(.+\)/, `scale(${e.target.value})`)
                el.querySelector("pattern").setAttribute("patternTransform", `${changeableAttr}`)
            } 
        })
    }

    if (currentSwitchData === "smallbed" && activeCell === "pillow") {

        let patternTransformAttr = document.querySelector("#patternSmallbedPillow").getAttribute("patternTransform")
        let changeableAttr = patternTransformAttr.replace(/scale\(.+\)/, `scale(${e.target.value})`)

        document.querySelector("#patternSmallbedPillow").setAttribute("patternTransform", `${changeableAttr}`)

    } else if (currentSwitchData === "smallbed" && activeCell === "blanket") {
        
        let patternTransformAttr = document.querySelector("#patternSmallbedPillow").getAttribute("patternTransform")
        let changeableAttr = patternTransformAttr.replace(/scale\(.+\)/, `scale(${e.target.value})`)

        document.querySelector("#patternSmallbedDuvetCover").setAttribute("patternTransform", `${changeableAttr}`)
    }
}

document.getElementById("printRotate")?.addEventListener("input", (e) => currentPatternSrc && setRotate(e))

function setRotate(e) {

    if (currentSwitchData !== "smallbed") {
        document.querySelectorAll(".fitting__container-svg").forEach(el => {

            if (el.getAttribute("data-switcher") === currentSwitchData) {
                let patternTransformAttr = el.querySelector("pattern").getAttribute("patternTransform")
                let changeableAttr = patternTransformAttr.replace(/rotate\(.+\)\s/, `rotate(${e.target.value}) `)
                el.querySelector("pattern").setAttribute("patternTransform", `${changeableAttr}`)
            } 
        })
    }

    if (currentSwitchData === "smallbed" && activeCell === "pillow") {

        let patternTransformAttr = document.querySelector("#patternSmallbedPillow").getAttribute("patternTransform")
        let changeableAttr = patternTransformAttr.replace(/rotate\(.+\)\s/, `rotate(${e.target.value}) `)

        document.querySelector("#patternSmallbedPillow").setAttribute("patternTransform", `${changeableAttr}`)

    } else if (currentSwitchData === "smallbed" && activeCell === "blanket") {
        
        let patternTransformAttr = document.querySelector("#patternSmallbedPillow").getAttribute("patternTransform")
        let changeableAttr = patternTransformAttr.replace(/rotate\(.+\)\s/, `rotate(${e.target.value}) `)

        document.querySelector("#patternSmallbedDuvetCover").setAttribute("patternTransform", `${changeableAttr}`)
    }
}

function setFabricOnBed() {

    document.querySelector("#fitting__settings-select-cells")?.addEventListener("change", (e) => {
        activeCell = e.target.value
    })
}

setFabricOnBed()
