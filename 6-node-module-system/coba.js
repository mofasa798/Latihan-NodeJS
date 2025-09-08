function cetakNama(nama) {
    return `halo, saya ${nama}`;
}

const PI = 3.14; // contoh export lebih dari satu

const mahasiswa = {
    nama: 'Cecep',
    umur: 33,
    cetakMhs() {
        return `halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`;
    }
}

class Orang {
    constructor() {
        console.log('Object Orang telah dibuat');
    }
}
module.exports = { cetakNama, PI, mahasiswa, Orang }; // export lebih dari satu