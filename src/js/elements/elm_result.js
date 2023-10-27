import productsRaw from "../../csv/products.csv?raw";
import { ENV } from "../env";

export default class ElmResult extends HTMLElement {
  constructor() {
    super();

    this.productsData((data) => {
      this._filter = new Filter(data);
      console.log(this._filter.result("adult", "1"));
      return this.initElm(data)
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
    let template = `${`
<table class='table'>
  <thead>
    <tr>
      <th scope='col'>ID</th>
      <th scope='col'>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td colspan='2'>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    `}`;
    return this.innerHTML = template
  }
}