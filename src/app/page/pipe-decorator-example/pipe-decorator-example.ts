import { Component, model, OnInit, signal } from '@angular/core';
import { PhoneFormatPipe } from '../../pipes/phone-format-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe-decorator-example',
  imports: [PhoneFormatPipe, FormsModule],
  templateUrl: './pipe-decorator-example.html',
  styleUrl: './pipe-decorator-example.scss'
})
export class PipeDecoratorExample  implements OnInit{
  phoneNumber = model('');
  country = model('');
  numberArray = signal<{ country: string, phoneNumber: string }[]>([]);

  ngOnInit(): void {
    this.numberArray.set([
      { country: 'USA', phoneNumber: '1234567890' },
      { country: 'UK', phoneNumber: '12345678900' },
      { country: 'India', phoneNumber: '1234567890' },
      { country: 'Australia', phoneNumber: '1234567890' },
      { country: 'Germany', phoneNumber: '123456789012' },
      { country: 'France', phoneNumber: '1234567890' },
      { country: 'Brazil', phoneNumber: '12345678907' },
      { country: 'Japan', phoneNumber: '12345678907' },
      { country: 'South Africa', phoneNumber: '12345678907' },
      { country: 'Russia', phoneNumber: '1234567890' },
    ])
  }

  addNumber() {
    this.numberArray.update(prev => [...prev, { country: this.country(), phoneNumber: this.phoneNumber() }]);
    this.phoneNumber.set('')
  }
}
