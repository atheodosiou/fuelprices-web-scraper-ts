export class Connections{
    connections:Connection[];
}

export class Connection{
    countyId:string;
    municipalities: Municipality[];
}

class Municipality{
    id:string;
    name:string;
}