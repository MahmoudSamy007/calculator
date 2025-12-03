let firstnum = undefined
let secondnum = undefined
let prosecc = undefined
let equalNum = undefined
let result = undefined
document.getElementById("c").addEventListener("click", function(){
    document.getElementById("input").value = ""
    document.getElementById("display-Result").innerHTML = ""
})

document.getElementById("del").addEventListener("click", function(){
    document.getElementById("input").value = (document.getElementById("input").value).slice(0,-1)
})


document.getElementById("1").addEventListener("click", function(){
    document.getElementById("input").value += "1"
})
document.getElementById("2").addEventListener("click", function(){
    document.getElementById("input").value += "2"
})

document.getElementById("3").addEventListener("click", function(){
    document.getElementById("input").value += "3"
})

document.getElementById("4").addEventListener("click", function(){
    document.getElementById("input").value += "4"
})

document.getElementById("5").addEventListener("click", function(){
    document.getElementById("input").value += "5"
})

document.getElementById("6").addEventListener("click", function(){
    document.getElementById("input").value += "6"
})

document.getElementById("7").addEventListener("click", function(){
    document.getElementById("input").value += "7"
})

document.getElementById("8").addEventListener("click", function(){
    document.getElementById("input").value += "8"
})

document.getElementById("9").addEventListener("click", function(){
    document.getElementById("input").value += "9"
})

document.getElementById("0").addEventListener("click", function(){
    document.getElementById("input").value += "0"
})

document.getElementById("dot").addEventListener("click", function(){
    document.getElementById("input").value += "."
})
document.getElementById("del").addEventListener("click", function(){
    document.getElementById("input").value -= ""
})

document.getElementById("add").addEventListener("click", function(){
    firstnum = document.getElementById("input").value
    document.getElementById("input").value = ""
    document.getElementById("display-Result").innerHTML = `${firstnum} +`
    prosecc = "add"
})
document.getElementById("sub").addEventListener("click", function(){
    firstnum = document.getElementById("input").value
    document.getElementById("input").value = ""
    document.getElementById("display-Result").innerHTML = `${firstnum} -`
    prosecc = "sub"
})
document.getElementById("mult").addEventListener("click", function(){
    firstnum = document.getElementById("input").value
    document.getElementById("input").value = ""
    document.getElementById("display-Result").innerHTML = `${firstnum} ×`
    prosecc = "mult"
})
document.getElementById("div").addEventListener("click", function(){
    firstnum = document.getElementById("input").value
    document.getElementById("input").value = ""
    document.getElementById("display-Result").innerHTML = `${firstnum} ÷` 
    prosecc = "div"
})

document.getElementById("equal").addEventListener("click", function(){
    secondnum = document.getElementById("input").value
    switch(prosecc){
        case "add":
            equalNum =Number(firstnum) + Number(secondnum)
            result = `${Number(firstnum)} + ${Number(secondnum)} = ${equalNum}`
        break
        case "sub":
            equalNum =Number(firstnum) - Number(secondnum)
            result = `${Number(firstnum)} - ${Number(secondnum)} = ${equalNum}`
        break
        case "mult":
            equalNum =Number(firstnum) * Number(secondnum)
            result = `${Number(firstnum)} × ${Number(secondnum)} = ${equalNum}`
        break
        case "div":
            if(Number(secondnum) == 0){
            equalNum = undefined
            result = undefined
            }
            else{
                equalNum =Number(firstnum) / Number(secondnum)
                result = `${Number(firstnum)} / ${Number(secondnum)} = ${equalNum}`
            }
        break
    }
    
    document.getElementById("display-Result").innerHTML = equalNum
    document.getElementById("input").value = equalNum
})

document.getElementById("sqr").addEventListener("click", function(){
    firstnum = document.getElementById("input").value
    equalNum = firstnum*firstnum
    document.getElementById("display-Result").innerHTML = `${firstnum}²`
    document.getElementById("input").value = equalNum
})


