export default function teamAdd(req, res) {

     if (req.method == "POST") {

          const reqPayload = req?.body;

          console.log("Req Payload:", reqPayload);
     
          return res.json({
                status:200,
                error: false,
                msg: "Hello World" ,
               });

     }
     return res.json({
          status:500,
          error:true,
          msg: "This needs to beapost request"
     });
    
 }