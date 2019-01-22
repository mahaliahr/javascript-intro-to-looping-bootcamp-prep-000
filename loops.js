function forLoop(array) {
  for ()
return array
}

function whileLoop(n) {
  var countdown = n
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(array) {
  var i = 0;

function incrementVariable() {
  i = i + 1;
}
  do{
    array.shift()
    incrementVariable()
  } while (array.length > 0 && incrementVariable())
  return array
}
