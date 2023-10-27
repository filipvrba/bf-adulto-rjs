export default class Filter {
  get () {
    return this._
  };

  constructor(data) {
    this._data = data
  };

  result(key, value) {
    let aResult = [];

    for (let columns of this._data) {
      if (columns[key] !== undefined) {
        if (columns[key].indexOf(value) > -1) aResult.push(columns)
      }
    };

    return aResult
  }
}