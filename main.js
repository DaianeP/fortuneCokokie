document.querySelector(".image").addEventListener("click", function () {

    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document.querySelector("body").style.background = "linear-gradient(45deg, #190361 0%, #B0F 100%)"
})

const btnReset = document.querySelector("#btnReset")

btnReset.addEventListener('click', function () {
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    document.querySelector("body").style.background = "linear-gradient(45deg, #673DC4 0%, #B0F 100%)"
})

