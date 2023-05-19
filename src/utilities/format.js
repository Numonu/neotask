export function formatRoute(route_name){
    return route_name.replace(/\s/g ,"-");
}
export function unformatRoute(route_name){
    return route_name.replace(/\-/g ," ");
}