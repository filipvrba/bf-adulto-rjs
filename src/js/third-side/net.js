export default class Net {
  static wget(url, callback) {
    return fetch(url).then((response) => {
      console.log(response);
      return response.arrayBuffer()
    }).then((buffer) => {
      let decoder = new TextDecoder("windows-1250");
      let text = decoder.decode(buffer);
      if (callback) return callback(text)
    }).catch((error) => {
      if (callback) return callback("")
    })
  }
}