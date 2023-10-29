import { ENV } from "../env";

export default class ElmProductsBoard extends HTMLElement {
  constructor() {
    super();
    this._lEnvElmresultDinit = () => initBtn();
    this.initElm();
    window.btnSuccessClick = this.btnSuccessClick.bind(this)
  };

  btnSuccessClick() {
    Events.emit(ElmProductsBoard.ENV_BTNSUCC);
    return Time.delay(1_000, () => window.open(ENV.VITE_ADULTO))
  };

  connectedCallback() {
    return null
  };

  disconnectedCallback() {
    return null
  };

  initElm() {
    let template = `${`
    <div class='col col-lg-8 col-xl-6'>
      <elm-alert text='Product IDs were copied to the clipboard.' delay='10000'></elm-alert>
      <div class='card rounded-3'>
        <div class='card-body p-4'>
          <elm-result></elm-result>
        </div>
      </div>
    </div>
    `}`;
    return this.innerHTML = template
  }
};

ElmProductsBoard.ENV_BTNSUCC = "btnSuccesClick"