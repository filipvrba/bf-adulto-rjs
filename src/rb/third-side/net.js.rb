export default class Net
  def self.wget url, &callback
    fetch(url)
    .then(lambda do |response|
      response.array_buffer()
    end)
    .then(lambda do |buffer|
      decoder = TextDecoder.new('windows-1250')
      text    = decoder.decode(buffer)

      callback(text) if callback
    end)
    .catch(lambda do |error|
      callback("") if callback
    end)
  end
end
