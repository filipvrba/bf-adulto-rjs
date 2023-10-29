export default class Events
  def self.emit(event, data = nil)
    env = CustomEvent.new(event, {
      detail: data
    })
    document.dispatchEvent(env)
  end
end
