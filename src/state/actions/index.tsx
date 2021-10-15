export enum Actions{
    //handle axios error
    REQUEST_ERROR = 'requestError',
    //handle autocomplete request
    COMPUTE_REQUEST = 'computeRequest',
    //handle update map position
    FLY_TO_COORD = 'flyToNewCoord',
    //get location label from coords
    COORDS_TO_LABEL = 'coordsToLabel',
    //bind a memory to a place
    CREATE_MEMORIES = 'createMemories',
    //add a momories to th map
    ADD_MEMORY = 'addMemory',
    //Load memories
    LOAD_MEMORIES = 'loadMemories',
    //add a category to a memory
    ADD_CATEGORY = "addCategory",
    //remove all memories of a categories
    REMOVE_CATEGORY = "removeCategory",
    //delete memories of a category
    DELETE_MEMORIES = "deleteMemories"
}