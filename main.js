function isEvenlyDivisible(a, b) {
  if(a % b === 0){
    return true
  }
  else{
    return false
  }
}

function halfSquare(n) {
  n = n*n
  return n/2
}

function isLong(str) {
  if(str.length >= 15){
    return true
  }
  else{
    return false
  }
}

function exclaim(str) {
  let counter = 0
  for( let s of str){
      if(s === "!"){
          counter++
      }
  }
  if(counter === 0){
      str += "!"
  }
  else{
      const toSplice = str.length - counter +1
      str = str.slice(0, toSplice)
  }
  return str
}

function countWords(str) {
  const arr =  str.split(" ")
  return arr.length
}

function containsDigit(str) {
  for(let s of str){
      if(s !==" "){
          let char = Number(s)
          if(!isNaN(char)){
              return true
          }
      }
  }
  return false
}

function containsLowerCase(str) {
  for(let s of str){
      let temp = s.toUpperCase()
      if( s !== temp){
          return true
      }
  }
  return false
}

function containsUpperCase(str) {
  for(let s of str){
      let temp = s.toLowerCase()
      if( s !== temp){
          return true
      }
  }
  return false
}

function containsNonAlphanumeric(str) {
  if(str.length == 0){
    return false
  }
  const alphaNumeric = /^[0-9a-zA-Z]+$/
  if(str.match(alphaNumeric)){
      return false
  }
  else{
      return true
  }
}

function containsSpace(str) {
  for( const s of str){
      if(s == " "){
          return true
      }
  }
  return false
}

function digits(num) {
  let arr = []
  const str = num.toString()
  for(const n of str){
      let temp = Number(n)
      if(!isNaN(temp)){
          arr.push(temp)
      }
  }
  return arr
}

function truncate(str) {
  if(str.length >= 15){
      let result = str.slice(0,8)
      result+= "..."
      return result
  }
  return str
}

function isValidPassword(str) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{1,}$/g
  for(let s of str){
      if(s == " "){
          return false
      }
  }
  if (str.match(re)){
      return true
  }
  return false
}

function onlyPunchy(arrStr) {
  let result = []
  for( let a of arrStr){
      let counter = 0;
      for(let char of a){
          if(char =="!"){
              counter++
          }
      }
      if(counter == 0){
          let temp = a + "!"
          result.push(temp)
      }
      else{
          result.push(a.slice(0, a.length-counter+1))
      }
  }
  for(let i=0; i<result.length; i++){
      if(result[i].length>=15){
          result.splice(i,1)
      }
  }
  return result
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}