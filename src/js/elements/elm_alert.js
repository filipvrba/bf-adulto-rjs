import ProductsBoard from "./elm_products_board";

export default class ElmAlert extends HTMLElement {
  constructor() {
    super();

    this._lBtnSuccessClick = () => {
      return this.enableAlert()
    };

    this._text = this.getAttribute("text");
    this._delay = this.getAttribute("delay")
  };

  connectedCallback() {
    return document.addEventListener(
      ProductsBoard.ENV_BTNSUCC,
      this._lBtnSuccessClick
    )
  };

  disconnectedCallback() {
    return document.removeEventListener(
      ProductsBoard.ENV_BTNSUCC,
      this._lBtnSuccessClick
    )
  };

  enableAlert() {
    this.initElm();
    return Time.delay(this._delay, () => this.innerHTML = "")
  };

  initElm() {
    let template = `${`
<div class='alert alert-success' role='alert'>
  ${this._text}
</div>
    `}`;
    return this.innerHTML = template
  }
}