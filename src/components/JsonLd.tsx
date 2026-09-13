/**
 * JSON-LD enjeksiyonu. Server component; içerik build zamanında bilinir,
 * bu yüzden dangerouslySetInnerHTML güvenli (kullanıcı girdisi yok).
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
