import { Component } from '@angular/core';

import{ MyGraphsComponent } from './mygraphs.component';
import{ MyMenuComponent } from './menu.component';

@Component({
  selector: 'my-app',
  template: `
            <div class="container-fluid rounded">
              <div class="row">
              <div>
                <!-- <span>Title</span> -->
              </div>
            </div>

            <div class="row a2p-content">
              <p class='a2p-h1'>Demo</p>

              <div class="a2p-pad-top">
                  <my-menu [statsArray]="statsArray" (checkedInfo)=updateStats($event);></my-menu>
                <my-graphs [selectedStats]="selectedStats">
                </my-graphs>
              </div>
              
            </div>
          `,
  inputs: ['checkedInfo'],
  outputs: ['statsArray','selectedStats']
})
export class AppComponent {
  public statsArray: Array<string>;
   public selectedStats: Array<Boolean>;  // selected stats
    public checkedInfo: [number, boolean];

  /**
   *
   * @return nothing This is the root component of the demo. 
   */
   constructor()
   {
     // todo
     this.statsArray = ["stat1", "stat2"]; 
     this.selectedStats = [true, true]; // todo: get it from a different component that contains a checkbox
   } 

   private updateStats(ev: [number,boolean]){
     this.selectedStats[ev[0]]=ev[1];
   }
  
}