import 'ProductsBoard', './elm_products_board'

export default class ElmAlert < HTMLElement
  def initialize
    super
    @l_btn_success_click = lambda { enable_alert() }
    
    @text  = self.get_attribute("text")
    @delay = self.get_attribute("delay")
  end

  def connectedCallback()
    document.add_event_listener(ProductsBoard::ENV_BTNSUCC, @l_btn_success_click)
  end

  def disconnectedCallback()
    document.remove_event_listener(ProductsBoard::ENV_BTNSUCC, @l_btn_success_click)
  end

  def enable_alert()
    init_elm()
    Time.delay(@delay) do
      self.innerHTML = ""
    end
  end

  def init_elm()
    template = """
<div class='alert alert-success' role='alert'>
  #{@text}
</div>
    """

    self.innerHTML = template
  end
end
