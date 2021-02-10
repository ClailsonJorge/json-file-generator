import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;

    textarea {
        border: none;
        width: 100%;
        height: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        label {
            font-weight: bold;
            padding: 4px;            
        }

        &:first-child {
            margin: 10px;
        }

    }
`