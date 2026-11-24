# Entity Relationship Diagram (ERD)

## 1. Tujuan

ERD menggambarkan struktur data KreaChallenge beserta hubungan antarentitas. Dokumen ini menjadi acuan dalam pembuatan migrasi database dan model Eloquent pada Laravel.

## 2. Daftar Entitas

| Entitas | Keterangan |
|---|---|
| USER | Data akun pengguna (kreator, klien, admin) |
| CREATOR_PROFILE | Detail profil dan portofolio kreator |
| PROJECT | Data proyek kreatif |
| APPLICATION | Pengajuan kreator terhadap proyek |
| TASK | Tugas dalam proyek |
| MESSAGE | Pesan komunikasi proyek |
| REVIEW | Ulasan hasil proyek |

## 3. Diagram ERD

```mermaid
erDiagram
    USER ||--o| CREATOR_PROFILE : has
    USER ||--o{ PROJECT : creates
    USER ||--o{ APPLICATION : sends
    USER ||--o{ MESSAGE : sends
    USER ||--o{ REVIEW : writes

    PROJECT ||--o{ APPLICATION : receives
    PROJECT ||--o{ TASK : contains
    PROJECT ||--o{ MESSAGE : has
    PROJECT ||--o{ REVIEW : receives

    USER {
        int id PK
        string name
        string email UK
        string password
        enum role
        timestamp created_at
        timestamp updated_at
    }

    CREATOR_PROFILE {
        int id PK
        int user_id FK
        string bio
        string skills
        string portfolio_url
        string location
    }

    PROJECT {
        int id PK
        int client_id FK
        string title
        text description
        string category
        date deadline
        decimal budget
        enum status
        timestamp created_at
    }

    APPLICATION {
        int id PK
        int project_id FK
        int creator_id FK
        text message
        enum status
        timestamp created_at
    }

    TASK {
        int id PK
        int project_id FK
        int assignee_id FK
        string title
        text description
        enum status
        date due_date
    }

    MESSAGE {
        int id PK
        int project_id FK
        int sender_id FK
        text body
        timestamp sent_at
    }

    REVIEW {
        int id PK
        int project_id FK
        int reviewer_id FK
        int rating
        text comment
        timestamp created_at
    }
```

## 4. Kardinalitas

| Hubungan | Kardinalitas | Penjelasan |
|---|---|---|
| USER → CREATOR_PROFILE | 1 : 0..1 | Satu pengguna maksimal satu profil kreator |
| USER → PROJECT | 1 : 0..* | Satu klien dapat membuat banyak proyek |
| USER → APPLICATION | 1 : 0..* | Satu kreator dapat mengirim banyak pengajuan |
| PROJECT → APPLICATION | 1 : 0..* | Satu proyek menerima banyak pengajuan |
| PROJECT → TASK | 1 : 0..* | Satu proyek memiliki banyak tugas |
| PROJECT → MESSAGE | 1 : 0..* | Satu proyek memiliki banyak pesan |
| PROJECT → REVIEW | 1 : 0..1 | Satu proyek maksimal satu ulasan final |

## 5. Kamus Data Ringkas

### Tabel `users`

| Field | Tipe | Keterangan |
|---|---|---|
| id | bigint PK | Identitas pengguna |
| name | varchar | Nama lengkap |
| email | varchar UK | Email unik untuk login |
| password | varchar | Password hasil hash |
| role | enum | `creator`, `client`, `admin` |

### Tabel `projects`

| Field | Tipe | Keterangan |
|---|---|---|
| id | bigint PK | Identitas proyek |
| client_id | bigint FK | Pemilik proyek |
| title | varchar | Judul proyek |
| description | text | Brief proyek |
| category | varchar | Kategori keahlian |
| deadline | date | Batas waktu |
| budget | decimal | Anggaran |
| status | enum | `open`, `in_progress`, `completed`, `cancelled` |

### Tabel `applications`

| Field | Tipe | Keterangan |
|---|---|---|
| status | enum | `pending`, `accepted`, `rejected` |

### Tabel `tasks`

| Field | Tipe | Keterangan |
|---|---|---|
| status | enum | `todo`, `in_progress`, `done` |

## 6. Pertimbangan Desain

1. `applications` memiliki constraint unik pada pasangan `(project_id, creator_id)` untuk mencegah pengajuan ganda.
2. `tasks.assignee_id` dapat bernilai null sebelum ditugaskan.
3. `reviews` dibatasi satu baris per proyek agar penilaian tetap ringkas.
4. Indeks ditambahkan pada `projects.category`, `applications.status`, dan `tasks.status` untuk mempercepat pencarian.

## 7. Kesimpulan

ERD KreaChallenge terdiri dari tujuh entitas dengan hubungan yang jelas dan mendukung seluruh kebutuhan fungsional. Skema ini diimplementasikan pada file `04_Pengembangan_Aplikasi/database.md`.
