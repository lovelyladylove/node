console.log("I love You")

setTimeout(() => console.log("i miss you after 1 second!"), 100)

let exclamation = ""
for (let i = 0; i < 10; i++){
    setTimeout(
        () => {
            exclamation +="!"
            console.log(i, "Will you miss me?" + exclamation), 100 * i}
    )
};

//console.log(global)
//console.log(document)
//console.log(module)

let shine = require('./sunshine')

let myOtherModule = require('./controller')

shine()

console.log(myOtherModule)

myOtherModule.anotherName()
myOtherModule.functionName()
myOtherModule.niceName()
myOtherModule.loveName()