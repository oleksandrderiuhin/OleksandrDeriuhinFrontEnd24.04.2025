import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SWAPI Interface</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="card shadow p-4">
                    <h1 className="mb-4 text-center">SWAPI Explorer</h1>

                    <div className="row g-3 align-items-center mb-4">
                        <div className="col-md-4">
                            <label htmlFor="categorySelect" className="form-label">Виберіть категорію:</label>
                            <select id="categorySelect" className="form-select">
                                <option value="people">Персонажі</option>
                                <option value="films">Фільми</option>
                                <option value="starships">Зорельоти</option>
                                <option value="vehicles">Транспорт</option>
                                <option value="species">Види</option>
                                <option value="planets">Планети</option>
                            </select>
                        </div>
                        <div className="col-md-8">
                            <label htmlFor="searchInput" className="form-label">Пошук:</label>
                            <input type="text" id="searchInput" className="form-control" placeholder="Введіть назву для пошуку..." />
                        </div>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-center">Результати</h2>
                        <div id="results-container" className="list-group">
                            <p className="text-center text-muted mt-3">Тут будуть відображатися результати вашого пошуку.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;