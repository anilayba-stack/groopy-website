import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * İçerik dosyalarında (Faq.answer, ServiceSection.body, ProcessStep.description
 * gibi düz metin alanlarında) kullanılan basit "[metin](yol)" biçimini gerçek
 * <Link>'e çevirir. Eşleşme yoksa metni olduğu gibi döner.
 */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match: RegExpExecArray | null;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    parts.push(
      <Link
        key={key++}
        href={match[2]}
        className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }
  return <>{parts}</>;
}
