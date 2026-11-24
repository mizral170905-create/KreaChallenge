# Black Box Testing

## 1. Tujuan

Pengujian black box bertujuan memverifikasi bahwa sistem KreaChallenge berperilaku sesuai kebutuhan fungsional tanpa melihat struktur kode internal. Penguji hanya memberikan input melalui antarmuka dan membandingkan output dengan hasil yang diharapkan.

## 2. Metode Pengujian

- **Teknik:** Equivalence Partitioning dan Boundary Value Analysis.
- **Objek:** Fitur inti pada alur kreator dan klien.
- **Lingkungan:** Browser Chrome terbaru, Laravel server lokal, database uji terpisah.
- **Skala:** 20 skenario pengujian.

## 3. Skenario Pengujian

| No | Fitur | Skenario | Input | Hasil Diharapkan |
|---|---|---|---|---|
| BB-01 | Registrasi | Data valid | Nama, email baru, password, peran kreator | Akun berhasil dibuat |
| BB-02 | Registrasi | Email duplikat | Email yang sudah terdaftar | Pesan error muncul |
| BB-03 | Registrasi | Password terlalu pendek | `123` | Validasi menolak |
| BB-04 | Login | Kredensial benar | Email & password benar | Masuk dashboard |
| BB-05 | Login | Password salah | Password salah | Pesan error muncul |
| BB-06 | Profil | Perbarui profil lengkap | Bio, keahlian, portofolio | Profil tersimpan |
| BB-07 | Profil | Portofolio kosong | Tautan kosong | Validasi menolak |
| BB-08 | Proyek | Buat proyek valid | Judul, brief, kategori, tenggat | Proyek tampil |
| BB-09 | Proyek | Tenggat lampau | Tanggal kemarin | Validasi menolak |
| BB-10 | Proyek | Filter kategori | Pilih `Desain` | Hanya proyek Desain tampil |
| BB-11 | Pengajuan | Ajukan diri pertama kali | Pesan pengajuan | Status `pending` |
| BB-12 | Pengajuan | Ajukan dua kali | Proyek & kreator sama | Ditolak sebagai duplikat |
| BB-13 | Seleksi | Terima pengajuan | Klik tombol Terima | Status `accepted`, kreator masuk tim |
| BB-14 | Seleksi | Tolak pengajuan | Klik tombol Tolak | Status `rejected` |
| BB-15 | Tugas | Buat tugas baru | Judul & penanggung jawab | Tugas tampil |
| BB-16 | Tugas | Ubah status tugas | `todo` → `done` | Status berubah |
| BB-17 | Progres | Lihat progres | 3 dari 5 tugas selesai | Menampilkan 60% |
| BB-18 | Pesan | Kirim pesan | Isi pesan teks | Pesan tampil di chat |
| BB-19 | Ulasan | Beri rating | Rating 5 + komentar | Ulasan tersimpan |
| BB-20 | Ulasan | Rating di luar rentang | Rating 6 | Validasi menolak |

## 4. Rencana Eksekusi

| Fase | Skenario | Fokus |
|---|---|---|
| Fase 1 | BB-01 sampai BB-05 | Autentikasi |
| Fase 2 | BB-06 sampai BB-10 | Profil dan proyek |
| Fase 3 | BB-11 sampai BB-14 | Pengajuan dan seleksi |
| Fase 4 | BB-15 sampai BB-17 | Tugas dan progres |
| Fase 5 | BB-18 sampai BB-20 | Komunikasi dan ulasan |

## 5. Kriteria Lulus

Sebuah skenario dinyatakan **Lulus** apabila:

1. Sistem menampilkan output sesuai hasil yang diharapkan.
2. Tidak muncul error JavaScript atau server.
3. Navigasi setelah aksi berjalan sesuai alur.
4. Data tersimpan dengan benar pada database uji.

Skenario dinyatakan **Gagal** apabila salah satu kriteria di atas tidak terpenuhi.

## 6. Format Catatan Pengujian

| Field | Keterangan |
|---|---|
| ID | Kode skenario, misalnya BB-08 |
| Tanggal | Tanggal eksekusi |
| Penguji | Nama anggota tim |
| Lingkungan | Browser & perangkat |
| Input | Data yang digunakan |
| Output aktual | Hasil yang muncul |
| Status | Lulus / Gagal |
| Catatan | Temuan tambahan |

## 7. Kesimpulan

Rencana black box testing mencakup 20 skenario yang mewakili seluruh fitur inti KreaChallenge. Hasil eksekusi dicatat pada dokumen `Hasil_Pengujian.md`.
