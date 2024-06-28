import { yarg } from "./config/adapters/yargs.adapter";

(async () => {
  await main();
  console.log('fin del programa');
})();

async function main(){
    console.log(yarg);
}