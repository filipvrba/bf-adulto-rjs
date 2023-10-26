import products from "../../csv/products.csv?raw";
import { ENV } from "../env";

export default class ElmResult extends HTMLElement {
  constructor() {
    super();
    this.productsData();
    this.initElm()
  };

  connectedCallback() {
    return null
  };

  disconnectedCallback() {
    return null
  };

  productsData() {
    return console.log(CSV.decode(products))
  };

  initElm() {
    let template = `${`
<table class='table'>
  <thead>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>First</th>
      <th scope='col'>Last</th>
      <th scope='col'>Handle</th>
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