import { HttpClient } from '@angular/common/http';
import {
  Component,
  effect,
  EffectCleanupFn,
  EffectCleanupRegisterFn,
  inject,
  Injector,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map, of, Subject, takeUntil, timer } from 'rxjs';
import { AngularApiService } from '../../service/angular-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-api',
  imports: [CommonModule],
  templateUrl: './angular-api.html',
  styleUrl: './angular-api.scss',
})
export class AngularApi implements OnInit {
  URL = './json/country.json';
  private http: HttpClient = inject(HttpClient);
  countryList: Signal<any> = signal([]);
  private _destroy$: Subject<any> = new Subject();

  country$ = this.http.get<any>(this.URL).pipe(
    takeUntil(this._destroy$),
    map((res: any) => res)
  );

  date = new Date().toDateString();
  status = signal<'Init'| 'Loading' | 'Completed'| ''>('');

  // timer$ = interval(1000);
  // timerLog = toSignal(this.timer$, {
  //   initialValue: 0,
  //   equal: (a: number, b: number) => {
  //     console.log(a, b);
  //     return b === 5;
  //   },
  // });

  private _injector = inject(Injector);

  constructor() {
    /**
     * if you pass the injector parameter this will give the provision to use the effect outside the injection context also
     */
    effect(
      /**
       * 
       * @param onCleanup When Is effectCleanup() Triggered?
          When component is destroyed (if effect is tied to the component lifecycle)
          When signal dependencies change, and the effect reruns
       */
      (onCleanup) => {
        console.log('country value :', this.countryList());
        onCleanup(() => {
          console.log('clean up callback triggered');
        });
      }
    );
  }

  ngOnInit(): void {
    this.countryList = toSignal(
      this.http.get<any>(this.URL).pipe(
        takeUntil(this._destroy$),
        map((res: any) => res)
      ),
      {
        manualCleanup: true,
      }
    );


  }

  requestChange(status:"" | "Init" | "Loading" | "Completed"){
    this.status.set(status)
  }

  stopTimer() {
    // this._destroy$.next(null);
    // this._destroy$.complete();
    // this.timer$.next(4)
  }

  stopTimerLog() {
    // this.timerLog.destroy()
  }

  consoleTimerLog() {
    // console.log(this.timerLog());
  }
}
