export default class Net {
  static wget(url, callback) {
    let headers = new Headers;
    headers.append("Content-Type", "text/plain; charset=UTF-8");

    return fetch(url, headers).then(response => response.arrayBuffer()).then((buffer) => {
      let decoder = new TextDecoder("windows-1250");
      let text = decoder.decode(buffer);
      if (callback) return callback(text)
    })
  }
}