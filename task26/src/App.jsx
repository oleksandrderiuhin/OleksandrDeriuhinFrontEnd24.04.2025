import React, { useState, useEffect } from "react";

const emojis = ["😀", "😂", "😍", "😎", "🤯"];

export default function EmojiVoting() {
    const [votes, setVotes] = useState({});
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const savedVotes = localStorage.getItem("emojiVotes");
        if (savedVotes) {
            setVotes(JSON.parse(savedVotes));
        } else {
            const initialVotes = {};
            emojis.forEach((emoji) => (initialVotes[emoji] = 0));
            setVotes(initialVotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("emojiVotes", JSON.stringify(votes));
    }, [votes]);

    const handleVote = (emoji) => {
        setVotes((prev) => ({
            ...prev,
            [emoji]: prev[emoji] + 1,
        }));
    };

    const handleShowResults = () => {
        const maxVotes = Math.max(...Object.values(votes));
        const topEmoji = Object.keys(votes).find(
            (emoji) => votes[emoji] === maxVotes
        );
        setWinner(topEmoji);
    };

    const handleClearResults = () => {
        const resetVotes = {};
        emojis.forEach((emoji) => (resetVotes[emoji] = 0));
        setVotes(resetVotes);
        setWinner(null);
        localStorage.removeItem("emojiVotes");
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Emoji Voting</h1>

            <div style={{ fontSize: "2rem", marginBottom: "20px" }}>
                {emojis.map((emoji) => (
                    <div key={emoji} style={{ margin: "10px" }}>
            <span
                style={{ cursor: "pointer" }}
                onClick={() => handleVote(emoji)}
            >
              {emoji}
            </span>
                        <span style={{ marginLeft: "10px" }}>{votes[emoji] || 0}</span>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: "20px" }}>
                <button onClick={handleShowResults} style={{ marginRight: "10px" }}>
                    Show Results
                </button>
                <button onClick={handleClearResults}>Очистити результати</button>
            </div>

            {winner && (
                <h2 style={{ marginTop: "20px" }}>
                    🏆 Переможець: <span style={{ fontSize: "2rem" }}>{winner}</span>
                </h2>
            )}
        </div>
    );
}

