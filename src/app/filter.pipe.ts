import { PipeTransform, Pipe } from '@angular/core';
import { IOrganisationInfo } from './Interface/IOrganisationInfo';

@Pipe({

    name:'filter'

})

export class FilterPipe implements PipeTransform

{
    transform(items: any[], searchText: string): IOrganisationInfo[] {
      if(!items) return [];
      if(!searchText) return items;
  searchText = searchText.toLowerCase();
  {
    return items.filter(user => user.name.indexOf(searchText) !== -1);
     }
  }
}