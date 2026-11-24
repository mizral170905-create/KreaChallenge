# Activity Diagram

## 1. Tujuan

Activity diagram digunakan untuk menggambarkan alur kerja sistem KreaChallenge, termasuk percabangan keputusan, proses parallel, dan kondisi akhir. Dokumen ini melengkapi use case dengan memperlihatkan urutan aktivitas.

## 2. Aktivitas Autentikasi

```mermaid
flowchart TD
    A[Mulai] --> B[Buka halaman login]
    B --> C[Input email dan password]
    C --> D{Data valid?}
    D -- Tidak --> E[Tampilkan pesan error]
    E --> C
    D -- Ya --> F[Cek peran pengguna]
    F --> G{Kreator?}
    G -- Ya --> H[Arahkan ke dashboard kreator]
    G -- Tidak --> I{Klien?}
    I -- Ya --> J[Arahkan ke dashboard klien]
    I -- Tidak --> K[Arahkan ke dashboard admin]
    H --> L[Selesai]
    J --> L
    K --> L
```

## 3. Aktivitas Pengajuan Kreator

```mermaid
flowchart TD
    A[Kreator login] --> B[Buka daftar proyek]
    B --> C[Filter proyek sesuai keahlian]
    C --> D[Pilih proyek]
    D --> E[Lihat detail brief]
    E --> F{Profil lengkap?}
    F -- Tidak --> G[Lengkapi profil & portofolio]
    G --> F
    F -- Ya --> H[Isi pesan pengajuan]
    H --> I[Kirim pengajuan]
    I --> J[Simpan status pending]
    J --> K[Selesai]
```

## 4. Aktivitas Seleksi Pengajuan oleh Klien

```mermaid
flowchart TD
    A[Klien buka proyek] --> B[Lihat daftar pengajuan]
    B --> C{Pengajuan baru?}
    C -- Tidak --> D[Tunggu kreator mengajukan]
    D --> B
    C -- Ya --> E[Buka profil kreator]
    E --> F{Setujui?}
    F -- Tidak --> G[Status = rejected]
    F -- Ya --> H[Status = accepted]
    H --> I[Tambahkan kreator ke tim]
    I --> J[Buat tugas awal]
    G --> K[Selesai]
    J --> K
```

## 5. Aktivitas Manajemen Tugas

```mermaid
flowchart TD
    A[Tim proyek terbentuk] --> B[Klien membuat tugas]
    B --> C[Tentukan judul, penanggung jawab, tenggat]
    C --> D[Simpan tugas dengan status todo]
    D --> E[Kreator mengerjakan tugas]
    E --> F{Tugas selesai?}
    F -- Tidak --> G[Perbarui catatan/status in_progress]
    G --> F
    F -- Ya --> H[Status = done]
    H --> I[Sistem menghitung ulang progres proyek]
    I --> J[Selesai]
```

## 6. Aktivitas Penyelesaian Proyek

```mermaid
flowchart TD
    A[Semua tugas done] --> B[Klien verifikasi hasil]
    B --> C{Hasil sesuai brief?}
    C -- Tidak --> D[Minta revisi]
    D --> E[Buat tugas revisi]
    E --> A
    C -- Ya --> F[Status proyek = completed]
    F --> G[Klien memberi rating dan ulasan]
    G --> H[Ulasan tampil di profil kreator]
    H --> I[Selesai]
```

## 7. Catatan Pemodelan

1. Simbol `{}` pada diagram Mermaid merepresentasikan keputusan/percabangan.
2. Setiap alur memiliki kondisi awal dan akhir yang jelas.
3. Alur alternatif ditampilkan untuk kondisi profil belum lengkap dan hasil tidak sesuai.
4. Activity diagram ini selaras dengan use case UC-01 sampai UC-13.

## 8. Kesimpulan

Activity diagram KreaChallenge menggambarkan lima alur utama: autentikasi, pengajuan, seleksi, manajemen tugas, dan penyelesaian proyek. Alur-alur ini menjadi dasar pembuatan logika bisnis pada lapisan backend.
