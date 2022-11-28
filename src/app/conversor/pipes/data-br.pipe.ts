import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEn: string): string {
    let data = new Date(dataEn);

    if (!dataEn) {
      return '';
    }

    const dataArr = dataEn.split('-');

    if(dataArr.length !== 3) {
      return dataEn;
    }

    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
  }

}
