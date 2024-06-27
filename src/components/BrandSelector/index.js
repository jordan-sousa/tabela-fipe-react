import fipeService from '../../services/FipeService';
import './BrandSelector.css'
import { useEffect, useState } from "react"

function BrandSelector({typeVehicle, setBrand}) {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fipeService.getBrands(typeVehicle).then(data => setBrands(data))
        }, [typeVehicle]);
        
        return(
            <div className='car-brand'>
            <label>Selecione a marca</label>
            <select onChange={(e) => setBrand(e.target.value)}>
                <option value="">Selecione</option>
                {brands.map(brand => (
                    <option key={brand.codigo} value={brand.codigo}> {brand.nome} </option>
                ))}
            </select >
        </div>
    )
}

export default BrandSelector