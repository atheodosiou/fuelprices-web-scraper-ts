import * as data from '../data/connections.json';
import { Connection, Connections } from './models/connection.model.js';
import { DdLink } from './models/ddLink.model.js';
import { MunicipalDistrictLink } from './scripts/generateDdLinks.js';
import { SaveLinksToFile } from './scripts/saveLinksToFile.js';
import { performance } from 'perf_hooks';

export class App {
    async bootstrapApp() {
        console.log('App started...\n');
        this.createLinksFile();
    }

    private async createLinksFile(){
        const startDt= performance.now();

        let relationships: Connections;
        relationships = JSON.parse(JSON.stringify(data));
        const connections = relationships.connections;

        let links: DdLink[];
        //Generate municipal district links
        const municipalDistrictLink = new MunicipalDistrictLink();

        links = municipalDistrictLink.generateLinks(connections);
        console.log('Total links generated: ', links.length);

        const saveLinksToFile = new SaveLinksToFile();
        await saveLinksToFile.writeJSON(links, 'data/', 'links.json').then(() => {
            console.log('File was created successfully!\n')
        }).catch(error => {
            console.log('File was not created successfully!\n\n', error);
        });
        const endDt = performance.now();
        const duration = endDt-startDt;
        console.log(`Done! Total time: ${duration}ms.\nProcess exit.`);
        await process.exit(0);
    }
}