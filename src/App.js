import { useCallback, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import GamesPage from "./pages/GamesPage/GamesPage.jsx";
import GuessNumberPage from "./pages/GuessNumberPage/GuessNumberPage.jsx";
import TicTacToePage from "./pages/TicTacToePage/TicTacToePage.jsx";
import MemoryGamePage from "./pages/MemoryGamePage/MemoryGamePage.jsx";
import RockPaperScissorsPage from "./pages/RockPaperScissorsPage/RockPaperScissorsPage.jsx";
import HangmanPage from "./pages/HangmanPage/HangmanPage.jsx";
import SimonSaysPage from "./pages/SimonSaysPage/SimonSaysPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import AuthModal from "./components/AuthModal/AuthModal.jsx";
import { fakeAuth } from "./auth/fakeAuth.js";

import { Header, Nav, NavLink } from "./App.styled.js";
import { AuthActions, AuthButton, UserName } from "./AuthHeader.styled.js";

function App() {
  const [user, setUser] = useState(() => fakeAuth.getCurrentUser());
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openAuth = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  const closeAuth = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const handleAuth = (authenticatedUser) => {
    setUser(authenticatedUser);
  };

  const handleLogout = () => {
    fakeAuth.signOut();
    setUser(null);
  };

  return (
    <>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>

          {user && <NavLink to="/games">Games</NavLink>}
        </Nav>

        <AuthActions>
          {user ? (
            <>
              <UserName>Hi, {user.login}</UserName>

              <AuthButton type="button" onClick={handleLogout}>
                Log Out
              </AuthButton>
            </>
          ) : (
            <AuthButton type="button" $primary onClick={openAuth}>
              Log In
            </AuthButton>
          )}
        </AuthActions>
      </Header>

      <Routes>
        <Route path="/" element={<HomePage user={user} onLogin={openAuth} />} />

        <Route
          path="/games"
          element={user ? <GamesPage /> : <Navigate to="/" replace />}
        />

        <Route
          path="/games/guess-number"
          element={user ? <GuessNumberPage /> : <Navigate to="/" replace />}
        />

        <Route
          path="/games/tic-tac-toe"
          element={user ? <TicTacToePage /> : <Navigate to="/" replace />}
        />

        <Route
          path="/games/memory-game"
          element={user ? <MemoryGamePage /> : <Navigate to="/" replace />}
        />

        <Route
          path="/games/rock-paper-scissors"
          element={
            user ? <RockPaperScissorsPage /> : <Navigate to="/" replace />
          }
        />

        <Route
          path="/games/hangman"
          element={user ? <HangmanPage /> : <Navigate to="/" replace />}
        />

        <Route
          path="/games/simon-says"
          element={user ? <SimonSaysPage /> : <Navigate to="/" replace />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <AuthModal isOpen={isAuthOpen} onClose={closeAuth} onAuth={handleAuth} />
    </>
  );
}

export default App;
