import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularApiService {

  constructor() { }

  public timer$ = interval(1000).pipe( 
    map((res) => `Timer : ${res}`)
  );

    timerLog = toSignal(this.timer$, {
    initialValue: 'Loading ...',
    manualCleanup: true,
  });
}
