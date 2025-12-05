"use client";

import Link from "next/link";
import Image from "next/image";

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  instructor: string;
  instructorAvatar?: string;
  uploadedAt: string;
  viewCount: number;
  category: string;
}

export function VideoCard({
  id,
  title,
  description,
  thumbnailUrl,
  duration,
  instructor,
  instructorAvatar,
  uploadedAt,
  viewCount,
  category,
}: VideoCardProps) {
  return (
    <Link href={`/lectures/${id}`} className="block">
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden card-hover">
        {/* サムネイル */}
        <div className="relative aspect-video bg-zinc-900">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
          />
          {/* 再生時間 */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-mono px-2 py-1 rounded">
            {duration}
          </div>
          {/* カテゴリバッジ */}
          <div className="absolute top-2 left-2 bg-[var(--accent-purple)]/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
            {category}
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg line-clamp-2 mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--text-muted)] text-sm line-clamp-2 mb-3">
            {description}
          </p>

          {/* 講師情報 */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center overflow-hidden">
              {instructorAvatar ? (
                <Image
                  src={instructorAvatar}
                  alt={instructor}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              ) : (
                <span className="text-white text-sm font-bold">
                  {instructor.charAt(0)}
                </span>
              )}
            </div>
            <span className="text-[var(--text-muted)] text-sm">{instructor}</span>
          </div>

          {/* メタ情報 */}
          <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              {viewCount.toLocaleString()}回視聴
            </span>
            <span>{uploadedAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

