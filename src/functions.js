

async function urlToBLob(url) {
  let res = await fetch(url);
  let blob = await res.blob();
  return blob;
}

export { urlToBLob }