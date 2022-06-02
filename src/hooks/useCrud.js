import { useState } from 'react';
import { initialProducts  } from '../db/initalProducts';
import { getFromLocalStorage, setLocalStorageItem } from '../utils/localStorage';
import { productsKey } from '../utils/constants';
import { getDateWithFormat } from '../utils/date';
import { titleConfirmationDeleteProduct, titleSucessConfirmationProduct, 
    titleSucessConfirmationProductEdit, titleSucessConfirmationProductCreate } from './constants';
import Swal  from 'sweetalert2';

export const useCrud = () => {
    const [products, setProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState([]);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [productToCreate, setProductToCreate] = useState(null);
    const [openModalCreate, setOpenModalCreate] = useState(false);

    const getInitialData = () => {
        const localStorageProductos= getFromLocalStorage(productsKey);
        if(localStorageProductos){
            setProducts(JSON.parse(localStorageProductos))
        }else{
            setLocalStorageItem(productsKey, JSON.stringify(initialProducts));
            setProducts(products);
        }
    }

    const handleDelete = async (id) => {
        if(await confirmationMessage(titleConfirmationDeleteProduct)){
            const newArray = products.filter(item => item.id !== id);
            setLocalStorageItem(productsKey, JSON.stringify(newArray));
            setProducts(newArray);
            resultMessage(titleSucessConfirmationProduct);
        }        
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setOpenModalEdit(false);
        const newArray = products.map(item => {
            if(item.id === productToEdit.id){
                return productToEdit;
            }
            return item;
        });
        setLocalStorageItem(productsKey, JSON.stringify(newArray));
        setProducts(newArray);
        resultMessage(titleSucessConfirmationProductEdit);
    }

    const handleOpenModalEdit = (product) => {
        setOpenModalEdit(true);
        setProductToEdit(product);
    }

    const handleCreate = (e) => {
        e.preventDefault();
        const newTask = {
            ...productToCreate,
            id: 0,
            creationDate: getDateWithFormat()
        }
    
        let newArray = [];
        const localStorageProductos = getFromLocalStorage(productsKey);
        if(localStorageProductos){
            newArray = [...JSON.parse(localStorageProductos), newTask];
        }else{
            newArray.push(newTask);
        }
    
        newArray = newArray.map((item, index) => {        
            item.id = index
            return item;
        });
        setLocalStorageItem(productsKey, JSON.stringify(newArray));
        setProducts(newArray);
        setOpenModalCreate(false);
        resultMessage(titleSucessConfirmationProductCreate);
    }

    const confirmationMessage = async (title, message = '') => {
        const result = await Swal.fire({
            title: title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
              return true;
            }else{
                return false;
            }
        })
        return result;
    }

    const resultMessage = (title) => {
        Swal.fire(
            title,
            '',
            'success'
        )
    }

    return {
        products,
        getInitialData,
        handleDelete,
        openModalEdit,
        setOpenModalEdit,
        productToEdit,
        setProductToEdit,
        handleEdit,
        handleOpenModalEdit,
        setOpenModalCreate,
        openModalCreate,
        productToCreate,
        setProductToCreate,
        handleCreate,
        setProducts
    }
}