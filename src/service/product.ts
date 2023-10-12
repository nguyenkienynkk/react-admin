import axiosConfig from "./configAxios"

export const getProducts = async (params: any) => {
    return axiosConfig.get('/products')
}

