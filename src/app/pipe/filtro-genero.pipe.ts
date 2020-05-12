import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroGenero'
})
export class FiltroGeneroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.genero.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
