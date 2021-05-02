import _ from 'lodash';


export function paginate(items, pageNumber, pageSize){
    const startIndex = ( pageNumber - 1) * items;

    return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
    
}