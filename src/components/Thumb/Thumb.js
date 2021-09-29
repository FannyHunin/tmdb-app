import React from 'react'

//styles
import { Image } from './Thumb.styles'

export default function Thumb({ image, movieId, clickable }) {
    return (
        <div>
            <Image src={ image } alt='Movie thumb' />
        </div>
    )
}
