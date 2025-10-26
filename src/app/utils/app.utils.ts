export function getObjectId(object: any) {
  return object['url'] ? object.url.split('/')[5] : '';
}
