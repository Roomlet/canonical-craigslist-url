export default function canonicalCL(urlIn) {
  const match = /^((http[s]?):\/\/)([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/.exec(urlIn);

  console.log('match: ' + match);
  if (!match || !/^[a-z]*\.craigslist\.org$/.exec(match[3])) {
    return null;
  }

  const pathMatch = /^(\/([a-z]{3}\/)*)(d.*\/)?$/.exec(match[4]);

  console.log('pathmatch: ' + pathMatch);
  if (!pathMatch) {
    return null;
  }

  const fileMatch = /^(.*\/)?([0-9]*\.html)$/.exec(match[6]);

  console.log('fileMatch: ' + fileMatch);
  if (!fileMatch) {
    return null;
  }
  console.log('match(3):' + match[3] + ' pathMatch: ' + pathMatch[1] + ' fileMatch:' + fileMatch[2]);

  return 'https://' + match[3] + pathMatch[1] + fileMatch[2];
}
