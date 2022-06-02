const express = require("express");
const app = (express());
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dataonyx",
});


app.use(cors());
app.use(express.json());


app.post("/registrarProduto", (req,res) =>{
    const { produto } = req.body;
    const { desc } = req.body;
    const { preco } = req.body;
    const precoN = preco.replace(/,/g, '.');
    

    let SQL = "INSERT INTO produto (produto,desc_p,preco) VALUES (?,?,?)"

    db.query(SQL, [produto,desc,precoN] ,(err,result) =>{
        console.log(err);
    })
});

app.post("/registrarConta", (req,res) =>{
  
  const { nome } = req.body;
  const { email } = req.body;
  const { senha } = req.body;
  
  let SQL = "INSERT INTO usuarios (nome,logEmail,logSenha) VALUES (?,?,?)"

  db.query(SQL, [nome,email,senha] ,(err,result) =>{
      console.log(err);
  })
});
app.post("/logarConta", (req,res) =>{

  const { email } = req.body;
  const { senha } = req.body;

  let SQL = "SELECT logEmail, logSenha FROM produto WHERE logEmail='?' AND logSenha='?' VALUES (?,?) ";

  db.query(SQL,[email,senha]  ,(err,result) =>{
      if(err) console.log(err)
      else res.send(result);
  })
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE logEmail = ?", [email], (err, result) => {

    if (err) {

      res.send(err);

    }

    if (result.length > 0) {

      bcrypt.hash(password, saltRounds, (err, hash) => {
  
        bcrypt.compare(password, result[0].password, (error, response) => {

          console.log(response);
  
        //
          if (error) {
            res.send(error);
          }
          if (response) {
            res.send({ msg: "Usuário logado" });
          } else {
            res.send({ msg: "Senha incorreta" });
          }
        });
      } else {
        res.send({ msg: "Usuário não registrado!" });
      }
    });

        
      });
      //
    }

});



app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE logEmail = ?", [email], (err, result) => {

    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (logEmail, password) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});


app.get("/getProdutos", (req,res) =>{
    let SQL = "SELECT * from produto ORDER BY id DESC";

    db.query(SQL,(err,result) =>{
        if(err) console.log(err)
        else res.send(result);
    })
});

app.put("/editProdutos", (req,res) =>{
    const { id } = req.body;
    const { produto } = req.body;
    const { desc } = req.body;
    const { preco } = req.body;
    let SQL = "UPDATE produto SET produto = ?, desc_p = ?, preco = ? WHERE id = ?";
    db.query(SQL, [produto, desc, preco, id], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

app.delete("/deleteProduto/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM produto WHERE id = ?";
    db.query(SQL, id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });




app.listen(3002, () => {
    console.log("Server running in 3002 port");
})