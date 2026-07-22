import './style/academia.css'

function Academia () {
        
    const seminario = {
        rector : 'Marco Fidel Orozco Santana',
        ftRector : 'https://tse3.mm.bing.net/th/id/OIP.xJ2Zt7I5C_Axd_NPh4m5YQHaEC?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3',
        logo : 'https://tse1.mm.bing.net/th/id/OIP.Z9fLCmBQYvC88J-basHVrwHaE8?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3',
        fotoEstudiantes : {
            f1 : 'https://tse1.explicit.bing.net/th/id/OIP.OhfQIxikufA7cJugKoiGBQHaEo?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3',
            f2 : 'https://tse3.mm.bing.net/th/id/OIP.htzmM6SqS_93l20QBAt8_QHaE8?cb=thfc1falcon2&w=1500&h=1001&rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        descripcion : `Somos una familia que ama la Palabra de Dios Somos una congregación reformada en San Pedro, Sucre. Creemos que la Biblia es la autoridad suprema para la fe y la vida, y queremos que cada persona que llegue encuentre un hogar espiritual.`
    }
    
    return (
        <>
        <main className="academia container col">
            <h1>Preparacion para la gran Comisión</h1>
            <p>
                <i>
                    Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo
                </i>
            </p>
            <br />
            <div className='logo-seminario d-flex justify-content-center'>
                <img className='col-5 rounded-5' src={seminario.logo} alt="" />
            </div>
            <br />
            <hr />

            <p className='col-12'><strong>El Seminario Reformado Gracia sobre Gracia</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis ex, porro sapiente laudantium minima. Dicta dignissimos accusantium nam, deserunt reprehenderit laborum, repudiandae illo corporis, deleniti repellendus id autem incidunt.</p>
            <div className='d-flex justify-content-center align-items-center'>
            <p className='col-6'>Lorem ipsum dolor <strong>Rector: {seminario.rector}</strong> adipisicing elit. Cumque optio quisquam iure rerum, exercitationem, totam obcaecati maxime facere tempora a eum recusandae dolorem labore, laboriosam modi. Vero eligendi alias quo?</p>
            <img className='rector col-4' src={seminario.ftRector} alt="" />
            </div>

            <p>{seminario.descripcion}</p>
            <div className='d-flex justify-content-around'>
                <img className='estudiantes col-5' src={seminario.fotoEstudiantes.f1} alt="" />
                <img className='estudiantes col-5' src={seminario.fotoEstudiantes.f2} alt="" />
            </div>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt accusamus repudiandae atque sed officia nam maiores exercitationem ipsum praesentium sunt modi, nisi velit. Sequi, unde voluptatibus. Odit, quos sed!
            </p>
        </main>
        </>
    )
}

export default Academia