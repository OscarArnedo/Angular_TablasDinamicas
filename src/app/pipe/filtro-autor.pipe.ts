import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAutor'
})
export class FiltroAutorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.autor.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
