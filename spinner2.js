let count = 1;
let instances = ['\r|   ', '\r/   ', '\r-   ', '\r\   '];

for (let i = 0; i < instances.length * 2; i++) {

  setTimeout(() => {
    process.stdout.write(instances[i]);
  }, count * 100);
  count += 2;

}