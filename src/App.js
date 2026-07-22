import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import GamesPage from "./pages/GamesPage/GamesPage.jsx";
import GuessNumberPage from "./pages/GuessNumberPage/GuessNumberPage.jsx";
import TicTacToePage from "./pages/TicTacToePage/TicTacToePage.jsx";
import MemoryGamePage from "./pages/MemoryGamePage/MemoryGamePage.jsx";
import RockPaperScissorsPage from "./pages/RockPaperScissorsPage/RockPaperScissorsPage.jsx";
import HangmanPage from "./pages/HangmanPage/HangmanPage.jsx";
import SimonSaysPage from "./pages/SimonSaysPage/SimonSaysPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import { Header, Nav, NavLink } from "./App.styled.js";

function App() {
  return (
    <>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Games</NavLink>
        </Nav>
      </Header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/guess-number" element={<GuessNumberPage />} />
        <Route path="/games/tic-tac-toe" element={<TicTacToePage />} />
        <Route path="/games/memory-game" element={<MemoryGamePage />} />
        <Route
          path="/games/rock-paper-scissors"
          element={<RockPaperScissorsPage />}
        />
        <Route path="/games/hangman" element={<HangmanPage />} />
        <Route path="/games/simon-says" element={<SimonSaysPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
