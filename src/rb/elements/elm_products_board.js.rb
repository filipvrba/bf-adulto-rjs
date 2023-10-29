import ['ENV'], '../env'

export default class ElmProductsBoard < HTMLElement
  ENV_BTNSUCC = "btnSuccesClick"

  def initialize
    super
    @l_env_elmresult_dinit = lambda { init_btn() }
    
    init_elm()
    window.btn_success_click = btn_success_click
  end

  def btn_success_click()
    Events.emit(ENV_BTNSUCC)
    Time.delay(1000) do
      window.open(ENV.VITE_ADULTO)    
    end
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def init_elm()
    template = """
    <div class='col col-lg-8 col-xl-6'>
      <elm-alert text='Product IDs were copied to the clipboard.' delay='10000'></elm-alert>
      <div class='card rounded-3'>
        <div class='card-body p-4'>
          <elm-result></elm-result>
        </div>
      </div>
    </div>
    """

    self.innerHTML = template
  end
end
