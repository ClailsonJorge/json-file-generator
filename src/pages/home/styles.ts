import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eee;

    textarea {
        border: none;
        width: 100%;
        height: 100%;
        color: #333;
        background: transparent;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            padding: 4px;
            margin: 16px;
            color: #333;
        }

        input {
            text-align: center;
            font-size: 24px;
            line-height: 28px;
            padding: 4px;
            border-radius: 4px;
            margin: 16px;
            width: 128px;
            align-self: center;
        }
    }

    button {
        cursor: pointer;
        border: none;
        width: 256px;
        background: cyan;
        border-radius: 8px;
        padding: 16px;
        margin-top: 16px;
        align-self: center;
        font-weight: bold;
        font-size: 24px;
        color: #555;
        box-shadow: 0px 1px 1px #555;
        transition: background 0.3s;

        &:hover{
            background: ${shade(0.2, 'cyan')}
        }

        a {
            color: #555;
            text-decoration: none;
        }
    }
`