import 'products', '../../csv/products.csv?raw'
import ['ENV'], '../env'

export default class ElmResult < HTMLElement
  def initialize
    super

    products_data()

    init_elm()
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def products_data()
    puts CSV.decode(products)
  end

  def init_elm()
    template = """
<table class='table'>
  <thead>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>First</th>
      <th scope='col'>Last</th>
      <th scope='col'>Handle</th>
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
