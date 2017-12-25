function forLoop(array) {
  for (let i=0; i<25; i++) {
    if (i===1){
      array.push( `I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

<<<<<<< HEAD
function whileLoop(n) {
  while (n>0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array = array.pop
  } while (array.length > 0 && maybeTrue());
  return array
}
=======

// function forLoop(array) {
//   for (let i=0; i<25; i++) {
//     if (i===1){
//       array.push( `I am ${i} strange loop.`)
//     } else {
//       array.push(`I am ${i} strange loops.`)
//     }
//   }
// }
>>>>>>> 52a540cafe19f31544b8a9a5070358e238ae5731
