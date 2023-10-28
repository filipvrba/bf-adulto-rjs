export default class ElmHome extends HTMLElement {
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
<div class='container py-5 h-100'>
  <div class='row d-flex justify-content-center align-items-center h-100'>
    <header class='pricing-header p-3 pb-md-4 mx-auto text-center'>
      <h1 class='display-4 fw-normal'>Copy IDs</h1>
    </header>
    <elm-products-board></elm-products-board>
  </div>
</div>
    `}`;
    return this.innerHTML = template
  }
}