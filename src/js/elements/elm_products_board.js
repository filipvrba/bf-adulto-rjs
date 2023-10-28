export default class ElmProductsBoard extends HTMLElement {
  constructor() {
    super();
    this.initElm()
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
      <div class='card rounded-3'>
        <div class='card-body p-4'>
          <div class='col col-lg-3'>
            <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
              <button class='btn btn-success me-md-2' type='button'>✔</button>
            </div>
          </div>
          <div class='col col-lg-6'>
            <elm-result></elm-result>
          </div>
        </div>
      </div>
    </div>
    `}`;
    return this.innerHTML = template
  }
}