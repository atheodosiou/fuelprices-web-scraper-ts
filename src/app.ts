import * as data from '../data/connections.json';
import { Connection, Connections } from './models/connection.model.js';
import { DdLink } from './models/ddLink.model.js';
import { MunicipalDistrictLink } from './scripts/generateDdLinks.js';

export class App{
    bootstrapApp(){
        console.log('App started...\n');
        let relationships:Connections;
        relationships=JSON.parse(JSON.stringify(data));
        const connections = relationships.connections;
        
        let links:DdLink[];
        //Generate municipal district links
        const municipalDistrictLink = new MunicipalDistrictLink();
        links=municipalDistrictLink.generateLinks(connections);

        console.log('Links created!\nTotal: ',links.length)
        links.forEach(l=>{
            console.log(l.url);
        })
        // console.log(connections.length);
    }
}