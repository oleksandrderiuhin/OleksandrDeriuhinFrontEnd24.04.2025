import React, { Component } from 'react';

class EmojiVoting extends Component {
    constructor(props) {
        super(props);

        this.emojis = ['😊', '😂', '😍', '😎', '😢'];
        const savedVotes = JSON.parse(localStorage.getItem('emojiVotes')) || {};

        const votes = {};
        this.emojis.forEach((emoji) => {
            votes[emoji] = savedVotes[emoji] || 0;
        });

        this.state = {
            votes,
            winner: null,
        };
    }

    handleVote = (emoji) => {
        this.setState(
            (prevState) => {
                const newVotes = {
                    ...prevState.votes,
                    [emoji]: prevState.votes[emoji] + 1,
                };
                return { votes: newVotes };
            },
            () => {
                localStorage.setItem('emojiVotes', JSON.stringify(this.state.votes));
            }
        );
    };

    handleShowResults = () => {
        const { votes } = this.state;
        let maxVotes = -1;
        let winner = null;

        for (let emoji in votes) {
            if (votes[emoji] > maxVotes) {
                maxVotes = votes[emoji];
                winner = emoji;
            }
        }

        this.setState({ winner });
    };

    handleClear = () => {
        const clearedVotes = {};
        this.emojis.forEach((emoji) => {
            clearedVotes[emoji] = 0;
        });

        localStorage.removeItem('emojiVotes');

        this.setState({
            votes: clearedVotes,
            winner: null,
        });
    };

    render() {
        const { votes, winner } = this.state;

        return (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <h2>Голосування за смайлик</h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    {this.emojis.map((emoji) => (
                        <div key={emoji}>
                            <button
                                onClick={() => this.handleVote(emoji)}
                                style={{
                                    fontSize: '2rem',
                                    padding: '10px 15px',
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                }}
                            >
                                {emoji}
                            </button>
                            <p>Голосів: {votes[emoji]}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '30px' }}>
                    <button
                        onClick={this.handleShowResults}
                        style={{
                            padding: '10px 20px',
                            fontSize: '1rem',
                            marginRight: '10px',
                        }}
                    >
                        Show Results
                    </button>

                    <button
                        onClick={this.handleClear}
                        style={{
                            padding: '10px 20px',
                            fontSize: '1rem',
                            backgroundColor: '#f44336',
                            color: 'white',
                        }}
                    >
                        Очистити результати
                    </button>
                </div>

                {winner && (
                    <div style={{ marginTop: '20px', fontSize: '1.5rem' }}>
                        🏆 Переможець: <strong>{winner}</strong>
                    </div>
                )}
            </div>
        );
    }
}

export default EmojiVoting;
