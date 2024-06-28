import { yarg } from "./config/adapters/yargs.adapter";
import ServerApp from "./presentation/server-app";

(async () => {
  await main();
})();

async function main(){
  console.log(yarg);
  ServerApp.run();
}