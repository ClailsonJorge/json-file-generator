import React, { useCallback, FormEvent, useRef, useState } from 'react'

import mockPeopleArray from '../../utils/mock-people-array'
import { Container } from './styles'
import Button from '../../components/button'

const Home: React.FC = () => {
    const formRef = useRef(null)
    const [quantidade, setQuantidade] = useState(0)
    const [jsonOutput, setJsonOutput] = useState<Object[]>([])
    const [showTextarea, setShowTextarea] = useState(false)

    const handleSubmt = useCallback((event:FormEvent) => {
        event.preventDefault()
        setJsonOutput(mockPeopleArray(quantidade))
    }, [quantidade])

    const handleChangeQuantidade = useCallback((event)=>{
        setQuantidade(event.target.value)
    }, [])

    const handleShowTextarea = useCallback(() => {
        showTextarea ? setShowTextarea(false) : setShowTextarea(true)
    }, [showTextarea])

    return (
        <Container>
            {!showTextarea && (
                <form method="get" ref={formRef} onSubmit={handleSubmt}>
                    <label htmlFor="">Quantidades de pessoas</label>
                    <input name="quantidade" type="number" min="0" max="100" value={quantidade} onChange={handleChangeQuantidade}/>
                    <button type="submit">Selecionar</button>
                </form>
            )}

            {(!!jsonOutput.length && !showTextarea) && (
                <Button data={jsonOutput}>Download .JSON</Button>
            )}                

            {!!jsonOutput.length && (
                <button type="button" onClick={handleShowTextarea}>{showTextarea ? "Voltar" : "Apresentar Aqui"}</button>
            )}

            {(!!jsonOutput.length && showTextarea) && (
                <textarea>
                    {JSON.stringify(jsonOutput, null, '\t')}
                </textarea>
            )}
        </Container>
    )
}
export default Home