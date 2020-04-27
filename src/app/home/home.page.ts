import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private tts: TextToSpeech) {}

  speak() : void {
    this.tts.speak({text: 'Hello Prince', rate: 1.3 })
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

}
