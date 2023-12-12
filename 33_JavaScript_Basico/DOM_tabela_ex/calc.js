function calcularMedia(){                    

    const qtd = arguments.length;
    let total = 0;
    let x = 0;
    
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    return total / qtd;
}