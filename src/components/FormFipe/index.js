import { React, useState } from 'react'
import BrandSelector from '../BrandSelector'
import ModelSelector from '../ModelSelector'
import ReviewsList from '../ReviewsList'
import SelectorVehicleType from '../SelectorVehicleType'
import './Formfipe.css'

function Formfipe() {
    const [typeVehicle, setTypeVehicle] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [reviews, setReviews] = useState([]);

    const resetForm = () => {
        setTypeVehicle('')
        setBrand('')
        setModel('')
        setReviews('')
    } 

    return (
        <div className='form-container'>
            <form className='form' action="">
                <h1>Consulta de tabela fipe</h1>
                <SelectorVehicleType setTypeVehicle={setTypeVehicle} />
                {typeVehicle && <BrandSelector typeVehicle={typeVehicle} setBrand={setBrand} />}
                {brand && <ModelSelector typeVehicle={typeVehicle} brand={brand} setModel={setModel} setReviews={setReviews} />}
                {reviews.length > 0 && <ReviewsList reviews={reviews} />}
                <button type='button' onClick={resetForm} className='restart'>Reiniciar</button>
            </form>

        </div>
    )
}

export default Formfipe