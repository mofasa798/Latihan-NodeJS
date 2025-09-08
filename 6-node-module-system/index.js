// const nama = "ujang";
// const cetakNama = (nama) => `halo, saya ${nama}`;
// console.log(cetakNama("ujang"));

// const fs = require('fs'); // core module
// const cetakNama = require('./coba');
// const moment = require('moment'); // third party module / npm module / node_modules
const { cetakNama, PI, mahasiswa, Orang } = require('./coba'); // local module

// console.log("Muehehehe!!!");
// console.log(cetakNama("ujang"));
console.log(cetakNama("ujang"), PI, mahasiswa.cetakMhs(), new Orang());