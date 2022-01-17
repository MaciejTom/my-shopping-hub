const Email = require("../models/Email");

const postMail = async (req, res) => {

let newEmail = new Email({
    email: JSON.stringify(Object.keys(req.body)[0])    
})
newEmail.save(function(err, newEmail){
    if(err) {
        res.send(err)
    } else {
        res.send({message: `Email added Successfully!`})
    }  
})
};

  module.exports = {
    postMail
  }