const accountId = 144553
let accountEmail = "sejol@gmail.com" // we use let, no scope problem
var accountPassword = "12345" // we do not use var much
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ayush@gmail.com"
var accountPassword = "145"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
