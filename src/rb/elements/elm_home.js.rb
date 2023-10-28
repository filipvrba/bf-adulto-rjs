export default class ElmHome < HTMLElement
  def initialize
    super
    
    init_elm()
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def init_elm()
#    template = """
#<div class='container py-5 h-100'>
#  <div class='row d-flex justify-content-center align-items-center h-100'>
#    <elm-result></elm-result>
#  </div>
#</div>
#    """
    template = "<elm-products-board></elm-products-board>"

    self.innerHTML = template
  end
end
