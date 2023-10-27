export default class Filter
  attr_reader data

  def initialize(data)
    @data = data
  end

  def result(key, value)
    a_result = []

    @data.each do |columns|
      puts columns[:adult]
      if columns[key].index(/#{value}/) > -1
        a_result.push(columns)
      end
      return a_result
    end
    return a_result
  end
end
