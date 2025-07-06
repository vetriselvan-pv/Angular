import { Component, model, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncSubject, BehaviorSubject, ReplaySubject, scan, Subject, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-operator',
  imports: [CommonModule, FormsModule],
  templateUrl: './rxjs-operator.html',
  styleUrl: './rxjs-operator.scss',
})
export class RxjsOperator implements OnInit{
  behaviorSubject = new BehaviorSubject('Hello this is behavior subject');
  replaySubject = new ReplaySubject(2);
  replayObservable = this.replaySubject.asObservable().pipe(
    scan((acc:string[], curr:any) => { 
      return [...acc, curr];
    }, [] as string[])
  );
  asyncSubject = new AsyncSubject();
  subject = new Subject();

  voidSubject = new Subject<void>();
  voidObservable = this.voidSubject.asObservable().pipe(
    scan((acc:string[], curr:any) => { 
      return [...acc, curr];
    }, [] as string[])
  );

  subjectArray = signal<number[]>([0]);
  behaviorSubjectArray = signal<number[]>([0]);
  replaySubjectArray = signal<number[]>([0]);
  asyncSubjectArray = signal<number[]>([0]);
  asyncSubjectData = signal<string[]>([]);

  subjectText = model<string>('');
  behaviorSubjectText = model<string>('');
  replaySubjectText = model<string>('');
  asyncSubjectText = model<string>('');

  addBehaviorSubject() {
    this.behaviorSubjectArray.update((prev) => [...prev, 1]);
  }
  addReplaySubject() {
    this.replaySubjectArray.update((prev) => [...prev, 1]);
  }
  addAsyncSubject() {
    this.asyncSubjectArray.update((prev) => [...prev, 1]);
  }
  addSubject() {
    this.subjectArray.update((prev) => [...prev, 1]);
  }

  sendBehaviorSubject() {
    this.behaviorSubject.next(this.behaviorSubjectText());
  }
  sendReplaySubject() {
    this.replaySubject.next(this.replaySubjectText());
  }
  sendAsyncSubject() {
    this.asyncSubjectData.update((prev) => [...prev, this.asyncSubjectText()]);
    this.asyncSubject.next(this.asyncSubjectText());
  }
  sendSubject() {
    this.subject.next(this.subjectText());
  }

  ngOnInit(): void {
       
  }

  addSubscriber(){
    this.replaySubject.pipe(tap((data) => {
      console.log("replaySubject", data);
    }));
  }

  completeAsyncSubject(){
    this.asyncSubject.complete();
  }

  sendVoidSubject(){
    this.voidSubject.next();
  }
}
