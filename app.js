function mergeSort(arr){
    let h = arr.length;
    let c = [];
    if(h>1){
        let midpoint = Math.floor(arr.length / 2);
        let firstHalf = arr.slice(0, midpoint);
        let secondHalf = arr.slice(midpoint);
        // console.log(firstHalf);
        // console.log(secondHalf);
        let arr1 = mergeSort(firstHalf);
        let arr2 = mergeSort(secondHalf);
        c = merge(arr1, arr2)
        return c;
    }
    else{
        // console.log(c);
        return arr;
    }
}


function merge(a, b){
    let m = a.length;
    let n = b.length;
    let i=0, j=0, k = 0;
    let c=[];
    while (i < m && j < n){
        if (a[i]< b[j]){
            c[k++]= a[i++]
        } else {
            c[k++] = b[j++]
        }
    } 
    for (; i<m; i++){
        c[k++] = a[i];
    }
    for (; j<n; j++){
        c[k++] = b[j];
    }
    return c;
}

array = [105, 79, 100, 110];

console.log(mergeSort(array));