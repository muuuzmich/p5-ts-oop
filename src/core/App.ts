import p5 from "p5";
import Circle from '../components/Circle';

export default class App {
    public app!: p5;
    protected components!: any[];

    constructor() {
        this.init();
        this.components = [
            new Circle(this.app),
        ]
    }

    private init() {
        const settings = (p5: p5) => {
            this.app = p5;
            p5.setup = () => this.setup();
            p5.draw = () => this.draw();
        }
        new p5(settings);
    }

    private setup() {
        const canvas = this.app.createCanvas(this.app.windowWidth, this.app.windowHeight, this.app.WEBGL);
        this.app.background(0);
        this.app.textSize(32);
        this.app.angleMode(this.app.DEGREES);
        
    }

    private draw() {
        this.components.forEach(component => {
            component.draw();
        })
    }
}
