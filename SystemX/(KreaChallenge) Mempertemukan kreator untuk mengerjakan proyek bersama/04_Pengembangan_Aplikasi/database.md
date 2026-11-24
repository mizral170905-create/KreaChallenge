# Database

## 1. Tujuan

Dokumen ini berisi rancangan skema database KreaChallenge dalam bentuk DDL (Data Definition Language). Skema ini merupakan implementasi dari ERD pada folder `02_Rancangan_Sistem/ERD.md`.

## 2. Daftar Tabel

| No | Tabel | Fungsi |
|---|---|---|
| 1 | `users` | Menyimpan akun pengguna |
| 2 | `creator_profiles` | Menyimpan profil dan portofolio kreator |
| 3 | `projects` | Menyimpan data proyek |
| 4 | `applications` | Menyimpan pengajuan kreator |
| 5 | `tasks` | Menyimpan tugas proyek |
| 6 | `messages` | Menyimpan pesan proyek |
| 7 | `reviews` | Menyimpan ulasan proyek |

## 3. DDL Tabel

```sql
CREATE TABLE users (
    BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    VARCHAR(255) NOT NULL,
    VARCHAR(255) NOT NULL UNIQUE,
    VARCHAR(255) NOT NULL,
    ENUM('creator', 'client', 'admin') NOT NULL DEFAULT 'creator',
    TIMESTAMP NULL,
    TIMESTAMP NULL,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE creator_profiles (
    BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    BIGINT UNSIGNED NOT NULL,
    TEXT NULL,
    VARCHAR(500) NULL,
    VARCHAR(255) NULL,
    VARCHAR(150) NULL,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE projects (
    BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    BIGINT UNSIGNED NOT NULL,
    VARCHAR(255) NOT NULL,
    TEXT NOT NULL,
    VARCHAR(100) NOT NULL,
    DATE NOT NULL,
    DECIMAL(15,2) NULL,
    ENUM('open', 'in_progress', 'completed', 'cancelled') NOT NULL DEFAULT 'open',
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_projects_category (category),
    INDEX idx_projects_status (status)
);

CREATE TABLE applications (
    BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    BIGINT UNSIGNED NOT NULL,
    BIGINT UNSIGNED NOT NULL,
    TEXT NULL,
    ENUM('pending', 'accepted', 'rejected') NOT NULL DEFAULT 'pending',
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY uq_application (project_id, creator_id),
    INDEX idx_applications_status (status)
);

CREATE TABLE tasks (
    BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    BIGINT UNSIGNED NOT NULL,
    BIGINT UNSIGNED NULL,
    VARCHAR(255) NOT NULL,
    TEXT NULL,
    ENUM('todo', 'in_progress', 'done') NOT NULL DEFAULT 'todo',
    DATE NULL,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (assignee_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_tasks_status (status)
);

CREATE TABLE messages (
    BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    BIGINT UNSIGNED NOT NULL,
    BIGINT UNSIGNED NOT NULL,
    TEXT NOT NULL,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    BIGINT UNSIGNED NOT NULL,
    BIGINT UNSIGNED NOT NULL,
    TINYINT UNSIGNED NOT NULL,
    TEXT NULL,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY uq_review_project (project_id),
    CONSTRAINT chk_rating CHECK (rating BETWEEN 1 AND 5)
);
```

> Catatan: Pada implementasi Laravel, DDL di atas dibuat melalui file migrasi pada direktori `database/migrations`. Nama kolom disesuaikan dengan konvensi Laravel (`id`, `user_id`, `client_id`, dan seterusnya).

## 4. Contoh Data Awal (Seeder)

| Tabel | Data Contoh |
|---|---|
| users | 1 admin, 5 kreator, 3 klien |
| creator_profiles | Keahlian: Desain, Ilustrasi, Fotografi, Video, Development |
| projects | 6 proyek dengan status open/in_progress/completed |
| applications | 10 pengajuan dengan status bervariasi |
| tasks | 18 tugas dengan status todo/in_progress/done |
| messages | 12 pesan pada 3 proyek |
| reviews | 3 ulasan untuk proyek selesai |

## 5. Query Contoh

### 5.1 Progres Proyek

```sql
SELECT
    p.id,
    p.title,
    COUNT(t.id) AS total_tugas,
    SUM(CASE WHEN t.status = 'done' THEN 1 ELSE 0 END) AS tugas_selesai,
    ROUND(
        SUM(CASE WHEN t.status = 'done' THEN 1 ELSE 0 END) * 100.0 / NULLIF(COUNT(t.id), 0),
        2
    ) AS persentase
FROM projects p
LEFT JOIN tasks t ON t.project_id = p.id
WHERE p.id = ?
GROUP BY p.id, p.title;
```

### 5.2 Kreator Berdasarkan Keahlian

```sql
SELECT u.id, u.name, cp.skills, cp.portfolio_url
FROM creator_profiles cp
JOIN users u ON u.id = cp.user_id
WHERE cp.skills LIKE '%Desain%';
```

## 6. Strategi Indeks

| Tabel | Indeks | Alasan |
|---|---|---|
| projects | `category`, `status` | Mempercepat filter daftar proyek |
| applications | `status`, `(project_id, creator_id)` | Filter status dan cegah duplikat |
| tasks | `status` | Menghitung progres lebih cepat |
| reviews | `project_id` | Menjamin satu ulasan per proyek |

## 7. Backup dan Migrasi

1. Gunakan `php artisan migrate` untuk perubahan skema.
2. Simpan backup harian pada lingkungan produksi.
3. Uji migrasi pada lingkungan staging sebelum produksi.
4. Gunakan seeder hanya untuk data contoh, bukan data produksi.

## 8. Kesimpulan

Skema database KreaChallenge terdiri dari tujuh tabel relasional dengan constraint yang menjaga integritas data. Index dan constraint ditambahkan untuk mendukung kinerja dan konsistensi.
