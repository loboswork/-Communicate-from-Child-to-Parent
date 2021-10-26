import { LightningElement } from 'lwc';

export default class Numerator extends LightningElement {
    counter = 0;
    handleIncrement() {
      console.log('handleIncrement start');
      this.counter++;
    }
    handleDecrement() {
      this.counter--;
    }
    handleMultiply(event) {
      console.log('Multiply start');
      const factor = event.detail;
      this.counter *= factor;
    }
    handleDivide(event) {
      console.log('Divide start');
      const factor = event.detail;
      this.counter /= factor;
    }
}