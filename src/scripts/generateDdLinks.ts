import { DdLink } from "../models/ddLink.model";
import { Connection } from "../models/connection.model";
export class MunicipalDistrictLink {
    /**
     * Creates links for gettig all municipal districs of a municipality for a given county!
     * @param connections Array of type 'Connection'
     */
    generateLinks(connections: Connection[]): DdLink[] {
        let links: DdLink[] = [];
        connections.forEach(c => {
            c.municipalities.forEach(m => {
                let dd = new DdLink();
                dd.countyId = c.countyId;
                dd.municipalityId = m.id;
                dd.url = `http://www.fuelprices.gr/GetGeography?nomos=${c.countyId}&return_to=CheckPrices&dimos=${m.id}`;
                links.push(dd);
            });
        })
        return links;
    }
}