var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
var ext = ['.com', '.net'];

var domainNameGenerator = () => {
    let str = "";
    for (var i = 0; i < 7; i++) {
        str = pronoun[Math.floor(Math.random() * 2)] + adj[Math.floor(Math.random() * 2)] + noun[Math.floor(Math.random() * 2)] + ext[Math.floor(Math.random() * 2)] + "\n";
        console.log(str);

    }
    return str;
}

domainNameGenerator();