import React, { useState } from "react";

function GifSearch({ onSubmit }) {
    const [search, setSearch] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter a Search Term:
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
            <button type="submit">Find Gifs</button>
        </form>
    );
}

export default GifSearch;