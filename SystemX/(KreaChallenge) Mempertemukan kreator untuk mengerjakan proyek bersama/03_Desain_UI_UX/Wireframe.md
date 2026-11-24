# Wireframe

## 1. Tujuan

Wireframe adalah sketsa struktur halaman yang menampilkan susunan elemen tanpa memperhatikan detail visual akhir. Dokumen ini menjadi acuan penempatan konten sebelum dibuat mockup dan prototype Figma.

## 2. Prinsip Tata Letak

1. Navigasi utama selalu berada di bagian atas.
2. Informasi paling penting ditempatkan pada area atas halaman (*above the fold*).
3. Kartu digunakan untuk menyajikan data berulang seperti proyek dan kreator.
4. Tombol aksi utama menggunakan warna aksen `#D7FF3E`.
5. Ruang kosong digunakan untuk menjaga keterbacaan.

## 3. Wireframe Halaman Beranda

```text
+--------------------------------------------------------------+
| [Ribbon: KreaChallenge · PROYEK BARU · KREATOR AKTIF · ...]     |
+--------------------------------------------------------------+
|  [Logo]   Beranda  Proyek  Kreator  Cara Kerja     [Masuk] [Gabung] |
+--------------------------------------------------------------+
|                                                              |
|   KOLAB KREATIF                                              |
|   Mempertemukan kreator untuk                                |
|   mengerjakan proyek bersama.                                |
|                                                              |
|   [ Cari proyek ]   [ Jadi kreator ]                         |
|                                                              |
|   12.400+ kreator        480+ proyek selesai                |
+--------------------------------------------------------------+
|  KATEGORI POPULER                                            |
|  [Desain] [Ilustrasi] [Fotografi] [Video] [Development]      |
+--------------------------------------------------------------+
|  PROYEK TERBARU                              [Lihat semua >] |
|  +----------------+ +----------------+ +----------------+    |
|  | Judul proyek   | | Judul proyek   | | Judul proyek   |    |
|  | Kategori       | | Kategori       | | Kategori       |    |
|  | Anggaran       | | Anggaran       | | Anggaran       |    |
|  | Tenggat        | | Tenggat        | | Tenggat        |    |
|  | [Lihat detail] | | [Lihat detail] | | [Lihat detail] |    |
|  +----------------+ +----------------+ +----------------+    |
+--------------------------------------------------------------+
|  KREATOR PILIHAN                                             |
|  [Foto] Nama - Keahlian - Rating              [Lihat profil] |
|  [Foto] Nama - Keahlian - Rating              [Lihat profil] |
+--------------------------------------------------------------+
|  [CTA: Punya proyek? Mulai kolaborasi sekarang]              |
+--------------------------------------------------------------+
|  Footer: Tautan | Bantuan | Sosial | Hak cipta               |
+--------------------------------------------------------------+
```

## 4. Wireframe Halaman Detail Proyek

```text
+--------------------------------------------------------------+
| Navbar                                                       |
+--------------------------------------------------------------+
| <- Kembali ke daftar proyek                                  |
|                                                              |
| Judul Proyek                                  [ Status: OPEN ]|
| Kategori · Tenggat · Anggaran                                |
|                                                              |
| +------------------------------------+ +-------------------+  |
| | DESKRIPSI PROYEK                   | | PANEL AKSI        |  |
| | - Brief utama                      | | [Ajukan Diri]     |  |
| | - deliverable yang diharapkan      | | [Simpan proyek]   |  |
| | - Kriteria keberhasilan            | |                   |  |
| +------------------------------------+ | Pemilik:          |  |
| | DAFTAR TUGAS                       | [Foto] Nama klien |  |
| | [ ] Tugas 1 - Penanggung jawab     | Rating ⭐ 4.8      |  |
| | [ ] Tugas 2 - Penanggung jawab     +-------------------+  |
| +------------------------------------+                      |
| | PESAN PROYEK                                             |  |
| | [input pesan................] [Kirim]                    |  |
| +----------------------------------------------------------+  |
+--------------------------------------------------------------+
```

## 5. Wireframe Dashboard Kreator

```text
+--------------------------------------------------------------+
| Navbar                                                       |
+--------------------------------------------------------------+
| Halo, [Nama Kreator]                        [Lengkapi profil]|
+--------------------------------------------------------------+
| Statistik:  Pengajuan aktif 3 | Proyek berjalan 1 | Rating 4.8|
+--------------------------------------------------------------+
| PROYEK YANG DIIKUTI                                          |
| +---------------------------+ +---------------------------+   |
| | Proyek A    [60%]         | | Proyek B    [25%]         |   |
| | 3/5 tugas selesai         | | 1/4 tugas selesai         |   |
| +---------------------------+ +---------------------------+   |
+--------------------------------------------------------------+
| PENGAJUAN SAYA                                               |
| Proyek C - Pending | Proyek D - Diterima | Proyek E - Ditolak|
+--------------------------------------------------------------+
```

## 6. Catatan Responsivitas

- **Desktop (≥1024 px):** layout dua kolom pada detail proyek.
- **Tablet (768–1023 px):** kartu proyek dua kolom.
- **Ponsel (<768 px):** satu kolom, panel aksi dipindahkan ke bawah konten.

## 7. Kesimpulan

Wireframe di atas menetapkan kerangka halaman tanpa detail visual. Seluruh wireframe selanjutnya dikembangkan menjadi mockup pada dokumen `Mockup.md`.
