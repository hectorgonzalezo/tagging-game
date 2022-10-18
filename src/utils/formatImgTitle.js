import { lowerCase } from 'lodash';

function formatImgTitle(title) {
  let result = lowerCase(title);

  result = result.split(' ').join('');

  return result;
}

export default formatImgTitle;
