import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'async-pipe';
  promise:Promise<string>
  constructor()
  {
    this.promise=this.getPromise();
  }
  getPromise():Promise<string>
  {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve("Process is complete"),3000)
    })
  }
  /* promiseData:string;
  constructor()
  {
    this.getPromise().then((v:string)=>{
      this.promiseData=v;
    })
  }
  getPromise()
  {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve("Process Compeleted"),3000)
    })
  } */
}
