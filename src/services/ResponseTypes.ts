
/**
 * axios datas
 * [{features, porpeties : Array}]
 */

interface Geometry{
    type : string
    coordinates : number[]
}
interface Features{
    type : string,
    geometry : Geometry
}
interface Properties{
    properties : {
        label : string,
        score : number,
        housenumber : number,
        id : string,
        type : string,
        name : string,
        postcode : string,
        citycode : string,
        x : string,
        y : string,
        city : string,
        context :string,
        importance : string,
        street : string
    }
}

export type ResponseType = Array<Features & Properties> | [];