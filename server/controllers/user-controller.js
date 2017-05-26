/*jshint esversion: 6*/

function prueba (req,res){
     res.status(200).send({
          message: "Probando controlador de usuario."
     });
}

module.exports = {
     prueba
};
