// import * as data from "../data/connections.json";
// import { Connections } from "./models/connection.model";
// import { DdLink } from "./models/ddLink.model";
// import { MunicipalDistrictLink } from "./scripts/generateDdLinks";
// import { SaveLinksToFile } from "./scripts/saveLinksToFile";
// import { performance } from "perf_hooks";
import { getMunicipalDistric } from "./scripts/getMunicipalDistrict";

export class App {
  async bootstrapApp() {
    // const startDt = performance.now();

    // console.log("App started...\n");
    // await this.createLinksFile();

    // const endDt = performance.now();
    // const duration = endDt - startDt;
    // console.log(`Done! Total time: ${duration}ms.\nProcess exit.`);
    // await process.exit(0);

    await getMunicipalDistric('01020000','http://www.fuelprices.gr/GetGeography?nomos=01000000&return_to=CheckPrices&dimos=01020000').then(res=>{
        console.log(res);
    }).catch(error=>{
        console.log(error);
    });
    console.log('Done!');
  }

//   private async createLinksFile() {
//     let relationships: Connections;
//     relationships = JSON.parse(JSON.stringify(data));
//     const connections = relationships.connections;

//     let links: DdLink[];
//     //Generate municipal district links
//     const municipalDistrictLink = new MunicipalDistrictLink();

//     links = municipalDistrictLink.generateLinks(connections);
//     console.log("Total links generated: ", links.length);

//     const saveLinksToFile = new SaveLinksToFile();
//     await saveLinksToFile
//       .writeJSON(links, "data/", "links.json")
//       .then(() => {
//         console.log("File was created successfully!\n");
//       })
//       .catch(error => {
//         console.log("File was not created successfully!\n\n", error);
//       });
//   }
}
