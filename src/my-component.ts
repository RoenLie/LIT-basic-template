import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement( 'my-component' )
export class MyComponent extends LitElement {
  render() {
    return html`
      <div>my-component</div>
    `;
  }

  static styles = css`
  :host {
     background-color: pink;
     border: 1px solid black;
  }
  `;
}