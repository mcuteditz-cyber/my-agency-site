const https = require('https');

const paths = [
  'short/s1.mp4',
  'short/1.mp4',
  'short/16.mp4',
  'folder/1.mp4',
  'folder/16.mp4',
  '1.mp4',
  '16.mp4',
  'short/16_ywuozi.mp4'
];

paths.forEach(path => {
  https.get(`https://res.cloudinary.com/ldzwikpf/video/upload/${path}`, (res) => {
    console.log(`${path}: ${res.statusCode}`);
  });
});
