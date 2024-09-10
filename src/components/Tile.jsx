import React from 'react';

function Tile ({ image, imgAlt, title, children }){
    return(
        <section>
            {image && <img src={image} alt={imgAlt} />}
            <h2>{title}</h2>
            {children}
        </section>

    );
}

export default Tile;