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
      console.log(columns.adult);
      if (columns[key].indexOf(new RegExp(value)) > -1) aResult.push(columns);
      return aResult
    };

    return aResult
  }
}