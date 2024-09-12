function add(a, b) {
  return a + b;
}

function sub(a, b){
    return a - b;
}
//Default export
module.exports = {
     addFn: add,
     subFN: sub
}
//  we use this 1 time because, basically it override the function so we have 1 more way to.
// require function is basically built in node not in javascript.

// export.add = (a, b) => a+b;
// export.sub = (a, b) => a-b;{we use this to solve the override issue}but the function is annonymous.
