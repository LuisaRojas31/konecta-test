import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { categories } from '../../db/categoriesList';
import { unitMeasures } from '../../db/unitMeasure';
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

const CreateModal = ({open, setOpen, productoToCreate, setProductToCreate, handleCreate}) => {
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
            Crear
          </Typography>
            <Box
              onSubmit={handleCreate}
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
                onChange={(e)=>{ setProductToCreate({...productoToCreate, name: e.target.value})}}
              />
              <TextField
                required
                id="outlined-required"
                label="Referencia"
                onChange={(e)=>{ setProductToCreate({...productoToCreate, reference: e.target.value})}}
              />
              <TextField
                required
                id="outlined-required"
                label="Precio"
                onChange={(e)=>{ setProductToCreate({...productoToCreate, price: e.target.value})}}
                type='number'
              />
              <TextField
                required
                id="outlined-required"
                label="Peso"
                onChange={(e)=>{ setProductToCreate({...productoToCreate, weight: e.target.value})}}
                type='number'
              />
              <TextField
                required
                id="outlined-select-currency"
                select
                label="Unidad de medida"
                value={productoToCreate?.unitMeasure}
                onChange={(e)=>{ setProductToCreate({...productoToCreate, unitMeasure: e.target.value})}}
                helperText="Seleccione una unidad de medida"
              >
                {unitMeasures.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="outlined-select-currency"
                select
                label="Categoría"
                value={productoToCreate?.category}
                onChange={(e)=>{ setProductToCreate({...productoToCreate, category: e.target.value})}}
                helperText="Seleccione una categoría"
              >
                {categories.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="outlined-required"
                label="Stock"
                onChange={(e)=>{ setProductToCreate({...productoToCreate, stock: e.target.value})}}
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

export default CreateModal;
