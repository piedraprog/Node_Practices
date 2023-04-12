import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToText',
})
export class HtmlToTextPipe implements PipeTransform {
  transform(value: string): any {
    const parsedValue = new DOMParser().parseFromString(value, 'text/html');
    const bodyText = parsedValue.body.innerText.trim();
    const hasLink = parsedValue.body.querySelector('a');
    console.log(bodyText)
    if (hasLink) {

      const newBodyText = bodyText.replace(/https:\/\/.+?(?=\s|$)/g, '')


      const linkUrl = hasLink.getAttribute('href');
      const linkText = hasLink.innerText;
      return newBodyText + `<a class ="text-accent-1 underline hover:text-accent-2" href="${linkUrl}">${linkText}</a>`;
    } else {
      return bodyText;
    }
  }
}
