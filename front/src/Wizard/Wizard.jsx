import React, {useState} from 'react'
import './Wizard.css'

export default ({onSearch}) => {
    const [data, setData] = useState({})

    const onSetData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="wizard">
            <div className="wizard__overlay"></div>
            <div className="wizard__form">
                <form>
                    <h2>Seja bem vindo ao loft experience!</h2>

                    <h3>
                        Vamos fazer algumas perguntas para nos conhecermos melhor e assim conseguirmos sugerir
                        a melhor opção para você. E aí, vamos lá?
                    </h3>

                    <div className="center margin-bottom">
                        <strong>Quanto você pensa em investir?</strong>
                        <div>
                            <input type="text" name="price" onChange={onSetData} />
                        </div>
                    </div>

                    <div className="center margin-bottom">
                        <strong>Qual bairro você deseja encontrar seu apê?</strong>
                        <div>
                            <input type="text" name="neighborhood" onChange={onSetData} />
                        </div>
                    </div>

                    <div className="center margin-bottom">
                        <strong>Você trabalha? Se sim, qual o endereço?</strong>
                        <div>
                            <input type="text" name="work" onChange={onSetData} />
                        </div>
                    </div>

                    <div className="center margin-bottom">
                        <strong>Você precisa de opções de hospitais perto?</strong>
                        <div>
                            <label htmlFor="hospital" className="margin-right">
                                Sim
                                <input type="radio" name="hospital" id="hospital" value={true} onClick={onSetData} />
                            </label>
                            <label htmlFor="hospital">
                                Não
                                <input type="radio" name="hospital" id="hospital" value={false} onClick={onSetData} />
                            </label>
                        </div>
                    </div>

                    <div className="center margin-bottom">
                        <strong>Você precisa de opções de transporte público perto?</strong>
                        <div>
                            <label htmlFor="transport" className="margin-right">
                                Sim
                                <input type="radio" name="transport" id="transport" value={true} onClick={onSetData} />
                            </label>
                            <label htmlFor="transport">
                                Não
                                <input type="radio" name="transport" id="transport" value={false} onClick={onSetData} />
                            </label>
                        </div>
                    </div>

                    <div className="center">
                        <button
                            style={{"width": "130px"}}
                            onClick={(e) => {
                                e.preventDefault()
                                onSearch(data)
                            }}>
                            Procurar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}