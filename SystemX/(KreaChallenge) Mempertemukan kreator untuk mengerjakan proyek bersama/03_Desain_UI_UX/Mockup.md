# Mockup

## 1. Tujuan

Mockup menyajikan gambaran visual akhir KreaChallenge, meliputi warna, tipografi, komponen, dan hierarchy tampilan. Dokumen ini menjadi panduan implementasi Tailwind CSS pada Vue 3.

## 2. Sistem Warna

| Peran | Warna | Kode |
|---|---|---|
| Latar utama | Hitam gelap | `#08080C` |
| Permukaan kartu | Abu gelap | `#111119` / `#101017` |
| Aksen utama | Hijau limau | `#D7FF3E` |
| Teks utama | Putih | `#FFFFFF` |
| Teks sekunder | Putih transparan | `rgba(255,255,255,0.55)` |
| Gradient pendukung | Ungu–pink | `#7C3AED → #C026D3 → #F43F5E` |
| Status sukses | Hijau limau | `#D7FF3E` |
| Status gagal | Merah muda | `#F43F5E` |

## 3. Tipografi

- **Font utama:** Instrument Sans / Inter.
- **Heading besar:** 48–96 px, weight 700, tracking negatif.
- **Heading section:** 32–48 px, weight 700.
- **Body text:** 14–16 px, line-height 1.7.
- **Label kecil:** 10–11 px, uppercase, letter-spacing 0.18em.

## 4. Komponen Utama

### 4.1 Navigation Pill
Bentuk pil dengan latar `#111119`/85%, border putih 10%, shadow halus, dan backdrop blur. Menu aktif menggunakan warna `#D7FF3E`.

### 4.2 Kartu Proyek
```text
+--------------------------------------+
| [garis gradient]                     |
|                                      |
| KATEGORI                    [icon]   |
|                                      |
| Judul Proyek                         |
| Deskripsi singkat proyek...          |
|                                      |
| HADIAH   KARYA   SISA                |
| Rp 15jt  24      10 hari             |
|                                      |
| Lihat detail ->                      |
+--------------------------------------+
```

### 4.3 Kartu Kreator
```text
+----------------------------+
|   [Foto profil]            |
|   Nama Kreator             |
|   Ilustrator · Bandung     |
|   [Desain] [Ilustrasi]     |
|   ⭐ 4.9 (28 ulasan)       |
|   [Lihat portofolio]       |
+----------------------------+
```

### 4.4 Progress Bar
```text
Progres proyek        60%
██████████████░░░░░░
3 dari 5 tugas selesai
```

### 4.5 Status Badge

| Status | Tampilan |
|---|---|
| Open | Latar `#D7FF3E`/10%, teks `#D7FF3E` |
| In Progress | Latar ungu/15%, teks ungu muda |
| Completed | Latar putih/10%, teks putih |
| Pending | Latar kuning/10%, teks kuning |
| Rejected | Latar merah/10%, teks merah |

## 5. Mockup Halaman Beranda (Deskripsi Visual)

1. **Ribbon kuning** di bagian atas dengan teks berjalan: `KreaChallenge · PROYEK BARU · 12.400 KREATOR`.
2. **Nav pill melayang** di tengah atas, tidak menutup konten saat scroll karena disembunyikan saat pengguna menggulir ke bawah.
3. **Hero** menggunakan tipografi sangat besar dengan kombinasi teks putih dan hijau limau, serta kartu statistik miring di sisi kanan.
4. **Grid kategori** menampilkan enam kategori dengan ikon garis.
5. **Bagian proyek terbaru** menggunakan kartu-kartu dengan gradient tipis di bagian atas.
6. **CTA penuh warna hijau limau** di bagian bawah dengan tombol hitam bulat.

## 6. Mockup Detail Proyek (Deskripsi Visual)

- Breadcrumb kecil di atas judul.
- Judul proyek besar dengan badge status di samping kanan.
- Meta informasi menggunakan ikon: kategori, tenggat, anggaran.
- Dua kolom: deskripsi + daftar tugas di kiri, panel aksi dan pemilik proyek di kanan.
- Area pesan menggunakan balon chat sederhana dengan input di bawah.

## 7. Accessibility

1. Kontras teks terhadap latar minimal 4.5:1.
2. Setiap tombol memiliki `aria-label`.
3. Status tidak hanya dibedakan warna, tetapi juga teks.
4. Fokus keyboard ditandai dengan outline `#D7FF3E`.

## 8. Kesimpulan

Mockup KreaChallenge menetapkan identitas visual yang konsisten dengan tema gelap dan aksen hijau limau. Panduan ini diterjemahkan langsung ke dalam komponen Vue dan utility Tailwind pada tahap pengembangan.
