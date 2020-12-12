import { Pipe, PipeTransform } from '@angular/core';
import { News } from './news.service';

@Pipe({
    name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {
    transform(news: News[], search: string = ''): News[] {
        if (!search.trim()) {
            return news;
        }

        return news.filter(n => {
            return n.source.name.toLocaleLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
    }
}
