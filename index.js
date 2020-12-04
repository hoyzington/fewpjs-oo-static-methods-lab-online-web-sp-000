class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }
  
  static titleize(string) {
    const excluded = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let allWords = string.split(' ');
    let result = [];
    result.push(allWords[0].capitalize);
    let allButFirst = allWords.slice(1);
    for (const word of  allButFirst) {
      if (excluded.includes(word)) {
        result.push(word);
      } else {
        result.push(this.capitalize(word));
      }
    }
    return result.join(' ');
  }
}