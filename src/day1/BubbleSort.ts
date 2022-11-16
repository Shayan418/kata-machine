export default function bubble_sort(arr: number[]): void {

    var tmp;
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp

            }
        }

    }

}