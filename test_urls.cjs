const https = require('https');

const paths = [
  's1.mp4',
  '1.mp4',
  '16.mp4',
  's16.mp4',
  'short/s1.mp4',
  'short/1.mp4',
  'long/1.mp4',
  'long/l1.mp4',
  'l1.mp4'
];

paths.forEach(path => {
  https.get(`https://res.cloudinary.com/ldzwikpf/video/upload/${path}`, (res) => {
    console.log(`${path}: ${res.statusCode}`);
  });
});
