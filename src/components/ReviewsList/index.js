import './ReviewsList.css'

function ReviewsList({ reviews }) {
    if (!reviews) {
        console.log("Reviews está undefined");
        return null;
    }

    return (
        <div className='review'>
            <ul>
                {reviews.map(review => (
                    <li key={review.TipoVeiculo}>
                        <p>Ano: {review.AnoModelo}</p>
                        <p>Valor: {review.Valor}</p>
                        <p>Marca: {review.Marca}</p>
                        <p>Modelo: {review.Modelo} </p>
                        <hr/>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default ReviewsList;
