import productsRaw from "../../csv/products.csv?raw";
import { ENV } from "../env";

export default class ElmResult extends HTMLElement {
  constructor() {
    super();

    this.productsData((data) => {
      this._filter = new Filter(data);
      let filteredData = this._filter.result("adult", "1");
      return this.initElm(filteredData)
    })
  };

  connectedCallback() {
    return null
  };

  disconnectedCallback() {
    return null
  };

  productsData(block) {
    let data = CSV.decode(productsRaw, "code");
    if (block) return block(data)
  };

  initElm(products) {
    let lTrDom = () => {
      let result = [];

      for (let product of products) {
        let trDom = `${`
        <tr>
          <th scope='row'>${product.code}</th>
          <td>${product.name}</td>
        </tr>
        `}`;
        result.push(trDom)
      };

      return result.join("\n")
    };

    let template = `${`
<table class='table'>
  <thead>
    <tr>
      <th scope='col'>ID</th>
      <th scope='col'>Name</th>
    </tr>
  </thead>
  <tbody>
    ${lTrDom()}
  </tbody>
</table>
    `}`;
    return this.innerHTML = template
  }
}