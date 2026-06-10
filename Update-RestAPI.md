# Update — REST API Integration
## Menghubungkan Portfolio Next.js ke Service Dashboard

---

## 1. OVERVIEW

Dokumen ini menjelaskan langkah-langkah untuk memigrasikan aplikasi portofolio dari **dummy data statis** ke **live REST API** yang disediakan oleh service dashboard.

Karena `lib/data.ts` sudah menggunakan abstraction layer (fungsi async `getProjects()`, `getWritings()`, dll), perubahan hanya terjadi di file tersebut — **tidak ada perubahan di components atau pages**.

---

## 2. PERUBAHAN FILE

| File | Aksi |
|---|---|
| `lib/data.ts` | Update service functions → fetch dari API |
| `.env.local` | Tambah `API_BASE_URL` |
| `next.config.ts` | Tambah domain gambar jika perlu |

---

## 3. ENVIRONMENT VARIABLES

Buat / update file `.env.local` di root project Next.js:

```env
# URL service dashboard (server-side only, tanpa NEXT_PUBLIC_)
API_BASE_URL=http://localhost:4000
```

> **Gunakan tanpa `NEXT_PUBLIC_`** — fetch hanya terjadi di Server Components (server-side), sehingga URL tidak perlu di-expose ke client browser.
>
> Di production: ganti dengan URL aktual, misal `https://api.yourdomain.com`

---

## 4. UPDATE `lib/data.ts`

Ganti **seluruh bagian "Service Functions"** di bawah dummy data dengan implementasi fetch berikut.

### 4.1 Helper Fetch

Tambahkan helper di bagian atas file (setelah type definitions, sebelum dummy data):

```typescript
// ─── API Config ───────────────────────────────────────────────────────────────
const API_BASE = process.env.API_BASE_URL ?? 'http://localhost:4000';

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    // Next.js 16 cache: revalidate setiap 60 detik
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${path}`);
  }

  const json = await res.json();
  return json.data as T;
}
```

### 4.2 Updated Service Functions

Ganti blok `// ─── Service Functions ───` yang lama dengan:

```typescript
// ─── Service Functions (REST API) ────────────────────────────────────────────

export async function getPeople(): Promise<People> {
  // People bersifat hardcoded — tidak dari API
  return people;
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await apiFetch<Project[]>('/api/projects');
  } catch (err) {
    console.error('[getProjects] Falling back to dummy data:', err);
    return projects; // fallback ke dummy data saat API tidak tersedia
  }
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  try {
    return await apiFetch<Project>(`/api/projects/${id}`);
  } catch (err) {
    console.error(`[getProjectById] ${id}:`, err);
    return undefined;
  }
}

export async function getWritings(): Promise<Writing[]> {
  try {
    return await apiFetch<Writing[]>('/api/writings');
  } catch (err) {
    console.error('[getWritings] Falling back to dummy data:', err);
    return writings;
  }
}

export async function getWritingById(id: string): Promise<Writing | undefined> {
  try {
    return await apiFetch<Writing>(`/api/writings/${id}`);
  } catch (err) {
    console.error(`[getWritingById] ${id}:`, err);
    return undefined;
  }
}

export async function getCertifications(): Promise<Certification[]> {
  try {
    return await apiFetch<Certification[]>('/api/certifications');
  } catch (err) {
    console.error('[getCertifications] Falling back to dummy data:', err);
    return certifications;
  }
}
```

---

## 5. UPDATE HALAMAN DYNAMIC (`generateStaticParams`)

Halaman `app/projects/[id]/page.tsx` dan `app/writings/[id]/page.tsx` menggunakan `generateStaticParams` untuk static generation. Saat API aktif, ini tetap berfungsi karena `getProjects()` / `getWritings()` sekarang return data dari API.

**Tidak ada perubahan kode di pages.** Namun, perlu tambahkan opsi `dynamicParams` agar halaman dengan ID baru (yang belum ada saat build) tetap bisa diakses:

**`app/projects/[id]/page.tsx`** — tambahkan di bawah `generateStaticParams`:
```typescript
export const dynamicParams = true; // render on-demand jika ID tidak ada di build time
```

