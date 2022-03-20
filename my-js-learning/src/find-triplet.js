
// Input - Array of integer for Ex. {1,1,5,3,6,2,1,4}
// Output - Print and count unique triplets in arry 
// {a,b,c} is triplate if a+b=c

// Input: arr[] = {3, 1, 4, 6, 5}
// Output: {1,3,4}, {1,4,5} {1,4,6} total - 3 

function main() {
    let input = [1,1,5,3,6,2,1,4];
    fineTriplet(input);
};

function fineTriplet(input) {
    let totalT = 0;
    for(let i=0; i<input.length; i++) {
        for(let j=0; j<input.length; j++) {
            if(i == j) continue;
            let total = input[i] + input[j];
            for(let k=0; k<input.length; k++) {
                if(i == k || j == k){
                    continue;
                }
                if(total == input[k]){
                    console.log("Triplet", [input[i], input[j], input[k]]);
                    totalT++;
                }
            }
        }
    }
    console.log('Total:', totalT);
}
main();