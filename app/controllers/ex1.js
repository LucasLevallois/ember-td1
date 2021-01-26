import Controller from '@ember/controller';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content='Default';
  @tracked info = '';

  messageNote = '';
  @tracked styles = 'alert-info';
  const;
  MAX=100;

  get size() {
    return this.MAX - this.content.length;
  }

get style(){
  if(this.content.length > 0){
    return 'alert alert-info';
  }else{
    return '';
  }
}

@action
update(){
  if(this.content.length > 0){
    this.info = 'Note modifiée';
  }else{
    this.info = '';
  }
}

@action
save(){
  if(this.content.length > 0){
    this.info = 'Note sauvegardée';
    this.style = 'alert-success';
    this.messageNote = this.content.toString();
  }else{
    this.info = '';
  }
}

}
