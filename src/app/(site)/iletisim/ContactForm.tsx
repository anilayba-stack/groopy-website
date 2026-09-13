"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle" };

const fieldBase =
  "mt-1.5 w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-3.5 py-2.5 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-accent)]";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const v = state.values;

  if (state.status === "delivered") {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
        <p className="text-[1.0625rem] font-medium text-[var(--color-text)]">
          Teşekkürler — talebinizi aldık.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          En kısa sürede size dönüş yapacağız.
        </p>
      </div>
    );
  }

  if (state.status === "manual") {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
        <p className="text-[1.0625rem] font-medium text-[var(--color-text)]">
          Mesajınız hazır.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          Otomatik gönderim şu an bağlı değil. Aşağıdaki bağlantı, mesajınızı
          e-posta uygulamanızda hazır olarak açar — göndermek için tıklayın.
        </p>
        <a
          href={state.mailto}
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent-contrast)] hover:bg-[var(--color-accent-hover)]"
        >
          E-posta uygulamasında aç
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.errors?.form ? (
        <p className="rounded-lg border border-[var(--color-danger)] px-3.5 py-2.5 text-sm text-[var(--color-danger)]">
          {state.errors.form}
        </p>
      ) : null}

      <div>
        <label htmlFor="name" className="text-sm font-medium text-[var(--color-text)]">
          Ad *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          defaultValue={v?.name}
          aria-invalid={Boolean(state.errors?.name)}
          className={fieldBase}
        />
        {state.errors?.name ? (
          <p className="mt-1 text-xs text-[var(--color-danger)]">{state.errors.name}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-[var(--color-text)]">
          E-posta *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={v?.email}
          aria-invalid={Boolean(state.errors?.email)}
          className={fieldBase}
        />
        {state.errors?.email ? (
          <p className="mt-1 text-xs text-[var(--color-danger)]">{state.errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium text-[var(--color-text)]">
          Şirket <span className="text-[var(--color-text-faint)]">(opsiyonel)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          defaultValue={v?.company}
          className={fieldBase}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-text)]">
          Mesaj *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          defaultValue={v?.message}
          aria-invalid={Boolean(state.errors?.message)}
          className={`${fieldBase} resize-y`}
          placeholder="Kısaca projenizden ve hedefinizden bahsedin."
        />
        {state.errors?.message ? (
          <p className="mt-1 text-xs text-[var(--color-danger)]">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — görünmez, kullanıcı doldurmaz */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Web sitesi</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent-contrast)] transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-60"
      >
        {pending ? "Gönderiliyor…" : "Teklif Al"}
      </button>

      <p className="text-xs text-[var(--color-text-faint)]">
        Verilerinizi yalnızca talebinize dönüş yapmak için kullanırız.
      </p>
    </form>
  );
}
