// import hello from './hello.ts';

// hello('Dev!');

import { green, red } from 'https://deno.land/std@0.74.0/fmt/colors.ts';

import { serve } from "https://deno.land/std@0.74.0/http/server.ts";

const server = serve({ port: 8080 });

console.log(green('Server up on http://localhost:8000/'));

for await (const req of server) {
    
    console.log(green(`Methods:${req.method} Url: ${req.url}`));
    req.respond({ body: "Hello World\n" });

}

// const file = await Deno.readTextFile('./features.json');

// console.log(file);

// const features = JSON.parse(file);

// console.table(features);

// features['package json'] = {
//     node: true,
//     deno: false
// }

// await Deno.writeTextFile('./features.json', JSON.stringify(features));