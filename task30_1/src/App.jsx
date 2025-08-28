import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData, clearData } from "./todoSlice";

const App = () => {
    const [url, setUrl] = useState("https://swapi.py4e.com/api/people/1/");
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.swapi);

    const handleFetch = () => {
        if (url.trim() === "") return;
        dispatch(fetchSwapiData(url));
    };

    return (
        <div style={{ maxWidth: "800px", margin: "20px auto", fontFamily: "Arial" }}>
            <h1>SWAPI</h1>


            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ width: "70%" }}
            />
            <button onClick={handleFetch}>Get info</button>


            <div style={{ marginTop: "20px" }}>
                {status === "loading" && <p>Loading...</p>}
                {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}
                {data && (
                    <pre
                        style={{
                            background: "#f4f4f4",
                            padding: "10px",
                            borderRadius: "5px",
                            textAlign: "left",
                            overflowX: "auto",
                        }}
                    >
            {JSON.stringify(data, null, 2)}
          </pre>
                )}
            </div>


            <footer style={{ marginTop: "20px" }}>
                <button
                    onClick={() => dispatch(clearData())}
                    style={{ background: "orange", padding: "10px 20px" }}
                >
                    Clear
                </button>
            </footer>
        </div>
    );
};

export default App;
