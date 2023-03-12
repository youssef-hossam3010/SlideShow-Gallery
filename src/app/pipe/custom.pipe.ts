import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any): unknown  {
    var s = args[0]||"*";
    return value.split("").join(s);
  }

}
