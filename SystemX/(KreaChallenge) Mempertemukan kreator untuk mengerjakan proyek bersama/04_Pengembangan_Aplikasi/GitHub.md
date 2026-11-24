# GitHub

## 1. Tujuan

Dokumen ini menjelaskan strategi pengelolaan source code KreaChallenge menggunakan Git dan GitHub. Tujuannya adalah menjaga kerapian riwayat perubahan, memudahkan kolaborasi tim, dan mendukung proses review sebelum kode digabung.

## 2. Informasi Repositori

| Item | Keterangan |
|---|---|
| Nama repositori | `KreaChallenge` |
| URL | `[isikan URL GitHub di sini]` |
| Visibilitas | Private / Public (sesuaikan) |
| Branch utama | `main` |
| Branch pengembangan | `develop` |
| Bahasa utama | PHP, TypeScript, Vue |

## 3. Strategi Branching

```text
main
└── develop
    ├── feature/auth
    ├── feature/project-module
    ├── feature/application-module
    ├── feature/task-module
    ├── feature/chat-review
    ├── fix/navbar-overlap
    └── docs/laporan-makalah
```

### Aturan Penamaan Branch

| Prefix | Penggunaan | Contoh |
|---|---|---|
| `feature/` | Fitur baru | `feature/task-module` |
| `fix/` | Perbaikan bug | `fix/navbar-overlap` |
| `docs/` | Dokumentasi | `docs/laporan-makalah` |
| `refactor/` | Perbaikan struktur kode | `refactor/project-service` |
| `test/` | Penambahan pengujian | `test/application-flow` |

## 4. Alur Kerja

1. Pastikan branch `develop` dalam keadaan terbaru.
2. Buat branch baru dari `develop`.
3. Kerjakan perubahan dengan commit yang kecil dan jelas.
4. Jalankan `npm run types:check`, `npm run build`, dan `php artisan test`.
5. Push branch ke GitHub.
6. Buat Pull Request ke `develop`.
7. Minimal satu anggota tim melakukan review.
8. Setelah disetujui, lakukan merge.

## 5. Format Commit Message

Gunakan format berikut:

```text
<tipe>: <deskripsi singkat>
```

Contoh:

```text
feat: tambah modul pengajuan kreator
fix: navbar tidak menutup konten saat scroll
docs: tambah dokumentasi ERD dan DFD
test: tambah black box test untuk registrasi
```

### Tipe Commit

| Tipe | Arti |
|---|---|
| `feat` | Fitur baru |
| `fix` | Perbaikan bug |
| `docs` | Dokumentasi |
| `style` | Perubahan format tanpa mengubah logika |
| `refactor` | Perbaikan struktur kode |
| `test` | Penambahan atau perbaikan tes |
| `chore` | Konfigurasi dan dependensi |

## 6. Template Pull Request

```markdown
## Deskripsi
Jelaskan perubahan yang dilakukan.

## Terkait
Closes #123

## Jenis Perubahan
- [ ] Fitur baru
- [ ] Perbaikan bug
- [ ] Dokumentasi
- [ ] Refactor

## Checklist
- [ ] Kode sudah diuji lokal
- [ ] types:check lulus
- [ ] build lulus
- [ ] Dokumentasi diperbarui
- [ ] Tidak ada perubahan yang tidak sengaja
```

## 7. Konfigurasi Awal

```bash
git init
git remote add origin [url-repo-github]
git checkout -b develop
git add .
git commit -m "chore: initial project setup"
git push -u origin develop
```

## 8. File yang Tidak Dilacak

Pastikan `.gitignore` memuat:

```text
/vendor
/node_modules
/public/build
/public/hot
.env
.phpunit.result.cache
.DS_Store
```

## 9. Proteksi Branch

Yang dapat diterapkan pada GitHub:

1. Branch `main` hanya bisa diubah melalui Pull Request.
2. Wajib lulus status check sebelum merge.
3. Wajib minimal satu approval.
4. Larangan force push pada `main` dan `develop`.

## 10. Kolaborasi Dokumentasi

Folder laporan makalah juga disimpan di repositori yang sama pada direktori:

```text
SystemX/(KreaChallenge) Mempertemukan kreator untuk mengerjakan proyek bersama/
```

Setiap perubahan pada dokumen laporan menggunakan prefix commit `docs:`.

## 11. Kesimpulan

Strategi GitHub KreaChallenge menggunakan branch utama `main`, branch pengembangan `develop`, dan branch fitur per modul. Pull request dan peninjauan tim menjadi mekanisme kontrol kualitas sebelum kode digabung.
