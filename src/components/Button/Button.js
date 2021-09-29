import React from 'react'

//styles
import { Wrapper } from '../Button/Button.styles'

export default function Button({ text, callback }) {
    return (
        <Wrapper type="button" onClick={callback}>
            {text}
        </Wrapper>
    )
}