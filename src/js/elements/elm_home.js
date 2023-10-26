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
    //    template = """
    //<div class='container py-5 h-100'>
    //  <div class='row d-flex justify-content-center align-items-center h-100'>
    //    <elm-result></elm-result>
    //  </div>
    //</div>
    //    """
    let template = "<elm-result></elm-result>";
    return this.innerHTML = template
  }
}