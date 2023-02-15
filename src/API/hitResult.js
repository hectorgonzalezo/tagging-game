import baseUrl from './baseurl';

export default async function getHitResult(character, location) {
  const { x, y } = location;
  const response = await fetch(`${baseUrl}/results/?character=${character}&x=${x}&y=${y}`, {
    method: 'GET',
    mode: 'cors',
  });
  const json = await response.json();
  return json.result;
}
