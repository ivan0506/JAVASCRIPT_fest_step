let c
function myfync(a,b) {
    a++
    c=a+b
    return c
}
myfync(6,7)
console.log(c)