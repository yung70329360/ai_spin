# AI SPIN 銷售法課程網站

這是一個使用 Tailwind CSS CLI 構建的現代化銷售課程網站。

## 專案結構

```
ai_spin/
├── index.html          # 主要 HTML 文件
├── input.css           # Tailwind CSS 輸入文件
├── output.css          # 編譯後的 CSS 文件（自動生成）
├── tailwind.config.js  # Tailwind 配置文件
├── package.json        # 專案依賴和腳本
└── README.md          # 專案說明文件
```

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 開發模式

啟動 Tailwind CSS 編譯監視模式：

```bash
npm run dev
```

這會啟動 Tailwind CLI 的監視模式，當你修改 `input.css` 或 `index.html` 時，會自動重新編譯 CSS。

### 3. 本地伺服器（可選）

如果你想要一個本地開發伺服器：

```bash
npm run serve
```

這會在 `http://localhost:3000` 啟動一個本地伺服器。

### 4. 生產建置

當你準備部署時，運行：

```bash
npm run build
```

這會生成最小化的 CSS 文件。

## 開發說明

### Tailwind CSS 配置

- **配置文件**: `tailwind.config.js`
- **輸入文件**: `input.css` - 包含所有自定義樣式和 Tailwind 指令
- **輸出文件**: `output.css` - 編譯後的 CSS（自動生成）

### 自定義樣式

所有自定義樣式都定義在 `input.css` 中，包括：

- 字體設置（Inter + Noto Sans TC）
- 組件樣式（`.section-header`, `.content-card` 等）
- 動畫和過渡效果
- 響應式設計

### 動態類別

`safelist` 配置確保所有動態加載的 Tailwind 類別都會被包含在最終的 CSS 中。

## 功能特色

- ✅ 完整的 SPIN 銷售法課程展示
- ✅ 響應式設計
- ✅ 現代化 UI/UX
- ✅ 動畫和互動效果
- ✅ AI 工具整合展示
- ✅ 課程大綱互動式展示

## 技術棧

- **HTML5**: 語義化標記
- **Tailwind CSS**: 實用優先的 CSS 框架
- **Alpine.js**: 輕量級 JavaScript 框架
- **Google Fonts**: 字體服務

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 授權

MIT License 