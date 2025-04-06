import fs from 'fs';
import fetch from 'node-fetch';

const downloadFile = async (cid, path) => {
  const response = await fetch(`https://gateway.lighthouse.storage/ipfs/${cid}`);
  if (!response.ok) throw new Error('Network response was not ok.');

  const buffer = await response.arrayBuffer();
  fs.writeFile(path, Buffer.from(buffer), () => {
    console.log(`File saved to ${path}`);
  });
};

downloadFile('bafkreih4f4mf5f7jxpate2xmot2u7e5bokqfvjo3incsw2qstphllmneni', './test.json');
