import { VideoCard } from "@/components/VideoCard";

// モックデータ（後でConvexから取得）
const mockLectures = [
  {
    id: "1",
    title: "ChatGPT完全攻略！プロンプトエンジニアリングの基礎から応用まで",
    description: "AIを最大限に活用するためのプロンプト設計テクニックを徹底解説。初心者でもすぐに実践できる内容です。",
    thumbnailUrl: "https://picsum.photos/seed/lecture1/640/360",
    duration: "45:30",
    instructor: "山田太郎",
    uploadedAt: "2日前",
    viewCount: 1234,
    category: "プロンプト",
  },
  {
    id: "2",
    title: "Stable Diffusion入門 - 画像生成AIを使いこなそう",
    description: "話題の画像生成AI「Stable Diffusion」の基本操作から応用テクニックまでを学びます。",
    thumbnailUrl: "https://picsum.photos/seed/lecture2/640/360",
    duration: "52:15",
    instructor: "佐藤花子",
    uploadedAt: "5日前",
    viewCount: 892,
    category: "画像生成",
  },
  {
    id: "3",
    title: "Claude活用術 - ビジネス文書作成を10倍速に",
    description: "Claudeを使った効率的な文書作成術。議事録、企画書、メール作成など実践的な使い方を紹介。",
    thumbnailUrl: "https://picsum.photos/seed/lecture3/640/360",
    duration: "38:45",
    instructor: "鈴木一郎",
    uploadedAt: "1週間前",
    viewCount: 2156,
    category: "ビジネス活用",
  },
  {
    id: "4",
    title: "Midjourney v6 新機能徹底解説",
    description: "最新バージョンのMidjourneyで追加された新機能を実際の生成例とともに詳しく解説します。",
    thumbnailUrl: "https://picsum.photos/seed/lecture4/640/360",
    duration: "41:20",
    instructor: "田中美咲",
    uploadedAt: "3日前",
    viewCount: 1567,
    category: "画像生成",
  },
  {
    id: "5",
    title: "AI副業で月10万円稼ぐロードマップ",
    description: "AIスキルを活かした副業の始め方から収益化まで、具体的なステップを解説します。",
    thumbnailUrl: "https://picsum.photos/seed/lecture5/640/360",
    duration: "58:00",
    instructor: "高橋健太",
    uploadedAt: "4日前",
    viewCount: 3421,
    category: "マネタイズ",
  },
  {
    id: "6",
    title: "NotionAI × ChatGPT 最強の情報整理術",
    description: "NotionAIとChatGPTを組み合わせた、生産性を爆上げする情報整理テクニックを公開。",
    thumbnailUrl: "https://picsum.photos/seed/lecture6/640/360",
    duration: "35:50",
    instructor: "伊藤さくら",
    uploadedAt: "1週間前",
    viewCount: 987,
    category: "生産性",
  },
];

const categories = ["すべて", "プロンプト", "画像生成", "ビジネス活用", "マネタイズ", "生産性"];

export default function LecturesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">AIで遊ぼう</h1>
                <p className="text-xs text-[var(--text-muted)]">Learning Platform</p>
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="text-sm text-white hover:text-[var(--accent-cyan)] transition-colors">
                ホーム
              </a>
              <a href="/lectures" className="text-sm text-[var(--accent-cyan)] font-medium">
                講義
              </a>
              <a href="#" className="text-sm text-white hover:text-[var(--accent-cyan)] transition-colors">
                コミュニティ
              </a>
              <button className="px-4 py-2 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                ログイン
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ヒーローセクション */}
        <section className="mb-12">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--accent-cyan)]/20 via-[var(--accent-purple)]/20 to-[var(--accent-pink)]/20 p-8 md:p-12 border border-[var(--card-border)]">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] text-sm font-medium rounded-full mb-4 border border-[var(--accent-cyan)]/30">
                🎓 毎週3回の講義を配信中
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AIスキルをマスターしよう
              </h2>
              <p className="text-[var(--text-muted)] text-lg mb-6 max-w-2xl">
                ChatGPT、Stable Diffusion、Claudeなど、最新のAIツールの使い方を
                実践的に学べるコミュニティです。
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] rounded-lg border border-[var(--card-border)]">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="text-white font-semibold">100+</p>
                    <p className="text-xs text-[var(--text-muted)]">講義動画</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] rounded-lg border border-[var(--card-border)]">
                  <span className="text-2xl">👥</span>
                  <div>
                    <p className="text-white font-semibold">500+</p>
                    <p className="text-xs text-[var(--text-muted)]">メンバー</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] rounded-lg border border-[var(--card-border)]">
                  <span className="text-2xl">🔴</span>
                  <div>
                    <p className="text-white font-semibold">週3回</p>
                    <p className="text-xs text-[var(--text-muted)]">ライブ配信</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* カテゴリフィルター */}
        <section className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  index === 0
                    ? "bg-[var(--accent-cyan)] text-black"
                    : "bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-white border border-[var(--card-border)] hover:border-[var(--accent-cyan)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* 講義一覧 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">最新の講義</h3>
            <select className="bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent-cyan)]">
              <option>新着順</option>
              <option>人気順</option>
              <option>再生数順</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockLectures.map((lecture) => (
              <VideoCard key={lecture.id} {...lecture} />
            ))}
          </div>
        </section>

        {/* ロードモアボタン */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] text-white rounded-xl hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all flex items-center gap-2">
            <span>もっと見る</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </main>

      {/* フッター */}
      <footer className="mt-20 border-t border-[var(--card-border)] bg-[var(--card-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-lg font-bold gradient-text">AIで遊ぼう</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
              <a href="#" className="hover:text-white transition-colors">利用規約</a>
              <a href="#" className="hover:text-white transition-colors">プライバシー</a>
              <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              © 2024 AIで遊ぼう. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

