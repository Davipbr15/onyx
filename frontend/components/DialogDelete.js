import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function DialogDelete(props) {

  const [listCard,setListCard] = useState();

  const handleCloseDelete = () => {
    props.setOpen(false);
  };

  const handleDeleteProduto = () => {
    Axios.delete(`http://localhost:3002/deleteProduto/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id != editValues.id;
        })
      );
    });
    handleCloseDelete();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleCloseDelete}
        aria-labelledby="form-dialog-title"
      >

        <DialogTitle id="form-dialog-title">Deletar</DialogTitle>

        <DialogContent>
          <TextField sx={{ border: 0 }}
            margin="dense"
            id="produto"
            label="Nome do Produto"
            defaultValue={props.produto}
            type="text"
            fullWidth
            disabled
          />
          <TextField
            margin="dense"
            id="desc"
            label="Descrição"
            defaultValue={props.desc}
            type="text"
            fullWidth
            disabled
          />
          <TextField
            margin="dense"
            id="preco"
            label="Preço"
            defaultValue={props.preco}
            type="text"
            fullWidth
            
          />
          </DialogContent>
          <DialogContent>
          <a className="neon-bt mx-auto">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Você deseja realmente excluir este produto?
          </a>
          <br></br>
          <cite className="text-xs">Essa ação é irreversível.</cite>
        </DialogContent>
          <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={() => handleDeleteProduto()}>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}