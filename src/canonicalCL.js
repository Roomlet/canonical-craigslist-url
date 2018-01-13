export default function canonicalCL(urlIn) {
  const match = /^((http[s]?):\/\/)([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/.exec(urlIn);

  if (!match || !/^[a-z]*\.craigslist\.org$/.exec(match[3])) {
    return null;
  }

  const pathMatch = /^(\/([a-z]{3}\/)*)(d.*\/)?$/.exec(match[4]);

  if (!pathMatch) {
    return null;
  }

  const fileMatch = /^(.*\/)?([0-9]*\.html)$/.exec(match[6]);

  if (!fileMatch) {
    return null;
  }

  return 'https://' + match[3] + pathMatch[1] + fileMatch[2];
}
