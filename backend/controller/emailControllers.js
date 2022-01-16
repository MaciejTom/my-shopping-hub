const Email = require("../models/Email");

const postMail = async (req, res) => {


console.log(JSON.stringify(Object.keys(req.body)[0]))


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


    //   try {
//     const products = await Product.find({});
//     res.json(products);
   
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({message: 'Server Error'});
//   }
};

  module.exports = {
    postMail
  }