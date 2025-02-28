function contains(obj, str) {
    if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
      return obj.hasOwnProperty(str);
    } else {
      throw new Error('Error');
    }
  }
  
  module.exports = contains;