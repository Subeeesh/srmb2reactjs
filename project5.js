//program for determine odd and even by adding prefix as dr and suffix as er.

const username = ['subeesh','mahesh','guna'];
const alter = username.map((uname, idx) => {
    if (idx % 2 == 0) {
        return 'Er.' + uname;
    }
    else {
        return 'Dr.' + uname;
    }
}
);
for (let i = 0; i < alter.length; i++) {
    console.log(alter[i]);
}
