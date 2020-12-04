class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }
  
  static titleize(string) {
    let result = [];
    const excluded = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(' ');
    result.push(this.capitalize(words.shift()));
    for (const word of words) {
      if (excluded.includes(word)) {
        result.push(word);
      } else {
        result.push(this.capitalize(word));
      }
    }
    return result.join(' ');
  }
}