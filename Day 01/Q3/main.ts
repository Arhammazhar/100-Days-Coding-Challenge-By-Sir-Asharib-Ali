let personName = "arham";

console.log("To Lowercase:",personName.toLowerCase())

console.log("To Uppercase:",personName.toUpperCase())

console.log("To Titlecase:",personName.replace(/\b\w/g,match => match.toUpperCase()))