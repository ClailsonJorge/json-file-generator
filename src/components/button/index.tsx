import React from 'react'

interface ButtonProps {
    data: Object[]
}
const Button: React.FC<ButtonProps> = ({children, data}) => {
    return (
        <button type="button">
            <a href={`data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(data, null, '\t'))}`} download="file.json">{children}</a>
        </button>
    )
}

export default Button