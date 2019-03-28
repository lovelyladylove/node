let exclamation = ""
let sunshine = () => {
    exclamation +="!"
    console.log("I miss you too!" + exclamation)
}

module.exports = () => {
    for (let i = 0; i < 10; i++){
    setTimeout( sunshine, 100* i)
    }
}
