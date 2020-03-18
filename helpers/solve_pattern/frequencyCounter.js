// frequency counter with an example of anagramas 

function validAnagram(element1, element2) {

    if(element1.length != element2.length) return false;
    let anagram1 = {}; let anagram2 = {};

    for (let x of element1) {
        anagram1[x] = (anagram1[x] || 0) +1;
    }

    for (let y of element2) {
        anagram2[y] = (anagram2[y]||0) +1;
    }

    for (let element in anagram1) {
        if (anagram1[element] != anagram2[element]) return false;
    }

    return true;
}

validAnagram('alexan','hortua')