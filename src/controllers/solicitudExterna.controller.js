import config from "../config";
const nodeMailer = require('nodemailer');


export const getSolicitud = async (req, res) => {
    const { correo, asunto,mensaje } = req.body;
    console.log(req.body);
       
    let transport = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:process.env.CORREO,
            pass:process.env.CLAVE,
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    transport.verify().then(()=>{
        console.log("conectado")
    }).catch((err)=>{
        console.log("no conectado"+ err)
    })
     try {
    const opciones = {
        from: 'Cliente',
        subject: asunto,
        to: "csierra.ace@gmail.com",
        text: "",
        html:'<b></b><br><br><p>'+mensaje,
    };
   

    transport.sendMail(opciones,function(error,result){
        if(error) return res.status(500).json({ status: "500", msg: res.send(error.message),token:0  }); 
        return res.json({status: "ok", msg: result,token:''});
      });
      
    } catch (error) {
     res.status(500);
      res.send(error.message);
      return res.status(500).json({ status: "500", msg: res.send(error.message),token:0  });
    }
};



