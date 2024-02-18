import React from "react";

function GifList({ gifsData }) {
    return (
        <div>
            <ul>
                {gifsData.map((gif) => (
                    <li key={gif.id}>
                        <img src={gif.images.fixed_height.url} alt={gif.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GifList;