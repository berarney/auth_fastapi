//1.1
function declaration(a){
    A=a*4
    a=a*a
    console.log(a,A)
    return a, A
}
declaration(3)

const expression = function(a){
    A=a*4
    a=a*a
    console.log(a,A)
    return a, A
}
expression(4)

const arrow = (a) => {
    A=a*4
    a=a*a
    console.log(a,A)
    return a, A
}
arrow(8)

//1.2
function declarat(R){
    S = R*3.14
    console.log(S)
    return S
}
declarat(3)

const express = function(R){
    S = R*3.14
    console.log(S)
    return S
}
express(4)

const arr = (R) => {
    S = R*3.14
    console.log(S)
    return S
}
arr(8)

//1.3
function declar(a,b){
    P=(a+b)*2
    s=a*b
    console.log(P,s)
    return P, s
}
declar(3,4)

const e = function(a,b){
    P=(a+b)*2
    s=a*b
    console.log(P,s)
    return P, s
}
e(4,5)

const ar = (a,b) => {
    P=(a+b)*2
    s=a*b
    console.log(P,s)
    return P, s
}
ar(8,2)

//2
function check(a){
    if (a%2==0){
        console.log(`${a}-четное число`)
    }
    else {
        console.log(`${a}-нечетное число`)
    }
}

check(5)

//3
const prime = function(a){
    if (a%2==0){
        console.log(`${a}-не простое число`)
    }
    else {
        console.log(`${a}-простое число`)
    }
}
prime(11)