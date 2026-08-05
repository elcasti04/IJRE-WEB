import './style/academia.css'

function Academia () {
        
    const seminario = {
        rector : 'Marco Fidel Orozco Santana',
        logo : '/img/biblia.avif',
        descripcion : `Somos una familia que ama la Palabra de Dios Somos una congregación reformada en San Pedro, Sucre. Creemos que la Biblia es la autoridad suprema para la fe y la vida, y queremos que cada persona que llegue encuentre un hogar espiritual.`
    }
    
    return (
        <>
        <main className="academia container col d-flex align-items-center justify-content-bettwen">
            <div className='derecha col-12 col-md-8'>
                <i>Formacion Teológica</i>
                <h1>Seminario Reformado
                <br />
                <span>Gracia Sobre Gracia</span>
            </h1>
            <hr />
            <p>{seminario.descripcion}</p>
            <p className='versiculo'>
                <em>"Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo" - Mateo 28:19</em>
            </p>

            <br />
            <p className='link' 
            onClick={() => window.open('https://academia.srlseminario.org/')}>
                MÁS INFORMACIÓN  ➡</p>
            </div>
            <div className='izquierda col-12 col-md-3 '>
                <img className='logo-seminario' src={seminario.logo} alt="" />
                <hr />
                <p className='link'>Réctor
                    <br />
                    <span>{seminario.rector}</span></p>
            </div>
        </main>
        </>
    )
}

export default Academia