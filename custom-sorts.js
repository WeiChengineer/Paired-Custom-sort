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

}

function frequencySort(arr) {

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];