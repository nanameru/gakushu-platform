import { VideoPlayer } from "@/components/VideoPlayer";
import { VideoCard } from "@/components/VideoCard";
import Link from "next/link";

// モックデータ（後でConvexから取得）
const mockLecture = {
  id: "1",
  title: "ChatGPT完全攻略！プロンプトエンジニアリングの基礎から応用まで",
  description: `AIを最大限に活用するためのプロンプト設計テクニックを徹底解説します。

この講義では以下の内容を学びます：

• プロンプトエンジニアリングの基本概念
• 効果的なプロンプトの構造と書き方
• ロールプレイ・ステップバイステップ・Few-shotなどのテクニック
• 実際のビジネスシーンでの活用例
• よくある失敗パターンと改善方法

初心者の方でもすぐに実践できる内容になっています。
ぜひ最後までご覧ください！`,
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnailUrl: "https://picsum.photos/seed/lecture1/1280/720",
  duration: "45:30",
  instructor: "山田太郎",
  instructorAvatar: "https://picsum.photos/seed/instructor1/100/100",
  instructorBio: "AIエンジニア・講師。大手IT企業で10年以上の経験を持ち、現在はAI活用コンサルタントとして活動中。",
  uploadedAt: "2024年12月3日",
  viewCount: 1234,
  likeCount: 156,
  category: "プロンプト",
  tags: ["ChatGPT", "プロンプト", "AI活用", "ビジネス"],
};

const relatedLectures = [
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
];

export default function LectureDetailPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/lectures" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold gradient-text">AIで遊ぼう</h1>
                  <p className="text-xs text-[var(--text-muted)]">Learning Platform</p>
                </div>
              </Link>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左カラム：動画とコンテンツ */}
          <div className="lg:col-span-2 space-y-6">
            {/* パンくずリスト */}
            <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Link href="/lectures" className="hover:text-[var(--accent-cyan)] transition-colors">
                講義一覧
              </Link>
              <span>/</span>
              <span className="text-white">{mockLecture.category}</span>
            </nav>

            {/* 動画プレイヤー */}
            <VideoPlayer
              videoUrl={mockLecture.videoUrl}
              thumbnailUrl={mockLecture.thumbnailUrl}
              title={mockLecture.title}
            />

            {/* タイトルとアクション */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {mockLecture.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  {mockLecture.viewCount.toLocaleString()}回視聴
                </span>
                <span>{mockLecture.uploadedAt}</span>
                <span className="px-2 py-1 bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] rounded">
                  {mockLecture.category}
                </span>
              </div>

              {/* アクションボタン */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{mockLecture.likeCount}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>共有</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span>保存</span>
                </button>
              </div>
            </div>

            {/* 講師情報カード */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] flex-shrink-0 overflow-hidden">
                  <img
                    src={mockLecture.instructorAvatar}
                    alt={mockLecture.instructor}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{mockLecture.instructor}</h3>
                      <p className="text-sm text-[var(--text-muted)]">講師</p>
                    </div>
                    <button className="px-4 py-2 bg-[var(--accent-cyan)] text-black text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                      フォロー
                    </button>
                  </div>
                  <p className="mt-3 text-[var(--text-muted)] text-sm leading-relaxed">
                    {mockLecture.instructorBio}
                  </p>
                </div>
              </div>
            </div>

            {/* 説明文 */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">講義内容</h3>
              <div className="text-[var(--text-muted)] whitespace-pre-wrap leading-relaxed">
                {mockLecture.description}
              </div>

              {/* タグ */}
              <div className="mt-6 pt-6 border-t border-[var(--card-border)]">
                <div className="flex flex-wrap gap-2">
                  {mockLecture.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[var(--background)] text-[var(--text-muted)] text-sm rounded-full border border-[var(--card-border)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] cursor-pointer transition-all"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右カラム：関連動画 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">関連講義</h3>
            <div className="space-y-4">
              {relatedLectures.map((lecture) => (
                <Link
                  key={lecture.id}
                  href={`/lectures/${lecture.id}`}
                  className="flex gap-3 group"
                >
                  <div className="relative w-40 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800">
                    <img
                      src={lecture.thumbnailUrl}
                      alt={lecture.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                      {lecture.duration}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-white line-clamp-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                      {lecture.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-1">
                      {lecture.instructor}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {lecture.viewCount.toLocaleString()}回視聴 • {lecture.uploadedAt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Discord CTAカード */}
            <div className="bg-gradient-to-br from-[#5865F2]/20 to-[#5865F2]/5 border border-[#5865F2]/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="text-lg font-semibold text-white">Discordに参加</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-4">
                コミュニティメンバーとリアルタイムで交流しよう！質問や情報共有ができます。
              </p>
              <button className="w-full py-3 bg-[#5865F2] text-white font-medium rounded-lg hover:bg-[#4752C4] transition-colors">
                Discordを開く
              </button>
            </div>
          </div>
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

