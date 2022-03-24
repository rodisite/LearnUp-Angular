import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  public result: string = '';

  transform(value: number, locale: string): string {
    const numberStr = value.toFixed(3);
    let separator: string;

    switch (locale) {
      case 'ru-RU':
        separator = " ";
        this.result = numberStr.replace('.', ',').replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
        break
      case 'en-US':
        separator = ",";
        this.result = numberStr.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator)
        break
    }
    return this.result;

    // return value.toLocaleString(locale);
  }

}
