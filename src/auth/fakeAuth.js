const LOGIN = "mari";
const PASSWORD = "mari_777";
const CURRENT_USER_KEY = "mini-games-user";

export const fakeAuth = {
  signIn(login, password) {
    if (login !== LOGIN || password !== PASSWORD) {
      throw new Error("Incorrect login or password");
    }

    const user = { login: LOGIN };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

    return user;
  },

  signOut() {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)) || null;
    } catch {
      return null;
    }
  },
};
