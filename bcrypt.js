const bcrypt = require('bcrypt')

const hasspass = async(simplepassword)=>{
    let saltRound = 10;
    let hasspassword = await bcrypt.hashSync(simplepassword,saltRound)
    return hasspassword
}
const comparepassword = async(simplepassword,hasspass)=>{
    let compare = await bcrypt.compare(simplepassword,hasspass)
    return compare
}

module.exports = {hasspass,comparepassword}



