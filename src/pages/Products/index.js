import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Table from '../../components/Table';
import EditModal from '../../components/EditModal';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import { useCrud } from '../../hooks/useCrud';
import { useNavigate } from 'react-router-dom';
import { salesRoute } from '../../utils/constants';
import './styles.scss';

const Products = () => {
    const { products, 
            getInitialData, 
            handleDelete, 
            handleEdit,
            productToEdit,
            setProductToEdit,
            openModalEdit,
            setOpenModalEdit,
            handleOpenModalEdit } = useCrud();
    const navigate = useNavigate();

    useEffect(()=>{
        getInitialData();
    }, [])

    return (
        <Container maxWidth="lg" className='ProductosContainer'>
            <Button variant="contained" startIcon={<Add />} onClick={()=> navigate(salesRoute)}>Crear nuevo producto</Button>
            <h1>Lista de productos</h1>
            {products.length > 0 && <Table products={products} handleDelete={handleDelete} handleOpenModalEdit={handleOpenModalEdit} />}
            <EditModal open={openModalEdit} setOpen={setOpenModalEdit} productToEdit={productToEdit} setProductToEdit={setProductToEdit} handleEdit={handleEdit} />
        </Container>
    )
}

export default Products;