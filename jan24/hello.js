const cc = require('./calc')

console.log(cc.add(5, 6))
console.log(cc.sub(5, 6))
console.log(cc.mul(5, 6))
console.log(cc.div(5, 6))
console.log(cc.mod(5, 6))

const [add, sub] = cc.addsub(6, 5)
//const [data, setData] = useState(1)

console.log("this is addition: " + add)
console.log("this is subtraction: " + sub)








// console.log("Hello World")

// x = 5

// console.log(`X = ${x}`)

//CW WAP to find square of number