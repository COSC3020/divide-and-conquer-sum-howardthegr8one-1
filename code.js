function divideAndConquerSum(a) {
    let sum = 0;
    if (a.length <= 2)
        if (a.length <= 1)
            return (a.length == 1) ? a[0] : 0;
        else
            return a[0] + a[1];
    else {
        let subsize = Math.floor(a.length / 3);
        sum = divideAndConquerSum(a.slice(0, subsize)) + 
              divideAndConquerSum(a.slice(subsize, 2*subsize)) + 
              divideAndConquerSum(a.slice(2*subsize, a.length));
    }
    return sum;
}
