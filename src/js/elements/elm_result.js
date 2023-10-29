//import 'productsRaw', '../../csv/products.csv?raw'
import { ENV } from "../env";
import ProductsBoard from "./elm_products_board";

export default class ElmResult extends HTMLElement {
  constructor() {
    super();

    this._lBtnSuccessClick = () => {
      return this.copyData()
    };

    this.innerHTML = "<elm-spinner></elm-spinner>";

    this.productsData((data) => {
      this._filter = new Filter(data);
      this._filteredData = this._filter.result("adult", "1");
      return this.initElm(this._filteredData)
    })
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

  copyData() {
    let value = [];

    for (let row of this._filteredData) {
      value.push(row.code)
    };

    return navigator.clipboard.writeText(value.join("\n"))
  };

  productsData(block) {
    return Net.wget(ENV.VITE_BF_PRODUCTS, (productsRaw) => {
      let data = CSV.decode(productsRaw, "code");
      if (block) return block(data)
    })
  };

  initElm(products) {
    let lTrDom = () => {
      let result = [];

      for (let product of products) {
        let trDom = `${`
        <tr>
          <th scope='row'>${product.code}</th>
          <td>${product.name}</td>
          <td></td>
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
      <th scope='col' class='justify-content-end'>
        <button class='btn btn-success me-md-2' onclick='btnSuccessClick()' type='button'>✔</button>
      </th>
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