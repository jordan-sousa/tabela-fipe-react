import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhY2FiNDVmMC1mMDg4LTQ5ZTgtYTg5NC0wMDk5MTIxZDAwOTUiLCJlbWFpbCI6ImpvcmRhbi5zb3VzYWpjQGdtYWlsLmNvbSIsImlhdCI6MTcxOTUxMzk0MH0._pIQhHuY4fLqQDKiJWXcZ4_qe8RdmMqjLNGiHOyL_kw"

const api = axios.create({
    baseURL: 'https://parallelum.com.br/fipe/api/v1/',
    headers: {
        'Authorization': `Bearer ${token}` 
    }
})

const getBrands = async (typeVehicle) => {
    try {
        return api.get(`https://parallelum.com.br/fipe/api/v1/${typeVehicle}/marcas`)
            .then(response => response.data);
    } catch (error) {
        console.error("Erro ao buscar marcas: ", error)
        throw error;
    }
}

const getModels = async (typeVehicle, brand) => {
    try {
        return api.get(`https://parallelum.com.br/fipe/api/v1/${typeVehicle}/marcas/${brand}/modelos`)
        .then(response => response.data.modelos);
    } catch (error) {
        console.error("Erro ao buscar modelos: ", error)
        throw error;
    }
}

const getReviews = async (typeVehicle, brand, model) => {
    try {
        return api.get(`https://parallelum.com.br/fipe/api/v1/${typeVehicle}/marcas/${brand}/modelos/${model}/anos`)
        .then(response => {
            const reviewsPromises = response.data.map(ano => 
                api.get(`https://parallelum.com.br/fipe/api/v1/${typeVehicle}/marcas/${brand}/modelos/${model}/anos/${ano.codigo}`)
                    .then(res => res.data)
            );
            return Promise.all(reviewsPromises);
        })
    } catch (error) {
        console.error("Erro ao buscar avaliações: ", error)
        throw error;
    }
}

export default {
    getBrands,
    getModels,
    getReviews
}