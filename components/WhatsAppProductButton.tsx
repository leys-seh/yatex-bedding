"use client";

const WHATSAPP_NUMBER = "905426515951";

type WhatsAppProductButtonProps = {
  productName: string;
};

export default function WhatsAppProductButton({
  productName,
}: WhatsAppProductButtonProps) {
  const productMessage = `Merhaba, ${productName} ürünü hakkında bilgi almak istiyorum.`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(productMessage)}`;

  function includeCurrentProductUrl(event: React.MouseEvent<HTMLAnchorElement>) {
    const message = [productMessage, "", "Ürün:", window.location.href].join("\n");
    event.currentTarget.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={includeCurrentProductUrl}
      aria-label={`${productName} ürünü hakkında WhatsApp ile bilgi al`}
      className="group inline-flex min-h-11 w-full items-center justify-center gap-2 border border-gold-soft bg-gold-soft px-5 py-3.5 text-xs uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:border-gold hover:bg-gold sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.2em] lg:py-3.5"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#168b4e]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.51 0 .17 5.34.17 11.9c0 2.1.55 4.15 1.6 5.95L.07 24l6.31-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.42Zm-8.45 18.3h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.84 9.84 0 0 1-1.51-5.24c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.9 6.98c0 5.46-4.44 9.88-9.88 9.88Zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.48a8.95 8.95 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.2-.23-.57-.47-.49-.66-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.09 4.5.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
      <span>WhatsApp ile Bilgi Al</span>
      <svg
        aria-hidden="true"
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 8 4 4m0 0-4 4m4-4H3" />
      </svg>
    </a>
  );
}
