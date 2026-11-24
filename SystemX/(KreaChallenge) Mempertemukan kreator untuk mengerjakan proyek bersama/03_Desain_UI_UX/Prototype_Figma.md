# Prototype Figma

## 1. Tujuan

Prototype Figma digunakan untuk memvalidasi alur interaksi dan tampilan sebelum implementasi kode. Dengan prototype, tim dapat menguji navigasi, keterbacaan, dan konsistensi komponen secara cepat.

## 2. Informasi Umum

| Item | Keterangan |
|---|---|
| Nama file | `KreaChallenge_Prototype.fig` |
| Tautan Figma | `[isikan tautan Figma di sini]` |
| Versi | v1.0 — 23 November 2026 |
| Pemilik desain | Kelompok SystemX |
| Status | Draft / siap untuk review |

## 3. Struktur Frame

```text
KreaChallenge_Prototype.fig
├── 00_Style_Guide
│   ├── Color Palette
│   ├── Typography
│   ├── Buttons & Badges
│   └── Components
├── 01_Landing
│   ├── Desktop - Home
│   ├── Tablet - Home
│   └── Mobile - Home
├── 02_Auth
│   ├── Login
│   ├── Register - Creator
│   └── Register - Client
├── 03_Creator
│   ├── Dashboard
│   ├── Edit Profile
│   ├── Portfolio
│   └── My Applications
├── 04_Client
│   ├── Dashboard
│   ├── Create Project
│   ├── Project Detail
│   └── Applications
├── 05_Project
│   ├── Tasks Board
│   ├── Chat
│   └── Review
└── 06_Admin
    ├── User Management
    └── Moderation
```

## 4. Daftar Alur Prototype

### Alur 1 — Kreator bergabung dan mengajukan diri

```text
Landing → Register Creator → Edit Profile → Portfolio
        → Dashboard → Daftar Proyek → Detail Proyek
        → Ajukan Diri → Status Pending
```

### Alur 2 — Klien membuat proyek dan memilih kreator

```text
Landing → Register Client → Dashboard → Buat Proyek
        → Detail Proyek → Daftar Pengajuan → Terima Kreator
        → Buat Tugas → Pantau Progres
```

### Alur 3 — Penyelesaian proyek

```text
Dashboard Proyek → Semua tugas selesai → Verifikasi hasil
                 → Beri ulasan → Ulasan tampil di profil kreator
```

## 5. Komponen yang Dapat Digunakan Ulang

| Komponen | Varian |
|---|---|
| Button | Primary, Secondary, Ghost, Danger |
| Badge | Open, In Progress, Completed, Pending, Rejected |
| Card | Project, Creator, Task, Review |
| Input | Text, Textarea, Select, Date |
| Avatar | Small, Medium, Large |
| Progress | Bar, Circular |
| Modal | Confirm, Form, Detail |

## 6. Catatan Interaksi

1. Klik tombol **Ajukan Diri** menampilkan modal konfirmasi.
2. Klik status pengajuan menampilkan tooltip penjelasan.
3. Hover kartu proyek menampilkan bayangan dan sedikit translasi.
4. Navigasi navbar hilang saat halaman digulir ke bawah dan muncul kembali saat digulir ke atas.
5. Form dengan input invalid menampilkan pesan error inline.

## 7. Checklist Review Prototype

- [ ] Warna sesuai style guide.
- [ ] Semua tombol memiliki state hover dan disabled.
- [ ] Alur pengajuan dapat diselesaikan tanpa halaman buntu.
- [ ] Teks tidak terpotong pada layar 360 px.
- [ ] Status ditampilkan dengan teks, bukan hanya warna.
- [ ] Nama komponen konsisten dengan implementasi Vue.

## 8. Kesimpulan

Prototype Figma KreaChallenge terdiri dari enam grup frame utama dan tiga alur prioritas. Prototype ini menjadi jembatan antara wireframe/mockup dan implementasi antarmuka pada `04_Pengembangan_Aplikasi/source_code.md`.
