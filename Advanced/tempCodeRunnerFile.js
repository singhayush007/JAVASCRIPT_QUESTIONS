const bankAc = {
//     balance: 1000
// }

// const handler = {
//     get (account, prop){
//        console.log('get', prop);
//        return account[prop]
//     },
//     set(account, property, value){
//         if(property === 'balance' && value < 0)
//         {
//             console.log(`Can not set balance to a negative value`)
//             return false;
//         }

//         console.log(`Setting ${property} to ${value}`);
//         account[property] = value;
//         return true;
//     }
// }

// const proxyAc = new Proxy(bankAc, handler);

// console.log(proxyAc.balance);