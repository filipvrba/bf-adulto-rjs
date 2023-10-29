export default class Events {
  static emit(event, data=null) {
    let env = new CustomEvent(event, {detail: data});
    return document.dispatchEvent(env)
  }
}