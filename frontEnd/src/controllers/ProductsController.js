import httpClient from "./httpClient";

const END_POINT = "/api/products";

const getAllProducts = () => httpClient.get(END_POINT);

const getById = (id) => httpClient.get(END_POINT+"/"+id);

const createProduct = (product) => httpClient.post(END_POINT, product);

const updateProduct = (id, product) => httpClient.put(END_POINT+"/"+id, product);

const deleteProduct = (id) => httpClient.delete(END_POINT+"/"+id);

export{
    getAllProducts,
    getById,
    createProduct,
    updateProduct,
    deleteProduct
}

