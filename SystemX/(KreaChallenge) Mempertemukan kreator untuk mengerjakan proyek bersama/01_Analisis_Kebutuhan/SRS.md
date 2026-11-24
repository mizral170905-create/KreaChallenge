# Software Requirement Specification (SRS)

## 1. Pendahuluan

### 1.1 Tujuan Dokumen

Dokumen Software Requirement Specification (SRS) ini mendefinisikan kebutuhan perangkat lunak KreaChallenge secara lengkap dan sistematis. Dokumen ini menjadi acuan bagi analis, desainer, pengembang, dan penguji selama proses rekayasa perangkat lunak.

### 1.2 Ruang Lingkup Produk

KreaChallenge adalah aplikasi berbasis web yang mempertemukan kreator dengan klien untuk mengerjakan proyek kreatif bersama. Sistem mencakup pengelolaan akun, profil dan portofolio, pembuatan proyek, pengajuan partisipasi, seleksi tim, manajemen tugas, komunikasi internal, pemantauan progres, dan ulasan.

### 1.3 Definisi Istilah

| Istilah | Definisi |
|---|---|
| Sistem | Aplikasi KreaChallenge secara keseluruhan |
| Pengguna | Kreator, klien, atau admin yang terdaftar |
| Kreator | Pengguna yang menawarkan keahlian kreatif |
| Klien | Pengguna yang membuat dan memiliki proyek |
| Admin | Pengguna dengan hak moderasi |
| Proyek | Pekerjaan kreatif yang dikelola di sistem |
| Pengajuan | Permintaan kreator untuk bergabung ke proyek |
| Tugas | Unit kerja dalam proyek |

## 2. Deskripsi Umum

### 2.1 Perspektif Produk

KreaChallenge merupakan aplikasi web mandiri yang dapat diakses melalui browser. Sistem tidak terintegrasi dengan platform pembayaran eksternal pada versi awal, tetapi menyediakan struktur data anggaran sebagai informasi proyek.

### 2.2 Fungsi Produk

Secara garis besar, sistem memiliki fungsi:

1. Mengelola identitas dan autentikasi pengguna.
2. Menyediakan direktori kreator dan pencarian berdasarkan keahlian.
3. Mengelola siklus hidup proyek dari pembuatan hingga penyelesaian.
4. Mengelola proses pengajuan dan pembentukan tim.
5. Mengelola tugas dan progres proyek.
6. Menyediakan komunikasi internal.
7. Menyediakan mekanisme ulasan.

### 2.3 Karakteristik Pengguna

| Pengguna | Karakteristik | Kebutuhan Utama |
|---|---|---|
| Kreator | Individu atau tim kecil dengan keahlian kreatif | Menemukan proyek, mengelola portofolio, mengerjakan tugas |
| Klien | Individu, UMKM, atau organisasi yang membutuhkan karya kreatif | Membuat brief, memilih kreator, memantau hasil |
| Admin | Pengelola sistem | Moderasi konten dan melihat laporan |

### 2.4 Kendala

- Versi awal hanya mendukung Bahasa Indonesia.
- Unggahan file dibatasi pada tautan eksternal.
- Notifikasi belum real-time.
- Tidak ada pembayaran online.

## 3. Kebutuhan Fungsional

### 3.1 Ringkasan

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-01 | Registrasi akun | Tinggi |
| FR-02 | Login/logout | Tinggi |
| FR-03 | Kelola profil | Tinggi |
| FR-04 | Kelola portofolio kreator | Tinggi |
| FR-05 | Pencarian kreator | Tinggi |
| FR-06 | Pembuatan proyek | Tinggi |
| FR-07 | Pengajuan partisipasi | Tinggi |
| FR-08 | Seleksi kreator | Tinggi |
| FR-09 | Manajemen tugas | Tinggi |
| FR-10 | Monitoring progres | Sedang |
| FR-11 | Pesan internal | Sedang |
| FR-12 | Ulasan | Sedang |
| FR-13 | Moderasi admin | Sedang |

### 3.2 Spesifikasi Detail: FR-06 Pembuatan Proyek

**Deskripsi:** Klien dapat membuat proyek baru dengan mengisi form yang telah ditentukan.

**Input:**
- Judul proyek (wajib, minimal 5 karakter)
- Deskripsi/brief (wajib, minimal 20 karakter)
- Kategori keahlian (wajib)
- Tenggat waktu (wajib, tanggal di masa depan)
- Anggaran (opsional, numerik)

**Proses:**
1. Sistem memvalidasi input.
2. Jika valid, sistem menyimpan data proyek dengan status `open`.
3. Sistem menampilkan pesan keberhasilan dan mengarahkan ke detail proyek.

**Output:** Proyek baru tampil pada daftar proyek dan dapat dilihat kreator.

**Alternatif:** Jika validasi gagal, sistem menampilkan pesan error pada field yang bersangkutan.

## 4. Kebutuhan Nonfungsional

| ID | Kategori | Spesifikasi |
|---|---|---|
| NFR-01 | Performa | Respons halaman utama ≤ 3 detik pada jaringan 4G |
| NFR-02 | Keamanan | Password disimpan dengan hash; CSRF protection aktif |
| NFR-03 | Keamanan | Hak akses dibedakan berdasarkan peran |
| NFR-04 | Validasi | Validasi server untuk seluruh input pengguna |
| NFR-05 | UI | Desain responsif minimal 360 px lebar layar |
| NFR-06 | Kompatibilitas | Mendukung Chrome, Edge, Firefox, Safari terbaru |
| NFR-07 | Pemeliharaan | Kode mengikuti standar Laravel dan Vue |
| NFR-08 | Dokumentasi | README, ERD, dan SRS tersedia di repositori |
| NFR-09 | Audit | Perubahan status proyek dan tugas dicatat |

## 5. Model Data Ringkas

Entitas utama beserta hubungannya:

- `User` memiliki satu `CreatorProfile` (jika berperan sebagai kreator).
- `User` dapat membuat banyak `Project` (jika klien).
- `Project` menerima banyak `Application`.
- `Project` memiliki banyak `Task`.
- `Project` memiliki banyak `Message` dan `Review`.

Detail model tersedia pada dokumen `02_Rancangan_Sistem/ERD.md`.

## 6. Asumsi

1. Pengguna sudah memiliki perangkat dengan akses internet.
2. Klien dan kreator menggunakan Bahasa Indonesia.
3. Portofolio berupa tautan, bukan file yang di-host sendiri.
4. Sistem tidak menangani kontrak hukum dan pembayaran.

## 7. Keterbatasan

- Belum ada verifikasi identitas resmi.
- Belum ada sistem penilaian otomatis.
- Belum ada aplikasi mobile native.
- Notifikasi masih terbatas di dalam aplikasi.

## 8. Prioritas dan Jadwal

| Prioritas | Fitur | Target Fase |
|---|---|---|
| Tinggi | Autentikasi, profil, proyek, pengajuan, tugas | Fase 1 |
| Sedang | Progres, pesan, ulasan, moderasi | Fase 2 |
| Rendah | Notifikasi real-time, rekomendasi, pembayaran | Fase 3 |

## 9. Kesimpulan

SRS KreaChallenge memberikan gambaran yang jelas mengenai fungsi, batasan, dan kualitas sistem yang diharapkan. Dokumen ini akan terus diperbarui apabila terdapat perubahan kebutuhan selama proses pengembangan.
