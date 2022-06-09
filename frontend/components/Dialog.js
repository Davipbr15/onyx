import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";
import $ from 'jquery';

export default function FormDialog(props) {

  if (typeof window === 'object') {
    
    $(document).ready(function() {
      $("#preco").keyup(function() {
          $("#preco").val(this.value.match(/[0-9]*/));
      });
    });

    }


  const [editValues, setEditValues] = useState({
    id: props.id,
    produto: props.produto,
    desc: props.desc,
    preco: props.preco,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const [listCard,setListCard] = useState();

  const handleEditProduto = () => {
    Axios.put("http://localhost:3002/editProdutos", {
      id: editValues.id,
      produto: editValues.produto,
      desc_p: editValues.desc,
      preco: editValues.preco,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.id == editValues.id
            ? {
                id: editValues.id,
                produto: editValues.produto,
                desc_p: editValues.desc,
                preco: editValues.preco,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteProduto = () => {
    Axios.delete(`http://localhost:3002/deleteProduto/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id != editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="produto"
            label="Nome do Produto"
            defaultValue={props.produto}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="desc"
            label="Descrição"
            defaultValue={props.desc}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            type="text"
            name="preco"  
            min="0"
            max="9999"
            placeholder="Preço"
            autoFocus
            margin="dense"
            id="preco"
            label="Preço"
            maxLength="5"
            pattern="[0-9\.]+"
            defaultValue={props.preco}
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={() => handleDeleteProduto()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditProduto()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}