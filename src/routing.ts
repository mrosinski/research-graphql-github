export const Routing = {
  Home: () => '/',

  get Profile() {
    const Root = '/profile'

    return {
      Details: (login = ':login') => `${Root}/${login}/details`,
      NotFound: (login = ':login') => `${Root}/${login}/not-found`,
    }
  },
}
