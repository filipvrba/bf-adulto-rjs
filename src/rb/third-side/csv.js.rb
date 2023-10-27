export default class CSV
  SYM_SPLIT = ';'

  def self.decode(data_raw)
    a_data      = data_raw.split("\n")
    a_data_head = a_data[0].sub(/#{SYM_SPLIT}$/, '').split(SYM_SPLIT)
    m_data_tail = a_data; m_data_tail.shift()
    a_result = []

    m_data_tail.each do |row|
      a_columns = row.split(SYM_SPLIT)

      d_row = CSV.row_split(a_data_head, a_columns)
        a_result.push(d_row)
      end

      return a_result
    end

  def self.row_split(heads, columns)
    d_result_row = {}

    (0...heads.length).step(1) do |i|
      unless columns[i] == undefined
        head = heads[i].trim()
        d_result_row[head] = columns[i].gsub("\"", '')
        next
      else
        break
      end
    end

    return d_result_row
  end
end
