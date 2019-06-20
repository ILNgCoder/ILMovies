class Helper {

  embedUrl(yID: string): string {
    return 'https://www.youtube.com/embed/' + yID;
  }

}

export const helper: Helper = new Helper();