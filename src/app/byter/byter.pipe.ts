import {Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Pipe({
  name: 'byter'
})
export class ByterPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: number, useBinary?: boolean): string {
    // none of these values change so they should be constants
    const dp = new DecimalPipe('en-US');
    const binary = {kb: 1024, mb: 1048576, gb: 1073741824};
    const digital = {kb: 1000, mb: 1000000, gb: 1000000000};
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
    return value > 1000 ? dp.transform((value / divisor), '1.0-1') + suffix : value.toLocaleString();
  }
}
