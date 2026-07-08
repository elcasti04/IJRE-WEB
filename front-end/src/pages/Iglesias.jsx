import { useState } from "react"
import './style/iglesias.css'


function Iglesias () {
    const [iglesiaInfo, setIglesiaInfo] = useState('Cicuco')
    
    const iglesias = ['Cicuco', 'Magangué', 'Santa Ana', 'San Andres de Sotavento']
    const info = [
        {
        ubicacion : 'Cicuco',
        nombre : 'Iglesia Evangélica Principe de Paz',
        direccion : 'Sector Punta de Cartagena Calle Buenos Aires Carrera 6 # 10-39',
        culto : {
            domingo : 'Domingo - Culto 9:30 AM',
            lunes : '',
            martes: '',
            miercoles : '',
            jueves : 'Jueves - Culto 7:00 PM',
            viernes : '',
            sabado : ''
        },
        pastor : 'Job David Quintero Martinez',
        telPastor : {
            tel1 : '(300) 551-0385 (WhatsApp)',
            tel2 : '(323) 588-3369 (Celular)'
        },
        emailPastor : 'jobdavid19@hotmail.com',
        imagen : 'https://images.squarespace-cdn.com/content/v1/5cc47111fd67936ea7134b21/1629392314112-X0XLBP37GYCFQAC44F9J/cicuco.jpg?format=500w',
    },
    {
        ubicacion : 'Magangué',
        nombre : 'Iglesia Evangélica Principe de Paz',
        direccion : 'Sector Punta de Cartagena Calle Buenos Aires Carrera 6 # 10-39',
        culto : {
            domingo : 'Domingo - Culto 9:30 AM',
            lunes : '',
            martes: '',
            miercoles : '',
            jueves : 'Jueves - Culto 7:00 PM',
            viernes : '',
            sabado : ''
        },
        pastor : 'Yo que se',
        telPastor : {
            tel1 : '(300) 551-0385 (WhatsApp)',
            tel2 : '(323) 588-3369 (Celular)'
        },
        emailPastor : 'jobdavid19@hotmail.com',
        imagen : 'https://images.squarespace-cdn.com/content/v1/5cc47111fd67936ea7134b21/1629386879989-622WLFCUSRRKVOVUXSAI/zdenek-machacek-P4n7NQNOmFU-unsplash.jpg?format=500w',
    },
    {
        ubicacion : 'Santa Ana',
        nombre : 'Iglesia Principe de Paz Santa Ana',
        direccion : 'Kra 8F # 15-34',
        culto : {
            domingo : 'Domingo - 9:00 AM',
            lunes : '',
            martes: '',
            miercoles : '',
            jueves : '',
            viernes : '',
            sabado : ''
        },
        pastor : 'Henry López',
        telPastor : {
            tel1 : '(310) 843-5940 (WhatsApp)',
            tel2 : ''
        },
        emailPastor : 'famlopin@gmail.com',
        imagen : 'https://images.squarespace-cdn.com/content/v1/5cc47111fd67936ea7134b21/1629392326237-S4ZN35U3EAVWGBMV0TAR/Screen+Shot+2021-08-19+at+11.53.06+AM.png?format=500w',
    },
    {
        ubicacion : 'San Andres de Sotavento',
        nombre : 'Iglesia Evangélica Principe de Paz',
        direccion : 'San Andres',
        culto : {
            domingo : 'Domingo - Culto 9:30 AM',
            lunes : '',
            martes: '',
            miercoles : '',
            jueves : '',
            viernes : '',
            sabado : ''
        },
        pastor : 'Yo que se',
        telPastor : {
            tel1 : '(300) 551-0385 (WhatsApp)',
            tel2 : ''
        },
        emailPastor : 'jobdavid19@hotmail.com',
        imagen : 'https://images.squarespace-cdn.com/content/v1/5cc47111fd67936ea7134b21/1556557901073-RC8KYJE5ZAHXSCQG4MNZ/piedecuesta.jpg?format=500w',
    }
] 

const iglesiaActual = info.find((item) => item.ubicacion === iglesiaInfo)
    return (
       <>
       <main className="iglesias container-fluid col">
        <h4><strong><strong className='inicial'>C</strong>omunidad Eclesiástica </strong></h4>
        <h1 className=''>Somos una familia que ama la <br />Palabra de Dios</h1>
        <p className='col-10'>
			<i>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos mollitia eos ipsam? Perferendis debitis necessitatibus numquam quis voluptates quaerat illo tempora ex?
			</i>
		</p>

       
            <div className="contenedor d-flex flex-column">

                <div className="lista-iglesias d-flex">
                {iglesias.map((iglesia, index) => (
                    <ul key={index}>
                        <li style={{
                            cursor:'pointer',
                            listStyle:'none',
                            borderBottom: iglesia === iglesiaInfo ? '3px solid #01069b'
                            : 'none',
                            fontWeight: iglesia === iglesiaInfo ? 'bold' : 'normal',
                            fontFamily: 'italic'
                        }}
                        onClick={() => setIglesiaInfo(iglesia)}>
                            {iglesia}
                        </li> 
                    </ul>
                         
                ))} 
                </div> 

                <div className="contenedor- col">
                    {iglesiaActual && (
                        <>
                            <div className="imagen col-6 ">
                                <img src={iglesiaActual.imagen} alt="" />
                            </div>
                            <div className="infor col-4 ">
                                <h2>{iglesiaActual.nombre}</h2>
                                <p>Direccion: <br />
                                    <span>{iglesiaActual.direccion}</span>
                                </p>
                                <p className="d-flex flex-column"> Cultos: 
                                    <span>{iglesiaActual.culto.domingo}</span>
                                    <span>{iglesiaActual.culto.lunes}</span>
                                    <span>{iglesiaActual.culto.martes}</span>
                                    <span>{iglesiaActual.culto.miercoles}</span>
                                    <span>{iglesiaActual.culto.jueves}</span>
                                    <span>{iglesiaActual.culto.viernes}</span>
                                    <span>{iglesiaActual.culto.sabado}</span>
                                </p>
                                <p className="d-flex flex-column">
                                    Pastor:  
                                    <span>{iglesiaActual.pastor}</span>
                                    <span>{iglesiaActual.telPastor.tel1}</span>
                                    <span>{iglesiaActual.telPastor.tel2}</span>
                                    <span>{iglesiaActual.emailPastor}</span>
                                </p>
                            </div>
                        </>
                    )}
                </div>  
            </div>
       
       
       </main>
       </>
    )
}

export default Iglesias