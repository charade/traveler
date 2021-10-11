export const NoMatchFound = ({condition} : {condition : boolean}) => {
    return(
        condition ? <h3> No match found</h3> : null
    )
}