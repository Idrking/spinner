const sprites = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];

let timer = 100;
for (const char of sprites) {  
  setTimeout(() => {
    process.stdout.write(char);
  }, timer)

  timer += 200;
}