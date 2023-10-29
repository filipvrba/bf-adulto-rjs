export default class Time {
  static delay(time, callback) {
    return setTimeout(callback, time)
  }
}