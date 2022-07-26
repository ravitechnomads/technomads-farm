const { exec } = require('child_process');
const str =
  'metaboss update uri \
  --keypair ~/.config/solana/ravisoverian.json \
  --account 9t4pmpU3kHVTeCgL7qbMrcCWLft4PSneB774ppt2dP42 \
  --new-uri https://sovereign-nftt.s3.ap-south-1.amazonaws.com/4.json';
exec(str, (error, stdout, stderr) => {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
