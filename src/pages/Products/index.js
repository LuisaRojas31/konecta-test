import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Table from '../../components/Table';
import EditModal from '../../components/EditModal';
import CreateModal from '../../components/CreateModal';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import { useCrud } from '../../hooks/useCrud';
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
            handleOpenModalEdit,
            setOpenModalCreate,
            openModalCreate,
            productToCreate,
            setProductToCreate,
            handleCreate } = useCrud();

    useEffect(()=>{
        getInitialData();
    }, [])

    return (
        <Container maxWidth="lg" className='ProductosContainer'>
            <Button variant="contained" startIcon={<Add />} onClick={()=> { 
                setOpenModalCreate(true)
                setProductToCreate(null);
            }}>Crear nuevo producto</Button>
            <h1>Lista de productos</h1>
            {products.length > 0 && <Table products={products} handleDelete={handleDelete} handleOpenModalEdit={handleOpenModalEdit} />}
            <EditModal open={openModalEdit} setOpen={setOpenModalEdit} productToEdit={productToEdit} setProductToEdit={setProductToEdit} handleEdit={handleEdit} />
            <CreateModal open={openModalCreate} setOpen={setOpenModalCreate} productoToCreate={productToCreate} setProductToCreate={setProductToCreate} handleCreate={handleCreate} />
        </Container>
    )
}

export default Products;