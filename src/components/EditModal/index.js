import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './styles.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const EditModal = ({open, setOpen, productToEdit, setProductToEdit, handleEdit}) => {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="EditModal"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar {productToEdit.name}
          </Typography>
            <Box
              onSubmit={handleEdit}
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              autoComplete="off"
            >
              <TextField
                required
                id="outlined-required"
                label="Producto"
                defaultValue={productToEdit.name}
                onChange={(e)=>{ setProductToEdit({...productToEdit, name: e.target.value})}}
              />
              <TextField
                required
                id="outlined-required"
                label="Referencia"
                defaultValue={productToEdit.reference}
                onChange={(e)=>{ setProductToEdit({...productToEdit, reference: e.target.value})}}
              />
              <TextField
                required
                id="outlined-required"
                label="Precio"
                defaultValue={productToEdit.price}
                onChange={(e)=>{ setProductToEdit({...productToEdit, price: e.target.value})}}
                type='number'
              />
              <TextField
                required
                id="outlined-required"
                label="Stock"
                defaultValue={productToEdit.stock}
                onChange={(e)=>{ setProductToEdit({...productToEdit, stock: e.target.value})}}
                type='number'
              />
              <Container className='EditModal__containerButtons' maxWidth="md">
                <Button type='submit' variant="contained">Guardar</Button>
                <Button variant="outline" onClick={handleClose}>Cancelar</Button>
              </Container>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default EditModal;
