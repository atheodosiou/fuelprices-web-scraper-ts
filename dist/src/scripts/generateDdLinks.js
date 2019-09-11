"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ddLink_model_1 = require("../models/ddLink.model");
class MunicipalDistrictLink {
    generateLinks(connections) {
        let links = [];
        //Create municipal districts urls
        connections.forEach(c => {
            c.municipalities.forEach(m => {
                let dd = new ddLink_model_1.DdLink();
                dd.countyId = c.countyId;
                dd.municipalityId = m.id;
                dd.url = `http://www.fuelprices.gr/GetGeography?nomos=${c.countyId}&return_to=CheckPrices&dimos=${m.id}`;
                links.push(dd);
            });
        });
        return links;
    }
}
exports.MunicipalDistrictLink = MunicipalDistrictLink;
//# sourceMappingURL=generateDdLinks.js.map