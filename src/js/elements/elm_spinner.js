export default class ElmSpinner extends HTMLElement {
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
<div class='d-flex justify-content-center'>
  <div class='spinner-border' role='status'>
    <span class='visually-hidden'>Loading...</span>
  </div>
</div>
    `}`;
    return this.innerHTML = template
  }
}