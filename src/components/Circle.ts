import BaseComponent from "./base";

export default class Circle extends BaseComponent {
  draw(): void {
    this.app.background(0);
    let time = this.app.millis();
    this.app.rotateY(time / 100);
    this.app.fill("rgba(0,255,0, 0)");
    this.app.sphere(100);
    this.app.stroke("green");
    this.app.box(200, 200);
  }
}
