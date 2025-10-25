# Bùi Dương Tín - Blog Lập Trình Mạng 🌐

Blog cá nhân chia sẻ kiến thức về lập trình Java, JavaScript và lập trình mạng.

## 👨‍🎓 Thông tin cá nhân

- **Họ và tên**: Bùi Dương Tín
- **Chuyên ngành**: Công nghệ Phần mềm (Năm 4)
- **Trường**: Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)

### Liên hệ
- 🌐 Facebook: https://www.facebook.com/
- 💻 GitHub: https://github.com/
- 📧 Gmail: tinbui.koks@gmail.com

## 🚀 Công nghệ sử dụng

- **Framework**: Next.js 16 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages / Netlify

## 📝 Nội dung

Blog bao gồm 9 bài viết về:
- ☕ **Java**: OOP, Collections, Socket Programming, Multithreading, HTTP Client
- 💻 **JavaScript**: DOM Manipulation, Async/Await, Fetch API, Event Loop

## 🛠️ Cài đặt và Chạy Local

### Yêu cầu
- Node.js 18+ và npm

### Các bước cài đặt

1. Clone repository:
```bash
git clone https://github.com/BuiDuongTin/BuiDuongTin-2280603198-Blog.git
cd BuiDuongTin-2280603198-Blog
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt và truy cập: `http://localhost:3000`

## 📦 Build cho Production

```bash
npm run build
```

Lệnh này sẽ tạo static export trong thư mục `out/`.

## 🌍 Deploy lên GitHub Pages

### Phương pháp 1: Tự động với GitHub Actions

1. Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. Push code lên GitHub
3. Vào Settings > Pages > Source: chọn `gh-pages` branch

### Phương pháp 2: Manual Deploy

1. Build project:
```bash
npm run build
```

2. Push thư mục `out` lên branch `gh-pages`:
```bash
cd out
git init
git add -A
git commit -m 'Deploy'
git push -f https://github.com/BuiDuongTin/BuiDuongTin-2280603198-Blog.git main:gh-pages
```

3. Vào Settings > Pages > Source: chọn `gh-pages` branch

## 🌐 Deploy lên Netlify

### Cách 1: Deploy từ GitHub

1. Đăng nhập vào [Netlify](https://netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Chọn repository từ GitHub
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
5. Click "Deploy site"

### Cách 2: Deploy thủ công

1. Build project:
```bash
npm run build
```

2. Drag & drop thư mục `out` vào Netlify

## 📂 Cấu trúc Project

```
.
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   │   ├── [id]/         # Dynamic blog post pages
│   │   ├── java/         # Java category page
│   │   └── javascript/   # JavaScript category page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                   # Utilities and data
│   └── blog-data.ts      # Blog posts data
├── types/                 # TypeScript types
│   └── blog.ts
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## ✨ Tính năng

- ✅ Responsive design (mobile-friendly)
- ✅ Modern UI với animations
- ✅ SEO optimized
- ✅ Fast loading với Static Site Generation
- ✅ 9 bài viết chất lượng về Java & JavaScript
- ✅ Filter bài viết theo category
- ✅ Syntax highlighting cho code examples
- ✅ Tags system

## 📄 License

MIT License - Copyright © 2025 Bùi Dương Tín