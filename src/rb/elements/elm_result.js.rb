import 'productsRaw', '../../csv/products.csv?raw'
import ['ENV'], '../env'

export default class ElmResult < HTMLElement
  def initialize
    super

    products_data() do |data|
      @filter = Filter.new(data)

      puts @filter.result(:adult, "1")
      init_elm(data)
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
    template = """
<table class='table'>
  <thead>
    <tr>
      <th scope='col'>ID</th>
      <th scope='col'>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td colspan='2'>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    """

    self.innerHTML = template
  end
end
