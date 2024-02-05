// DataStructures

// Factorial Time Complexity (O(n!)):

// O(n!) - Factorial Time: Factorial time complexity represents the worst-case scenario,
//  where the execution time grows as the factorial of the input size.
//   Such algorithms are highly inefficient and only feasible for very small inputs.

const permute = (arr) => {
    if (arr.length === 0) {
        return [[]];
    }
    const firstElem = arr[0];
    const rest = arr.slice(1);
    const permsWithoutFirst = permute(rest);
    const permsWithFirst = [];
    for (let i = 0; i < permsWithoutFirst.length; i++) {
        for (let j = 0; j <= permsWithoutFirst[i].length; j++) {
            const perm = [...permsWithoutFirst[i]];
            perm.splice(j, 0, firstElem);
            permsWithFirst.push(perm);
        }
    }
    return permsWithFirst;
};
