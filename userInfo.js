// userInfo.js

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example Usage
let originalNames = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
let modifiedNames = formatArrayStrings(strings, processedNumbers);
let userProfiles = createUserProfiles(originalNames, modifiedNames);
/*
[
    { id: 1, originalName: "Alice", modifiedName: "hello" },
    { id: 2, originalName: "Bob", modifiedName: "WORLD" },
    { id: 3, originalName: "Charlie", modifiedName: "javascript" },
    { id: 4, originalName: "Dave", modifiedName: "REACT" },
    { id: 5, originalName: "Eve", modifiedName: "native" }
]
*/
