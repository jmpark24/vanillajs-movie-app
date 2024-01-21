import { Store } from "../core/heropy";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'jmpark24 / ParkJongMoo',
  email: 'stylack@gmail.com',
  blog: 'https://dry-curry.tistory.com/',
  github: 'https://github.com/jmpark24',
  repository: 'https://github.com/jmpark24/vanillajs-movie-app'
});