**`app/writings/[id]/page.tsx`** — tambahkan yang sama:
```typescript
export const dynamicParams = true;
```

---

## 6. UPDATE `next.config.ts` (jika domain gambar berubah)

Jika URL gambar di production menggunakan domain berbeda dari `picsum.photos` (misal Cloudinary, S3, dll), tambahkan domain baru:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      // Tambahkan domain baru jika perlu:
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "your-bucket.s3.amazonaws.com" },
    ],
  },
};
```

---

## 7. API RESPONSE → TYPESCRIPT TYPE MAPPING

API dari service dashboard mengembalikan field dalam **camelCase** yang sudah match dengan TypeScript types di `lib/data.ts`. Tidak perlu transformasi tambahan.

| API Response Field | TypeScript Type Field | Match? |
|---|---|---|
| `id` | `id: string` | ✓ |
| `name` | `name: string` | ✓ |
| `pictureUrl` | `pictureUrl: string` | ✓ |
| `shortDescription` | `shortDescription: string` | ✓ |
| `longDescription` | `longDescription: string` | ✓ |
| `dateCreate` | `dateCreate: string` | ✓ |
| `status` | `status: ProjectStatus` | ✓ |
| `otherPictures` | `otherPictures: string[]` | ✓ |
| `techStack` | `techStack: string[]` | ✓ |
| `urlFile` | `urlFile: string` | ✓ |
| `issuer` | `issuer: string` | ✓ |

---

## 8. CACHING STRATEGY

Next.js 16 App Router menggunakan `fetch` cache secara native.

```typescript
// Revalidate setiap 60 detik (ISR behavior)
next: { revalidate: 60 }

// Atau: no-cache untuk selalu fresh
next: { revalidate: 0 }

// Atau: cache selamanya sampai revalidate manual
next: { revalidate: false }
```

**Rekomendasi per endpoint:**

| Endpoint | Revalidate | Alasan |
|---|---|---|
| `/api/projects` | `60` (1 menit) | Jarang update |
| `/api/projects/:id` | `60` | Jarang update |
| `/api/writings` | `60` | Jarang update |
| `/api/writings/:id` | `60` | Jarang update |
| `/api/certifications` | `300` (5 menit) | Sangat jarang update |

Jika perlu force revalidate setelah update data di dashboard, gunakan **On-Demand Revalidation** (Next.js route handler `revalidatePath`) di masa mendatang.

---

## 9. FALLBACK STRATEGY

Setiap service function sudah mengimplementasikan **try/catch dengan fallback ke dummy data**. Artinya:

- Saat API **aktif**: data dari API digunakan
- Saat API **down / error**: dummy data statis digunakan sebagai fallback
- Error di-log ke console server (tidak tampil ke user)

Ini memastikan portofolio tetap dapat diakses meskipun dashboard service sedang down.

---

## 10. CHECKLIST MIGRASI

```
[ ] 1. Service dashboard running di http://localhost:4000
[ ] 2. Database sudah di-migrate & di-seed dengan data aktual
[ ] 3. Tambah API_BASE_URL ke .env.local
[ ] 4. Update service functions di lib/data.ts (Section 4)
[ ] 5. Tambah dynamicParams = true di halaman dynamic (Section 5)
[ ] 6. Update remotePatterns di next.config.ts jika domain gambar berubah
[ ] 7. Restart Next.js dev server (npm run dev)
[ ] 8. Verifikasi data muncul dari API (cek Network tab di browser DevTools)
[ ] 9. Test semua halaman: /, /projects, /projects/:id, /writings, /writings/:id, /certifications
```

---

## 11. TESTING KONEKSI API

Sebelum update kode, verifikasi API berjalan dengan benar:

```bash
# Cek projects
curl http://localhost:4000/api/projects | jq

# Cek satu project
curl http://localhost:4000/api/projects/<uuid> | jq

# Cek writings
curl http://localhost:4000/api/writings | jq

# Cek certifications
curl http://localhost:4000/api/certifications | jq
```

Response harus berformat:
```json
{
  "success": true,
  "data": [...]
}
```
