import Account from "./models/Account";


async function loginValidity(body){
    const {username, password} = body
    const foundAcc = await Account.findOne({username, password })

    if(foundAcc){
        

    }
}

