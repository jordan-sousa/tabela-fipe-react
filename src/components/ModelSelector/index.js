import fipeService from '../../services/FipeService';
import './ModelSelector.css'
import React, { useEffect, useState } from 'react'

function ModelSelector({typeVehicle, brand, setModel, setReviews}) {
    const [models, setModels] = useState([]);
    const [filterModels, setFilterModels] = useState([]);

    useEffect(() => {
        if (typeVehicle && brand) {
            fipeService.getModels(typeVehicle, brand).then(data => {
                setModels(data);
                setFilterModels(data);
            });
        }
    }, [typeVehicle, brand]);

    const handleFilterChange = (filter) => {
        setFilterModels(models.filter(model => model.nome.toLowerCase().includes(filter.toLowerCase())));
    }
    
    const handleModelChange = (codeModel) => {
        setModel(codeModel);
        fipeService.getReviews(typeVehicle, brand, codeModel).then(data => setReviews(data.flat()));
    }

    return(
        <div className='model'>
            <input
                type='text'
                placeholder="Digite um trecho do modelo"
                required
                onChange={(e) => handleFilterChange(e.target.value)}
            />

            <select onChange={(e) => handleModelChange(e.target.value)}>
                <option value=''>Selecione o modelo</option>
                {filterModels.map(model => (
                    <option key={model.codigo} value={model.codigo}>{model.nome}</option>
                ))}
            </select>
        </div>
    )
}

export default ModelSelector