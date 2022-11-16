export default function bs_list(haystack: number[], needle: number): boolean {

    var lo = 0;
    var hi = haystack.length + 1;

    do{
        var m = Math.floor(lo + (hi - lo)/2)
        
        if (haystack[m] === needle)
            return true;
        
        else if (haystack[m] < needle)
            lo = m+1;

        else
            hi = m;

    }while(lo < hi)

    return false;
}