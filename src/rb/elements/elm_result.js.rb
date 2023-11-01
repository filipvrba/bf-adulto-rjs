import ['ENV'], '../env'
import 'ProductsBoard', './elm_products_board'

export default class ElmResult < HTMLElement
  def initialize
    super
    @l_btn_success_click = lambda { copy_data() }

    self.innerHTML = "<elm-spinner></elm-spinner>"
    products_data() do |data|
      @filter = Filter.new(data)
      @filtered_data = @filter.result(:adult, "1")
      init_elm(@filtered_data)
    end
  end

  def connectedCallback()
    document.add_event_listener(ProductsBoard::ENV_BTNSUCC, @l_btn_success_click)
  end

  def disconnectedCallback()
    document.remove_event_listener(ProductsBoard::ENV_BTNSUCC, @l_btn_success_click)
  end

  def copy_data()
    value = []

    @filtered_data.each do |row|
      value.push(row[:code])
    end

    navigator.clipboard.writeText(value.join("\n"))
  end

  def products_data(&block)
    url = ENV.VITE_BF_PRODUCTS
    Net.wget(url) do |products_raw|
      data = CSV.decode(products_raw, "code")
      block(data) if block
    end
  end

  def init_elm(products)
    if products.length == 0
      self.innerHTML = """
      <h2 class=''display-2>No dates found</h2>
      <p class='lead'>Please check the availability of the csv file from Shoptet.</p>
      """
      return
    end

    l_tr_dom = lambda do
      result = []

      products.each do |product|
        tr_dom = """
        <tr>
          <th scope='row'>#{product[:code]}</th>
          <td>#{product[:name]}</td>
          <td></td>
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
      <th scope='col' class='justify-content-end'>
        <button class='btn btn-success me-md-2' onclick='btnSuccessClick()' type='button'>✔</button>
      </th>
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
