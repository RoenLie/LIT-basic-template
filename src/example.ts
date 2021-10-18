import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from "lit/directives/style-map.js";


@customElement( 'example-component' )
export class Example extends LitElement {
   @property( { type: String } ) text = "Example component";

   @state() color = 'pink';
   colors = [
      'pink',
      'orange',
      'green',
      'blue',
      'red'
   ];

   changeColor() {
      const max = this.colors.length;
      const random = Math.floor( Math.random() * max );
      this.color = this.colors[ random ];
   }

   render() {
      const styles = {
         backgroundColor: this.color
      };

      return html`
      <div
        style=${ styleMap( styles ) }
        @click=${ this.changeColor }
      >
        <span>${ this.text }</span>
      </div>
    `;
   }

   static styles = css`
  :host {
    overflow: hidden;
    display: grid;
    border-radius: 1rem;
    width: 25vw;
    height: 25vh;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);
    cursor: pointer;
  }
  div {
    display: grid;
    place-items: center;
    font-size: 2rem;
    user-select: none;
    text-align: center;
    padding: 1rem;
  }
  div:active {
    box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.5);
    cursor: pointer;
  }
  span {
    font-weight: bold;
  }
  `;
}


declare global {
   interface HTMLElementTagNameMap {
      'example-component': Example;
   }
};