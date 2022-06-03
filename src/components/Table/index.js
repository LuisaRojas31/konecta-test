import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import { categories } from '../../db/categoriesList';
import { unitMeasures } from '../../db/unitMeasure';
import './styles.scss';

const ProductsTable = ({products, handleDelete, handleOpenModalEdit}) => {
  const getCategoryName = (id) => {
    const category = categories.filter(item => item.id === id);
    if(category){
        return category[0].name;
    }
  }

  const getWeightName = (id) => {
    const unitMeasure = unitMeasures.filter(item => item.id === id);
    if(unitMeasure){
        return unitMeasure[0].name;
    }
  }
  return (
    <TableContainer className='ProductosTable' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Editar</TableCell>
            <TableCell>Producto</TableCell>
            <TableCell>Referencia</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Peso</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Fecha de creación</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products?.length > 0 && products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                    <div onClick={()=> handleOpenModalEdit(product)}>
                        <Edit className='ProductosTable__icon'/>
                    </div>
                </TableCell>
                <TableCell component="th" scope="product">
                    {product.name}
                </TableCell>
                <TableCell component="th" scope="product">
                    {product.reference}
                </TableCell>
                <TableCell align="right">{product.price.toLocaleString('en-IN', {style: 'currency',currency: 'COP', minimumFractionDigits: 2})}</TableCell>
                <TableCell align="right">{`${product.weight} ${getWeightName(product.unitMeasure)}`}</TableCell>
                <TableCell component="th" scope="product">
                    {getCategoryName(product.category)}
                </TableCell>
                <TableCell align="right">{product.stock}</TableCell>
                <TableCell align="right">{product.creationDate}</TableCell>
                <TableCell align="right">
                    <div onClick={()=> handleDelete(product.id)}>
                        <Delete className='ProductosTable__icon' />
                    </div>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsTable;
