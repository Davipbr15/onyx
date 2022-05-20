const express = require("express");
const app = (express());
const mysql = require("mysql2");
const cors = require("cors");
const name = "davi";

const db = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dataOnyx",
})



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
})

app.post("/registraConta", (req,res) =>{
  const { nome } = req.body;
  const { email } = req.body;
  const { senha } = req.body;
  

  let SQL = "INSERT INTO login (email,senha,nome) VALUES (?,?,?)"

  db.query(SQL, [nome,email,senha] ,(err,result) =>{
      console.log(err);
  })
})

app.post("/logarConta", (req,res) =>{
  let SQL = "SELECT * from produto ORDER BY id DESC";
  db.query(SQL,(err,result) =>{
      if(err) console.log(err)
      else res.send(result);
  })
})

app.get("/getProdutos", (req,res) =>{
    let SQL = "SELECT * from produto ORDER BY id DESC";

    db.query(SQL,(err,result) =>{
        if(err) console.log(err)
        else res.send(result);
    })
})

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
})

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