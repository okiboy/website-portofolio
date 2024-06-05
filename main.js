// toggle burger
// const navSlide = () => {
//     const burger = document.querySelector("burger")
//     const navList = document.querySelector("nav")
//}



//clear form before upload
window.onbeforeunload = () => {
    const forms = document.getElementsByTagName("form");
    for (const form of forms) {
        form.reset();
    }
}

