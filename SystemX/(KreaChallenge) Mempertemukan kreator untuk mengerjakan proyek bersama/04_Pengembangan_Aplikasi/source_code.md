# Source Code

## 1. Tujuan

Dokumen ini menjelaskan struktur source code KreaChallenge, teknologi yang digunakan, serta cara menjalankan aplikasi secara lokal. Panduan ini ditujukan kepada pengembang yang akan melanjutkan atau memelihara sistem.

## 2. Teknologi

| Lapisan | Teknologi | Versi Referensi |
|---|---|---|
| Backend | Laravel | 13.x |
| Frontend | Vue 3 | 3.x |
| Bridge | Inertia.js | 2.x |
| Styling | Tailwind CSS | 4.x |
| Build | Vite | 7.x |
| Bahasa | TypeScript + PHP 8.3 | - |
| Database | MySQL / PostgreSQL | - |

## 3. Struktur Direktori

```text
KreaChallenge/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── AuthController.php
│   │   │   ├── ProjectController.php
│   │   │   ├── ApplicationController.php
│   │   │   ├── TaskController.php
│   │   │   └── ReviewController.php
│   │   ├── Middleware/
│   │   └── Requests/
│   ├── Models/
│   │   ├── User.php
│   │   ├── CreatorProfile.php
│   │   ├── Project.php
│   │   ├── Application.php
│   │   ├── Task.php
│   │   ├── Message.php
│   │   └── Review.php
│   ├── Services/
│   │   └── ProjectProgressService.php
│   └── Policies/
│       └── ProjectPolicy.php
├── database/
│   ├── migrations/
│   ├── factories/
│   └── seeders/
├── resources/
│   ├── css/
│   ├── js/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── app.ts
│   └── views/
├── routes/
│   ├── web.php
│   └── auth.php
├── tests/
│   ├── Feature/
│   └── Unit/
├── .env.example
├── composer.json
└── package.json
```

## 4. Konvensi Penamaan

1. Nama kelas model menggunakan singular PascalCase: `Project`, `Application`.
2. Nama tabel menggunakan plural snake_case: `projects`, `applications`.
3. Nama route menggunakan kebab-case: `/cara-kerja`, `/detail-proyek`.
4. Nama komponen Vue menggunakan PascalCase: `ProjectCard.vue`.
5. Nama method mengikuti konvensi Laravel: `store()`, `update()`, `destroy()`.

## 5. Modul Utama

### 5.1 Modul Autentikasi
- File: `app/Http/Controllers/AuthController.php`
- Halaman: `resources/js/pages/auth/Login.vue`, `Register.vue`
- Fitur: registrasi, login, logout, reset password.

### 5.2 Modul Proyek
- File: `app/Http/Controllers/ProjectController.php`
- Model: `Project`
- Halaman: `resources/js/pages/projects/Index.vue`, `Create.vue`, `Show.vue`
- Fitur: CRUD proyek, filter kategori, detail proyek.

### 5.3 Modul Pengajuan
- File: `app/Http/Controllers/ApplicationController.php`
- Model: `Application`
- Fitur: pengajuan kreator, persetujuan/penolakan oleh klien.

### 5.4 Modul Tugas
- File: `app/Http/Controllers/TaskController.php`
- Model: `Task`
- Fitur: pembuatan tugas, perubahan status, perhitungan progres.

### 5.5 Modul Pesan dan Ulasan
- Model: `Message`, `Review`
- Fitur: chat per proyek, rating dan komentar.

## 6. Menjalankan Aplikasi

### 6.1 Prasyarat
- PHP ≥ 8.3
- Composer
- Node.js ≥ 20
- MySQL/PostgreSQL
- Git

### 6.2 Langkah Instalasi

```bash
git clone [url-repo-github] KreaChallenge
cd KreaChallenge
composer install
npm install
cp .env.example .env
php artisan key:generate
```

Atur koneksi database pada file `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=KreaChallenge
DB_USERNAME=root
DB_PASSWORD=
```

Lanjutkan dengan:

```bash
php artisan migrate --seed
npm run dev
php artisan serve
```

Aplikasi dapat diakses pada `http://127.0.0.1:8000`.

## 7. Perintah Pengembangan

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan Vite dev server |
| `npm run build` | Membuild aset produksi |
| `npm run types:check` | Memeriksa tipe TypeScript |
| `php artisan test` | Menjalankan tes PHPUnit |
| `php artisan migrate:fresh --seed` | Reset database dan isi data contoh |

## 8. Standar Kualitas

1. Gunakan Form Request untuk validasi.
2. Gunakan Policy untuk otorisasi.
3. Pisahkan logika bisnis ke `app/Services`.
4. Hindari logika berat di dalam controller.
5. Tambahkan komentar pada fungsi yang kompleks.
6. Pastikan `types:check` dan `build` lulus sebelum commit.

## 9. Kesimpulan

Struktur source code KreaChallenge mengikuti praktik standar Laravel dan Vue. Pemisahan modul memudahkan pengembangan lanjutan serta pengujian per fitur.
