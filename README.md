# Linear Aesthetic Portfolio Landing Page

Sebuah website landing page portofolio dengan **Linear Design System** (gaya [Linear.app](https://linear.app)). Dirancang dengan standar craft tinggi, stealth dark mode `#010102`, lavender-blue accent `#5e6ad2`, hairline borders `#23252a`, specular edge highlights, keyboard-first navigation (`⌘K`, `C`, `J`/`K`), audio feedback sintetis, dan fitur issue tracker interaktif.

---

## ✨ Fitur Utama

1. **Autentik Linear Aesthetic & Design Tokens:**
   - Deepest Canvas: `#010102`
   - Primary Lavender-Blue: `#5e6ad2` (Hover: `#828fff`, Focus: `#5e69d1`)
   - 4-Tier Surface Ladder: `#0f1011`, `#141516`, `#18191a`, `#191a1b`
   - Hairline 1px borders: `#23252a` & specular top highlights (`border-white/10`)
   - Tipografi: Inter (display negatif tracking -0.04em) & JetBrains Mono

2. **Command Palette (`⌘K` / `Ctrl+K`):**
   - Tekan `⌘K` untuk membuka palette pencarian cepat
   - Pencarian fuzzy untuk navigasi seksi, inspect project, copy email, download resume, dan toggle audio

3. **Linear Issue & Cycle Board (Projects):**
   - Mode Tampilan Ganda:
     - **List View**: Tabel issue ala Linear lengkap dengan issue keys (`PRF-101`), prioritas (Urgent, High, Medium), status (Done, In Progress, Backlog), dan cycle tags.
     - **Grid View**: Kartu showcase visual dengan metric highlights (`12x faster retrieval · 0.4ms p99`).
   - Filter interaktif berdasarkan kategori (`Full-Stack`, `AI & Systems`, `Design Systems`, `Infrastructure`) dan live instant search.

4. **Project Inspector Modal:**
   - Klik baris atau kartu project untuk membuka drawer detail teknis: Systems Architecture, Production Benchmark, Tech Stack, dan Engineering Highlights.

5. **Linear Issue Intake Modal (`C` / "File Issue"):**
   - Modal kontak bergaya issue creator Linear (`Title`, `Priority`, `Scope`, `Email`, `Notes`).
   - Mendukung submit via `⌘+Enter` atau tombol.

6. **Synthesized Web Audio FX:**
   - Efek suara klik mekanikal & audio blip seperti desktop app Linear/Raycast menggunakan Web Audio API murni (tanpa file mp3 eksternal, 0 latency).
   - Tombol toggle mute audio di navbar atau shortcut `M`.

7. **Keyboard Shortcuts:**
   - `⌘K` / `Ctrl+K`: Buka Command Palette
   - `C`: Buka New Issue / Contact Intake
   - `J` / `K`: Navigasi baris project ke atas/bawah
   - `Enter`: Buka detail project terpilih
   - `1` / `2`: Ganti view mode (List / Grid)
   - `M`: Toggle Audio Feedback
   - `E`: Copy Email
   - `?`: Cheatsheet bantuan shortcut
   - `Esc`: Tutup modal apapun

---

## 🚀 Cara Menjalankan

### Opsi 1: Buka Langsung (Tanpa Node / Server)
Cukup klik dua kali file `index.html` di File Explorer, atau buka langsung di browser Chrome/Edge/Firefox/Safari. Semua styling dan interaktivitas sudah bekerja secara mandiri!

### Opsi 2: Menggunakan Vite Dev Server
```bash
# Jalankan Vite langsung via npx (tanpa install global)
npx vite
```
Buka browser di `http://localhost:5173`.

---

## 🎨 Kustomisasi Data & Profil

Semua konten profil, daftar project, changelog karir, dan testimonial tersimpan rapi di dalam file `app.js` pada objek `PORTFOLIO_DATA`.

Cukup buka [app.js](app.js) dan edit bagian:
- `PORTFOLIO_DATA.profile`: Nama, role, bio, email, sosial media.
- `PORTFOLIO_DATA.projects`: Judul, kode issue (`PRF-xxx`), metrik performa, arsitektur, dan tautan GitHub/Demo.
- `PORTFOLIO_DATA.changelog`: Riwayat karir dan milestone.
- `PORTFOLIO_DATA.stack`: Daftar teknologi dan bahasa pemrograman.
- `PORTFOLIO_DATA.testimonials`: Review dari rekan tim atau klien.

---

## 📦 Struktur File

```
Website Portofolio/
├── index.html       # Struktur landing page, navbar, hero, tracker, changelog, dan modal
├── styles.css       # Token warna Linear, hairline border, specular highlight, animasi
├── app.js           # Engine interaktif: Command palette, audio FX, filter, modal, keyboard nav
├── package.json     # Konfigurasi dev scripts
└── README.md        # Panduan penggunaan & kustomisasi
```
