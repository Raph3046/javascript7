// objects for lookups

function phoneticLookup(let) {
    let result = "";


    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrol": "frank"
    };
    result = lookup[let];

    return result;
}

console.log(phoneticLookup("charlie"));