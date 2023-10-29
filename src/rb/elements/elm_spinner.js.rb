export default class ElmSpinner < HTMLElement
  def initialize
    super
    
    init_elm()
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def init_elm()
    template = """
<div class='d-flex justify-content-center'>
  <div class='spinner-border' role='status'>
    <span class='visually-hidden'>Loading...</span>
  </div>
</div>
    """

    self.innerHTML = template
  end
end
