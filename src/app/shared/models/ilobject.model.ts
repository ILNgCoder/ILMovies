import * as moment from 'moment';

export class ILObject {
  id: Number = 0;
  name: string = '';
  url: string = '';
  youtubeId: string = '';
  tags: string = '';
  description: string = '';
  isActual: boolean = true;
  createdOn: string = '';

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.url = data.url;
      this.youtubeId = data.youtubeId;
      this.tags = data.tags;
      this.description = data.description;
      this.isActual = data.isActual;
      this.createdOn = moment(data.createdOn).format('DD.MM.YYYY HH:mm:ss');
    }
  }

  get mqImage(): string {
    return 'https://ytimg.googleusercontent.com/vi/' + this.youtubeId + '/mqdefault.jpg';
  }

  get bgmqImage(): string {
    return 'url(https://ytimg.googleusercontent.com/vi/' + this.youtubeId + '/mqdefault.jpg)';
  }

  get maxresImage(): string {
    return 'https://ytimg.googleusercontent.com/vi/' + this.youtubeId + '/maxresdefault.jpg';
  }
}