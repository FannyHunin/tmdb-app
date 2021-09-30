import React from 'react';

//styles
import { Wrapper, Image } from './Actor.styles';

export default function Actor({ name, character, imageUrl }) {
    return (
        <div>
            <Wrapper>
                <Image src={imageUrl} alt='actor thumb' />
                <h3>{name}</h3>
                <p>{character}</p>
            </Wrapper>
        </div>
    )
}
