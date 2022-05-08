const str = "RishabhSharma";
const res = {};
for (x of str) {
    if (res[x] === undefined) {
        res[x] = 1;
    }
    else {
        res[x]++;
    }
}
for (x in res) {
    console.log(x + ' occurs ' + res[x] + ' times ');
}