import './iconNew.css'




function IconNew({ curentNew, width }) {

    const styleIconNew = {
        width: width,
    }

    return (
        <div style={styleIconNew} className='iconNew'>
            <img src={curentNew.urlImg} alt='' />
            <div className="text">
                <h3>{curentNew.title}</h3>
                <p>{curentNew.urlNew}</p>
            </div>

        </div>
    )
}

export { IconNew }