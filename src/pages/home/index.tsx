import React, { useCallback, FormEvent, useRef, useState } from 'react'
import faker from 'faker'
import { Container } from './styles'
import Button from '../../components/button'

const Home: React.FC = () => {
    const formRef = useRef(null)
    const [quantidade, setQuantidade] = useState(0)
    const [jsonOutput, setJsonOutput] = useState<Object[]>([])
    const [showTextarea, setShowTextarea] = useState(false)

    const handleSubmt = useCallback((event:FormEvent) => {
        event.preventDefault()
        const people = []
        for(let i = 0; i < quantidade; i++){
            const movies = []
            for(let j= 0; j < (faker.random.number(10) + 1); j++){
                const friends = []
                for(let q = 0; q < (faker.random.number(10) + 1); q++){
                    const friend = {
                        id: faker.random.uuid(),
                        name: faker.name.firstName(),
                        avatar: "https://i.pravatar.cc/300",
                        stars: faker.random.number(10)
                    }
                    friends.push(friend)
                }
                const movie = {
                    title: faker.random.words(),
                    description: faker.lorem.paragraph(1),
                    watched: faker.random.number(10),
                    avatar: faker.internet.avatar(),
                    friends
                }
                movies.push(movie)
            }
            const person = {
                id: faker.random.uuid(),
                avatar: "https://i.pravatar.cc/300",
                name: faker.name.findName(),
                job: faker.name.jobType(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                address: {
                    street: faker.address.streetName(),
                    zipCode: faker.address.zipCode(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    country: faker.address.country()
                },
                movies
            }
            people.push(person)
        }
        setJsonOutput(people)
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