var express = require("express");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");

var cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-mail", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "angeldchz@gmail.com",
      pass: "111096abcAngel1"
    }
  });

  var mailOptions = {
    from: "angeldchz@gmail.com",
    to: req.body.email,
    subject: req.body.asunto,
    text:
      req.body.nombre +
      " " +
      req.body.apellido +
      " " +
      "cuyo número de teléfono es: " +
      req.body.telefono +
      " " +
      "escribe lo siguiente: \n" +
      req.body.mensaje
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send("enviado");
    }
  });
});

app.listen(3000, () =>
  console.log("se esta ejecutando el servidor en el puerto 3000")
);
