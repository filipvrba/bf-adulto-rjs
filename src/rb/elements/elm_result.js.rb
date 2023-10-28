import 'productsRaw', '../../csv/products.csv?raw'
import ['ENV'], '../env'

export default class ElmResult < HTMLElement
  def initialize
    super

    products_data() do |data|
      @filter = Filter.new(data)
      filtered_data = @filter.result(:adult, "1")
      init_elm(filtered_data)
    end
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def products_data(&block)
    data = CSV.decode(productsRaw, "code")
    block(data) if block
  end

  def init_elm(products)
    l_tr_dom = lambda do
      result = []

      products.each do |product|
        tr_dom = """
        <tr>
          <th scope='row'>#{product[:code]}</th>
          <td>#{product[:name]}</td>
        </tr>
        """
        result.push(tr_dom)
      end
      return result.join("\n")
    end

    template = """
<table class='table'>
  <thead>
    <tr>
      <th scope='col'>ID</th>
      <th scope='col'>Name</th>
    </tr>
  </thead>
  <tbody>
    #{l_tr_dom()}
  </tbody>
</table>
    """

    self.innerHTML = template
  end
end
