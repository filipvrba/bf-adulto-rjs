export default class Net
  def self.wget url, &callback
    headers = Headers.new
    headers.append('Content-Type','text/plain; charset=UTF-8')

    fetch(url, headers)
    .then(lambda do |response|
      response.array_buffer()
    end)
    .then(lambda do |buffer|
      decoder = TextDecoder.new('windows-1250')
      text    = decoder.decode(buffer)

      callback(text) if callback
    end)
  end
end
