# Hasil Pengujian

## 1. Ringkasan

Pengujian black box dilakukan terhadap 20 skenario pada fitur inti KreaChallenge. Pengujian dilaksanakan pada tanggal 23 November 2026 menggunakan browser Chrome versi terbaru, server Laravel lokal, dan database uji terpisah.

| Metrik | Nilai |
|---|---|
| Jumlah skenario | 20 |
| Skenario lulus | 19 |
| Skenario gagal | 1 |
| Tingkat keberhasilan | 95% |
| Fokus perbaikan | Validasi rating ulasan |

## 2. Tabel Hasil

| No | Skenario | Hasil Aktual | Status | Catatan |
|---|---|---|---|---|
| BB-01 | Registrasi data valid | Akun berhasil dibuat | Lulus | - |
| BB-02 | Email duplikat | Muncul pesan "Email sudah digunakan" | Lulus | - |
| BB-03 | Password terlalu pendek | Validasi menolak | Lulus | - |
| BB-04 | Login benar | Diarahkan ke dashboard | Lulus | - |
| BB-05 | Login salah | Muncul pesan kredensial invalid | Lulus | - |
| BB-06 | Perbarui profil | Profil tersimpan | Lulus | - |
| BB-07 | Portofolio kosong | Validasi menolak | Lulus | - |
| BB-08 | Buat proyek valid | Proyek tampil di daftar | Lulus | - |
| BB-09 | Tenggat lampau | Validasi menolak | Lulus | - |
| BB-10 | Filter kategori | Hanya proyek Desain tampil | Lulus | - |
| BB-11 | Ajukan diri pertama | Status `pending` tampil | Lulus | - |
| BB-12 | Ajukan dua kali | Ditolak sebagai duplikat | Lulus | - |
| BB-13 | Terima pengajuan | Status `accepted`, kreator masuk tim | Lulus | - |
| BB-14 | Tolak pengajuan | Status `rejected` | Lulus | - |
| BB-15 | Buat tugas | Tugas tampil di daftar | Lulus | - |
| BB-16 | Ubah status tugas | Status berubah menjadi `done` | Lulus | - |
| BB-17 | Lihat progres | Menampilkan 60% | Lulus | Sesuai perhitungan 3/5 |
| BB-18 | Kirim pesan | Pesan tampil di chat | Lulus | - |
| BB-19 | Beri rating 5 | Ulasan tersimpan | Lulus | - |
| BB-20 | Rating 6 | Sistem menerima nilai 6 | **Gagal** | Validasi rentang belum aktif pada form |

## 3. Analisis Temuan

### 3.1 Skenario BB-20 — Rating di Luar Rentang

**Masalah:** Form ulasan masih menerima input rating `6`, padahal spesifikasi menetapkan rentang 1–5.

**Dampak:** Data ulasan menjadi tidak konsisten dan dapat mengganggu perhitungan rata-rata rating kreator.

**Penanganan:**
1. Menambahkan atribut `min="1"` dan `max="5"` pada input rating.
2. Menambahkan validasi Form Request di server: `'rating' => 'required|integer|min:1|max:5'`.
3. Menambahkan constraint `CHECK (rating BETWEEN 1 AND 5)` pada tabel `reviews`.
4. Mengulang pengujian BB-20 setelah perbaikan.

**Hasil Ulang:** Lulus.

## 4. Rekap Setelah Perbaikan

| Metrik | Nilai |
|---|---|
| Jumlah skenario | 20 |
| Skenario lulus | 20 |
| Skenario gagal | 0 |
| Tingkat keberhasilan akhir | 100% |

## 5. Bukti Pengujian (Template)

Bukti dapat dilampirkan dalam bentuk tangkapan layar dengan penamaan:

```text
bukti/
├── BB-01_registrasi_valid.png
├── BB-08_buat_proyek.png
├── BB-13_terima_pengajuan.png
├── BB-17_progres_60.png
└── BB-20_validasi_rating.png
```

## 6. Kesimpulan

Seluruh skenario pengujian berhasil setelah perbaikan pada validasi rating. Satu temuan awal berhasil diatasi dengan penambahan validasi pada tiga lapisan: tampilan, server, dan database. Hal ini menunjukkan pentingnya pertahanan berlapis dalam pengembangan sistem.
