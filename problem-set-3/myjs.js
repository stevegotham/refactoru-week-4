function palindrome (string) {
  var reversedString = string.split('').reverse().join('')
  if(reversedString === string) {
    return true
  }
  return false
}

function dashInsert (num) {
  var newNum = num.toString().split('')
  for (var i=newNum.length-1; i>0; i--) {
    if(newNum[i]%2 == 1 && newNum[i-1]%2 == 1) {
      newNum.splice(i,0,'-')
    }
  }
  return newNum.join('')
}
