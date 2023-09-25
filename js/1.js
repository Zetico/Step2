// let index = 0
// let imageCount = 3
// const bottom = document.querySelector(".carousel .bottom")
// for (let i = 0; i < imageCount; i++) {
//     const indicator = document.createElement("div")
//     indicator.classList.add("indicator")
//     indicator.onclick = () => setIndex(i)
//     bottom.append(indicator)
// }
// function createAuto() {
//     return setInterval(() => {
//         index++
//         refresh()
//     }, 3000)
// }
//
// let autoTimer = createAuto()
//
// function refresh() {
//     if (index < 0) {
//         index = imageCount - 1
//     } else if (index >= imageCount) {
//         index = 0
//     }
//     let carousel = document.querySelector(".carousel")
//     let width = getComputedStyle(carousel).width
//     width = Number(width.slice(0, -2))
//     console.log(width)
//     carousel.querySelector(".container").style.left =
//         index * width * -1 + "px"
// }
//
// let refreshWrapper = (func) => {
//     return function (...args) {
//         let result = func(...args)
//         refresh()
//         clearInterval(autoTimer)
//         autoTimer = createAuto()
//         return result
//     }
// }
//
// let leftShift = refreshWrapper(() => {
//     index--
// })
// let rightShift = refreshWrapper(() => {
//     index++
// })
//
// let setIndex = refreshWrapper((idx) => {
//     index = idx
// })
// refresh()