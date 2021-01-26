import Controller from '@ember/controller';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content='';
  @tracked info='';
  @tracked styles = '';
  MAX=100;

  get size() {
    return this.MAX - this.content.length;
  }

get style(){
  return this.styles;
}

@action
  update() {
    if (this.content.length > 0) {
      this.info = 'Note modifiée';
      if (this.content.length > 80) {
        this.styles = 'alert alert-danger';
      } else if (this.content.length > 50) {
        this.styles = 'alert alert-warning';
      } else {
        this.styles = 'alert alert-info';
      }
    } else {
      this.info = '';
      this.styles = '';
    }
  }

  @action
  save() {
    if (this.content.length > 0) {
      this.info = 'Note sauvegardée';
      this.styles = 'alert alert-success';
    } else {
      this.info = '';
    }
  }

@action
clear() {
  this.content = '';
  this.styles = 'alert alert-info';
  this.info = '';
}

}
