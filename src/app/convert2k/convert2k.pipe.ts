import {Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Pipe({
  name: 'convert2k'
})
export class Convert2KPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: number, useBinary?: boolean): string {
    // let's use the Decimal pipe programmatically to help us out
    const dp = new DecimalPipe('en-US');
    // this is a demo of the power of destructuring
    // we have two objects with the same 3 properties
    const binary = {kb: 1024, mb: 1048576, gb: 1073741824};
    const digital = {kb: 1000, mb: 1000000, gb: 1000000000};
    // We use a ternary statement to choose which object
    // then assign the properties to variables based on their property names
    const {kb, mb, gb} = (useBinary) ? binary : digital;

    // these values change
    let divisor = 1;
    let suffix = '';

    if (value >= gb) {
      divisor = gb;
      suffix = 'GB';
    } else if (value >= mb) {
      divisor = mb;
      suffix = 'MB';
    } else if (value >= kb) {
      divisor = kb;
      suffix = 'KB';
    }
    return value >= kb ? dp.transform((value / divisor), '1.0-1') + suffix : value.toLocaleString();
  }
}
