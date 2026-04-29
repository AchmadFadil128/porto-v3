# Product Requirements Document (PRD)
## Web Portofolio Next.js + Tailwind CSS

---

## 1. OVERVIEW
Web portofolio personal dengan teknologi **Next.js** dan **Tailwind CSS**. Desain telah didefinisikan terpisah dalam `Design.md`. Saat ini menggunakan **dummy data**, dengan rencana integrasi **REST API** yang terhubung ke service dashboard di masa depan.

---

## 2. STRUKTUR DATA

### 2.1 People (Hardcore Data)
- **Name**: Nama lengkap
- **Description**: Deskripsi singkat profil
- **Working At**: Perusahaan/organisasi saat ini
- **Skills**: Daftar keahlian
- **Education**: Riwayat pendidikan
- **Carrier Path**: Perjalanan karir
- **Contact**: Informasi kontak

### 2.2 Project
- **Name Project**: Judul proyek
- **Picture URL**: URL gambar pertama
- **Short Description**: Deskripsi singkat
- **Date Create**: Tanggal pembuatan
- **Status**: Planned, In Progress, On Hold, Completed, Cancelled
- **Long Description**: Deskripsi detail (untuk halaman detail)
- **Other Pictures**: Galeri gambar tambahan

### 2.3 Writings
- **Name Write**: Judul tulisan
- **Short Description**: Deskripsi singkat
- **Date Create**: Tanggal publikasi
- **Status**: Planned, In Progress, On Hold, Completed
- **URL File**: Link ke file/artikel lengkap

### 2.4 Certification
- **Name**: Nama sertifikasi
- **Status**: Active, Near Expiry, Expired
- **Picture URL**: URL gambar sertifikat

---

## 3. HALAMAN & FITUR

### 3.1 Homepage
**Komponen:**
- **Navbar**: Navigasi utama
- **Hero Section**: Name & Description People
- **Overview Section**: Working At, Skills, Education (preview)
  - CTA: "See More" → Redirect ke About Me
- **Project Section**: 3 Card Project (Name, Picture, Short Description, Status)
  - CTA: "See More" → All Project Page
- **Writings Section**: 3 Card Writings (Name, Description, Status)
  - CTA: "See More" → All Writings Page
- **Certification Section**: 3 Card Certification (Name, Status, Picture)
  - CTA: "See More" → All Certificate Page
- **Footer**: Informasi footer

### 3.2 All Project Page
- **Navbar**
- **Grid/List Card Project**: Menampilkan semua project
  - Setiap card berisi: Name, Picture, Short Description, Status
  - CTA: Click card → Detailed Project Page

### 3.3 Detailed Project Page
- **Navbar**
- **Header**: Name Project + Status badge
- **Featured Image**: Gambar pertama proyek
- **Long Description**: Penjelasan detail proyek
- **Gallery**: Galeri gambar tambahan

### 3.4 All Writings Page
- **Navbar**
- **Grid/List Card Writings**: Menampilkan semua tulisan
  - Setiap card berisi: Name, Description, Status
  - CTA: Click card → Detailed Writings Page

### 3.5 Detailed Writings Page
- **Navbar**
- **Title**: Nama tulisan
- **Short Description**: Preview/intro
- **Content Link**: Button/link ke URL file lengkap

### 3.6 All Certificate Page
- **Navbar**
- **Grid Card Certification**: Menampilkan semua sertifikasi
  - Setiap card berisi: Name, Status badge (Active/Near Expiry/Expired), Picture

### 3.7 About Me Page (Hardcoded)
- **Navbar**
- **Profile Section**: Full Name + Detailed Description
- **Hobby Section**: Hobi dan minat personal
- **Education & Career Journey**: Timeline riwayat pendidikan & karir
- **Social Media**: Link ke akun media sosial

---

## 4. DATA MANAGEMENT

### 4.1 Dummy Data
- Saat ini menggunakan **static dummy data** (file JSON atau konstanta dalam kode)
- Disimpan terpisah untuk memudahkan migrasi ke API

### 4.2 Future Integration (REST API)
- Akan diintegrasikan dengan **REST API dari service dashboard**
- Endpoints yang diperlukan:
  - `GET /people` - Data profil
  - `GET /projects` - Daftar semua project
  - `GET /projects/:id` - Detail project spesifik
  - `GET /writings` - Daftar semua tulisan
  - `GET /writings/:id` - Detail tulisan spesifik
  - `GET /certifications` - Daftar semua sertifikasi
- **Note**: Struktur API akan disesuaikan saat implementasi

---

## 5. TECHNICAL STACK
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Design Reference**: Design.md
- **Data Source**: Dummy data (migrasi ke REST API kemudian)

---

## 6. CATATAN PENTING
✓ Desain sudah siap di `Design.md` - tidak perlu redefinisi  
✓ Gunakan dummy data dengan struktur yang fleksibel untuk API migration  
✓ Siapkan abstraction layer untuk data fetching (hooks/services) agar mudah switch ke API  
✓ About Me page bersifat hardcoded (tidak dinamis dari API)