function ageSort(users) {
  // Sort users by age in ascending order
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => (a % 2 === 0) - (b % 2 === 0) || a - b);
}

function validAnagrams(s, t) {
  const sortStr = str => str.split('').sort().join('');
  return sortStr(s) === sortStr(t);
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    const baseA = Math.floor(Math.log10(a) || 0);
    const baseB = Math.floor(Math.log10(b) || 0);
    if (baseA === baseB) return a - b;
    return baseB - baseA;
  });
}


function frequencySort(arr) {
  const freqMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return arr.sort((a, b) => {
    if (freqMap[a] === freqMap[b]) return b - a;
    return freqMap[a] - freqMap[b];
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];