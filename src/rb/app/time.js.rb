export default class Time
  def self.delay(time, &callback)
    return setTimeout(callback, time)
  end
end
