import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([]);

    const apiUrl =
        "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=oBM2m4r5nrTvWupNM3NozrKasasNs13S&rating=g";

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((response) => {
                const data = response.data;
                const newData = data.slice(0, 3);
                setGifs(newData);
            });
    }, []);

    function handleSubmit(search) {
        fetch(
            `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=oBM2m4r5nrTvWupNM3NozrKasasNs13S&rating=g`
        )
            .then((res) => res.json())
            .then((response) => {
                const data = response.data;
                const newData = data.slice(0, 3);
                setGifs(newData);
            });
    }

    return (
        <div>
            <GifSearch onSubmit={handleSubmit} />
            <GifList gifsData={gifs} />
        </div>
    );
}

export default GifListContainer;