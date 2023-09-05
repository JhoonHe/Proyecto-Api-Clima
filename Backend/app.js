const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const login = require("./routes/login");

const PORT = 10101;

const app = express()
  .use(
    cors({
      credentials: true,
      origin: "*",
    })
  )
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));

app.use("/login", login);

app.get('', (req, res) => {
    res.send('¡Un saludo desde el Backend!');
})

app.listen(PORT, () => {
  console.log(`Servidor express ejecutado en el puerto ${PORT}`);
});
