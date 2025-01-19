function Card({ weather, location }) {

    return (
        <div className='card'>
            <img src={weather.image} alt="" />
            <p>{weather.type}</p>
            <h4>{location.name}</h4>
            <h4>{location.country}</h4>
            <p>{location.localtime}</p>
        </div>
    )
}

export default Card