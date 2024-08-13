# merge_sort

function mergeSort(arr){
    let h = array.length;
    if(is h > 1){
        //divide the array in 2
        let midpoint = Math.floor(arr.length / 2);
        let firstHalf = arr.slice(0, midpoint);
        let secondHalf = arr.slice(midpoint);
        mergeSort(firstHalf);
        mergeSort(secondHalf);
        merge(firstHalf, secondHalf, firstHalf.length, secondHalf.length)
    }
}


function merge(a, b, m, n){
    let i=1, j=1, k = 1;
    let c=[];
    while (i <= m && j <= n){
        if (a[i]< b[j]){
            c[k++]= a[i++]
        } else (){
            c(k++) = b[j++]
        }
    } 
    for (;, i<=m, i++){
        c[k++] = a[i];
    }
    for (;, j<=n, j++){
        c[k++] = b[j];
    }
}
