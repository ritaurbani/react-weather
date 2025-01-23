function Card({ weather, location }) {
    console.log("questo e`:", weather)

    return (
        <div>
            <div className='card'>
                <div className="cardHeader">
                    <h4>{location.name}</h4>
                    <h4>{location.country}</h4>
                </div>
                <img src={weather.image} alt="" />
                <p>{weather.type}</p>

                <p>{location.localtime}</p>

                {weather.temp?.map((item) => {
                    console.log(item)
                    return <div>
                        <p>{item}</p>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Card