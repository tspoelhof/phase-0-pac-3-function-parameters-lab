function introduction(name) {
    return `Hi, my name is ${name}.`;
}

const myName = "Thomas";
const greeting = introduction(myName);
console.log(greeting);

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}
const myName2 = "Thomas";
const myLanguage = "Python";
const greeting2 = introductionWithLanguage(myName, myLanguage);
console.log(greeting2);

function introductionWithLanguageOptional(name, language2 = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language2}.`;

}
const myName3 = "Thomas";
const greeting3 = introductionWithLanguageOptional(myName3);
console.log(greeting3);
