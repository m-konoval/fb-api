import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'catfilter',
    pure: false
})
export class CatFilterPipe implements PipeTransform {
    transform(items: any[], catFilter: string): any {
        if (!items || !catFilter) {
            return items;
        }

        return items.filter(item => item.type.indexOf(catFilter) !== -1);
    }
}
