# Kebutuhan Sistem

## 1. Pengantar

Kebutuhan sistem dibagi menjadi dua kategori, yaitu kebutuhan fungsional dan kebutuhan nonfungsional. Kebutuhan fungsional menjelaskan apa yang harus dilakukan sistem, sedangkan kebutuhan nonfungsional menjelaskan bagaimana sistem harus berperilaku.

## 2. Kebutuhan Fungsional

| ID | Nama Kebutuhan | Aktor | Deskripsi | Prioritas |
|---|---|---|---|---|
| FR-01 | Registrasi akun | Semua pengguna | Pengguna dapat mendaftar dengan nama, email, password, dan peran | Tinggi |
| FR-02 | Autentikasi | Semua pengguna | Pengguna dapat login dan logout | Tinggi |
| FR-03 | Kelola profil | Kreator, Klien | Pengguna dapat memperbarui data diri dan foto profil | Tinggi |
| FR-04 | Kelola portofolio | Kreator | Kreator dapat menambahkan karya, tautan, dan daftar keahlian | Tinggi |
| FR-05 | Cari kreator | Klien | Klien dapat mencari kreator berdasarkan kategori dan keahlian | Tinggi |
| FR-06 | Buat proyek | Klien | Klien dapat membuat proyek dengan brief, tenggat, dan anggaran | Tinggi |
| FR-07 | Lihat daftar proyek | Kreator | Kreator dapat melihat proyek yang tersedia | Tinggi |
| FR-08 | Ajukan diri | Kreator | Kreator dapat mengirim pengajuan beserta pesan singkat | Tinggi |
| FR-09 | Seleksi pengajuan | Klien | Klien dapat menerima atau menolak pengajuan | Tinggi |
| FR-10 | Kelola tugas | Klien, Kreator | Anggota proyek dapat membuat, menugaskan, dan memperbarui tugas | Tinggi |
| FR-11 | Pantau progres | Klien, Kreator | Sistem menampilkan persentase penyelesaian tugas | Sedang |
| FR-12 | Kirim pesan | Klien, Kreator | Pengguna dapat mengirim pesan dalam konteks proyek | Sedang |
| FR-13 | Beri ulasan | Klien | Klien dapat memberi rating dan komentar setelah proyek selesai | Sedang |
| FR-14 | Moderasi konten | Admin | Admin dapat menonaktifkan akun atau proyek yang melanggar | Sedang |

## 3. Kebutuhan Nonfungsional

| ID | Kategori | Kebutuhan | Target |
|---|---|---|---|
| NFR-01 | Kinerja | Waktu muat halaman utama | Maksimal 3 detik |
| NFR-02 | Keamanan | Penyimpanan password | Menggunakan hash (bcrypt/Argon) |
| NFR-03 | Keamanan | Akses endpoint modifikasi data | Hanya untuk pengguna terautentikasi |
| NFR-04 | Validasi | Validasi input | Dilakukan di sisi klien dan server |
| NFR-05 | Antarmuka | Responsivitas | Desktop, tablet, dan ponsel |
| NFR-06 | Kompatibilitas | Browser | Chrome, Edge, Firefox, Safari versi terkini |
| NFR-07 | Kemudahan | Alur registrasi hingga pengajuan | Maksimal 5 langkah tanpa pelatihan |
| NFR-08 | Pemeliharaan | Dokumentasi kode | README dan komentar pada modul utama |
| NFR-09 | Skalabilitas | Struktur database | Siap ditambah indeks dan relasi baru |
| NFR-10 | Auditabilitas | Log perubahan status proyek | Tersimpan minimal 12 bulan |

## 4. Kebutuhan Pengguna

### 4.1 Kreator
- Ingin profil yang menampilkan keahlian dan portofolio secara jelas.
- Ingin menemukan proyek yang sesuai tanpa harus bergabung ke banyak grup.
- Ingin status pengajuan yang transparan.
- Ingin daftar tugas yang mudah dipahami.

### 4.2 Klien
- Ingin membuat brief proyek dengan format yang jelas.
- Ingin membandingkan kreator berdasarkan keahlian dan ulasan.
- Ingin memantau progres tanpa harus bertanya berulang kali.
- Ingin memberi ulasan setelah proyek selesai.

### 4.3 Admin
- Ingin melihat daftar pengguna dan proyek.
- Ingin menonaktifkan konten yang melanggar ketentuan.
- Ingin melihat laporan aktivitas sistem.

## 5. Asumsi dan Ketergantungan

1. Pengguna memiliki koneksi internet dan browser modern.
2. Data portofolio berupa tautan eksternal, bukan unggahan file besar pada versi awal.
3. Sistem tidak memproses pembayaran pada versi awal.
4. Notifikasi masih menggunakan tampilan dalam aplikasi, bukan email/SMS.

## 6. Prioritas Pengembangan

| Fase | Fitur |
|---|---|
| Fase 1 (MVP) | FR-01 sampai FR-10 |
| Fase 2 | FR-11 sampai FR-13 |
| Fase 3 | FR-14 dan penyempurnaan nonfungsional |

## 7. Kesimpulan

Kebutuhan sistem KreaChallenge berfokus pada pemenuhan alur inti kolaborasi: bertemu, mengajukan, membentuk tim, mengerjakan, dan mengevaluasi. Kebutuhan fungsional dengan prioritas Tinggi menjadi acuan dalam pembuatan SRS dan rancangan sistem.
