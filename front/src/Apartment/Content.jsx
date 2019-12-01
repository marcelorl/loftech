import React, {useState, useEffect, Fragment} from 'react'
import { HEREMap, Marker } from 'here-maps-react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
import hospital from '../images/heart-medical.svg'
import bus from '../images/bus.svg'

import result from './result'

export default () => {
    // const params = useParams()

    const [res, setRes] = useState(null)

    useEffect(() => {
        if (result[0].hospital) {
            if(!Array.isArray(result[0].hospital)) {
                result[0].hospital = [result[0].hospital]
            }
        }

        if(result[0].publicTransport) {
            if(!Array.isArray(result[0].publicTransport)) {
                result[0].publicTransport = [result[0].publicTransport]
            }
        }

        setRes(result[0])
    }, [])

    if(!res) return null
console.log('----->', res)
    return (
        <Fragment>
            <div className="MuiGrid-root jss164 MuiGrid-container MuiGrid-spacing-xs-3">
                <div className="section-feat">
                    <img src="https://www.pontorh.com.br/wp-content/uploads/2017/06/trabalho-e1496837503264.jpg" alt=""/>
                    <div>
                        <h3>Este pode ser o apartamento dos seus sonhos que você tanto procurou!</h3>
                        <div>
                            Este não é um apartamento comum. O seu trabalho, localizado na rua XXXXX, está apenas a 900m
                            do seu apartamento. Isso é qualidade de vida garantida e muito mais tempo para você passar
                            com quem realmente importa, como sua família e seus amigos que você tanto gosta.
                        </div>
                    </div>
                </div>
            </div>
            {result[0].publicTransport && <div className="MuiGrid-root jss164 MuiGrid-container MuiGrid-spacing-xs-3">
                <div className="section-feat">
                    <div>
                        <h3>O transporte urbano na porta de casa</h3>
                        <div>
                            Nesses tempos que precisamos estar em diversos lugares em momentos tão curtos ficar preso no
                            trânsito não é uma opção. Morando no seu novo apartamento você fica perto das principais
                            vias de metrô e ônibus, desta forma tendo uma mobilidade super facilitada na cidade que nunca dorme.
                        </div>
                    </div>
                    <img src="https://www.ufrgs.br/humanista/wp-content/uploads/2019/05/imagem195547-800x445.jpg" alt=""/>
                </div>
            </div>}
            {result[0].hospital && <div className="MuiGrid-root jss164 MuiGrid-container MuiGrid-spacing-xs-3">
                <div className="section-feat">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQbZvJkyrVy24dOVWXuj6sZA4_aBtY_UCh42miN4zUCj2vQcC3w&s" alt=""/>
                    <div>
                        <h3>A saúde é tão importante quanto a sua nova moradia</h3>
                        <div>
                            Nós sabemos e ficamos felizes que você tenha o mesmo pensamento que nós. Morando no seu
                            apartamento você fica a 1000 metros dos principais hospitais da cidade tendo assim sempre uma
                            opção viável quando as coisas não estiverem tão bem.
                        </div>
                    </div>
                </div>
            </div>}
            <div className="MuiGrid-root jss164 MuiGrid-container MuiGrid-spacing-xs-3">
                <section className="jss365 here-map">
                    <HEREMap
                        appId="bFDOZ1cahNKVNTGQV00f"
                        appCode="8elG4aRfiDEZ2rjFyxeccA"
                        center={{ lat: res.latitude, lng: res.longitude }}
                        zoom={14}
                    >
                        <Marker lat={res.latitude} lng={res.longitude} />
                        {result[0].hospital && result[0].hospital.map(item => {
                            return (
                                <Marker lat={item.position[0]} lng={item.position[1]}>
                                    <img src={hospital} alt="" style={{width: '30px'}}/>
                                </Marker>
                            )
                        })}
                        {result[0].publicTransport && result[0].publicTransport.map(item => {
                            return (
                                <Marker lat={item.position[0]} lng={item.position[1]}>
                                    <img src={bus} alt="" style={{width: '30px'}}/>
                                </Marker>
                            )
                        })}
                        {/*<RouteLine shape={shape} strokeColor="#48dad0" lineWidth={4} />*/}
                    </HEREMap>
                    <hr className="MuiDivider-root jss366"/>
                </section>
                <section data-testid="transformation-after-before" className="jss365"></section>
            </div>
        </Fragment>
    )
}