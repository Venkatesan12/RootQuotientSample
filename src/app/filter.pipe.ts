import { PipeTransform, Pipe } from '@angular/core';
import { IOrganisationInfo } from './Interface/IOrganisationInfo';

@Pipe({

    name:'filter'

})

export class FilterPipe implements PipeTransform

{
    transform(items: IOrganisationInfo[],prop : string,searchtech: string): IOrganisationInfo[] {
      if(!items) return [];
      if(!searchtech) return items;
      searchtech = searchtech.toLowerCase();
      console.log(searchtech)
  return items.filter(it => {
    return it[prop].toLowerCase().includes(searchtech);
});
  }
}