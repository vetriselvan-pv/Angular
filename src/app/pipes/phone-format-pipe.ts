import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('transform', value, args);
    if(typeof value === 'string' && args.length === 0){
      return value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }else if(typeof value === 'string' && args.length && args[0]){
      return value.replace(this.patternPhoneNumber[args[0] as keyof typeof this.patternPhoneNumber], this.formatPhoneNumber[args[0] as keyof typeof this.formatPhoneNumber]);
    }
    return value;
  }

  formatPhoneNumber = {
    'USA': '($1) $2-$3',
    'UK' : '$1 $2',
    'India' : '+91 $1 $2',
    'Australia' : '$1 $2 $3',
    'Germany' : '$1 $2',
    'France' : '$1 $2 $3 $4 $5',
    'Brazil' : '($1) $2-$3',
    'Japan' : '$1-$2-$3',
    'South Africa' : '$1 $2 $3',
    'Russia' : '8 ($1) $2-$3-$4',
  }

  patternPhoneNumber = {
    'USA': /(\d{3})(\d{3})(\d{4})/,
    'UK': /(\d{5})(\d{6})/,
    'India' : /(\d{5})(\d{5})/,
    'Australia' : /(\d{4})(\d{3})(\d{3})/,
    'Germany' : /(\d{3})(\d{8})/,
    'France' : /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
    'Brazil' : /(\d{2})(\d{5})(\d{4})/,
    'Japan' : /(\d{3})(\d{4})(\d{4})/,
    'South Africa' : /(\d{3})(\d{3})(\d{4})/,
    'Russia' : /(\d{3})(\d{3})(\d{2})(\d{2})/,
  }

}
