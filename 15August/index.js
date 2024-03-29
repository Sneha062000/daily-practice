//Promise
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//A Promise is in one of these states:

// 1 pending: initial state, neither fulfilled nor rejected.
// 2 fulfilled: meaning that the operation was completed successfully.
// 3 rejected: meaning that the operation failed.


// var promise = new Promise(function(resolve, reject) {
//     const x = "sneha";
//     const y = "sneha"
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
     
//   promise.
//       then(function () {
//           console.log('Success, Hello sneha shinde');
//       }).
//       catch(function () {
//           console.log('Some error has occurred');
//       });


// //Promise Resolved
// var promise = new Promise(function(resolve, reject) {
//     resolve('sneha');
// })
   
// promise
//     .then(function(successMessage) {
//        //success handler function is invoked
//         console.log(successMessage);
//     }, function(errorMessage) {
//         console.log(errorMessage);
//     })



//Promise Rejected
var promise = new Promise(function(resolve, reject) {
    reject('Promise Rejected')
})
   
promise
    .then(function(successMessage) {
        console.log(successMessage);
    }, function(errorMessage) {
       //error handler function is invoked
        console.log(errorMessage);
    })