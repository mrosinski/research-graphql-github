export const Routing = {
  Home: () => '/',
  Profile: (login = ':login') => `/profile/${login}`,
}
