function removeCharsWithPrompt() {

    const inputString = prompt("Enter string:");
    const charsInput = prompt("Enter letter for delete(for example: l,d):");


    const charsToRemove = charsInput.split(',').map(char => char.trim());


    let result = inputString;
    for (const char of charsToRemove) {
        result = result.replaceAll(char, '');
    }


    console.log(result);

    return result;
}


removeCharsWithPrompt();