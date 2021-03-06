import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useCrud } from '../../hooks/useCrud';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Swal  from 'sweetalert2';
import { setLocalStorageItem } from '../../utils/localStorage';
import { productsKey } from '../../utils/constants';
import './styles.scss';

const Sales = () => {
    const { products, getInitialData, setProducts } = useCrud();
    const [sale, setSale] = useState({
        idProducto: '',
        quantity: ''
    });
    const [productSelected, setProductSelected] = useState(null);

    useEffect(()=>{
        getInitialData();
    }, [])

    useEffect(()=>{
        const productSelected = products.filter(item => item.id === sale?.idProducto)[0];
        setProductSelected(productSelected);
    }, [sale])

    const addSale = async (e) => {
        e.preventDefault();
        const productInfo = products.filter(item =>  item.id === sale.idProducto)[0];
        if(Number(productInfo.stock) < sale.quantity){
            await Swal.fire(
                'No hay stock para la cantidad ingresada',
                '',
                'error'
            )
            return;
        }
        
        productInfo.stock = Number(productInfo.stock - sale.quantity);
        const newArray = products.map(item => {
            if(item.id === sale.idProducto){
                return productInfo;
            }
            return item;
        });
        setLocalStorageItem(productsKey, JSON.stringify(newArray));
        setProducts(newArray);
        Swal.fire(
            'Venta registrada exitosamente',
            '',
            'success'
        )
    }

    return (
        <Container maxWidth="sm" className='SalesContainer'>
            <h1>Venta de productos</h1>
            <Box
              onSubmit={addSale}
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              autoComplete="off"
            >
                <TextField
                    required
                    id="outlined-select-currency"
                    select
                    label="Producto"
                    value={sale?.idProducto}
                    onChange={(e)=>{ setSale({...sale, idProducto: e.target.value})}}
                    helperText="Seleccione una categor??a"
                >
                    {products.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                    ))}
                </TextField>
                <TextField
                    required
                    id="outlined-required"
                    label="Cantidad"
                    onChange={(e)=>{ setSale({...sale, quantity: e.target.value}) }}
                    type='number'
                />
                <Container  maxWidth="md">
                    <h3>Precio: {productSelected?.price.toLocaleString('en-IN', {style: 'currency',currency: 'COP', minimumFractionDigits: 2})}</h3>
                    <h3>Cantidad disponible: {productSelected?.stock}</h3>
                </Container>
                 <Container className='SalesContainer__containerButtons' maxWidth="md">
                    <Button type='submit' variant="contained">Guardar</Button>
                </Container>
            </Box>
        </Container>
    )
}

export default Sales;