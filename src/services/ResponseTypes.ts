interface Response{
    label: string,
    score: number,
    id: string,
    name: string,
    postcode: string,
    citycode: string,
    x: number,
    y: number,
    city: string,
    context: string,
    type: string,
    importance: number 
}

export type ResponseType = Response | [];