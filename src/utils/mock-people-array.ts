import faker from 'faker'


const mockPeopleArray = (quantidade: number): Object[] => {
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
        return people
}

export default mockPeopleArray