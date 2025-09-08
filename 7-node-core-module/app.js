// core module
// file system
const fs = require('fs');

// menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Zehahaha secara Sync');
// } catch (error) {
//     console.log(error);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Zehahaha secara Async', (err) => {
//     console.log(err);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file kontak.json jika belum ada
const dataPath = './data/kontak.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

rl.question('Masukkan nama Anda: ', (nama) => {
    rl.question('Masukkan nomor telepon Anda: ', (noTelp) => {
        const kontak = { nama, noTelp };
        const file = fs.readFileSync('data/kontak.json', 'utf-8');
        const kontakArr = JSON.parse(file);
        kontakArr.push(kontak);
        fs.writeFileSync('data/kontak.json', JSON.stringify(kontakArr));
        console.log('Terima kasih sudah memasukkan data.');
    rl.close();
    });
});