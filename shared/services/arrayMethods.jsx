/**
 * Pasar el arreglo al que desea eliminar duplicados 
 * @param {*} array 
 * @returns 
 */
export function eliminateDuplicates (array) {
    return array.filter((e, index) => index === array.indexOf(e))
}

/**
 * Pasar el numero entero limite para buscar numero aleatorio entre 0 y el numero indicado 
 * @param {*} max 
 * @returns 
 */
export function ramdom(max) {
 return Math.floor(Math.random() * max);
}

/**
 * Pasar el arreglo de objetos para obtener dos numeros aleatorios
 * @param {*} array 
 * @returns 
 */
export function twoRandomNumbers(array) {
    let arr = []
    
    if(array.length < 2) return []

    while (eliminateDuplicates(arr).length < 2) {
      arr.push( ramdom(array.length) )
    }

    return arr
}
