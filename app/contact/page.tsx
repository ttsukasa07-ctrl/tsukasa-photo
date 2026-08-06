"use client";

import { FormEvent, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSending(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      plan: formData.get("plan"),
      date: formData.get("date"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("送信に失敗しました。");
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError(
        "送信に失敗しました。時間をおいて、もう一度お試しください。"
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-white text-neutral-900">
      <Header />

      <section className="px-5 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-3xl">
          {/* Title */}
          <div className="text-center">
            <p className="section-title">
              Contact
            </p>

            <p className="mt-8 text-[14px] leading-[2.8] tracking-[0.16em]">
              撮影のご相談・ご依頼はこちらから。
              <br />
              まずはお気軽にお問い合わせください。
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-16 space-y-10"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-[13px] font-semibold tracking-[0.14em]"
              >
                お名前
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-3 w-full border-b border-neutral-400 bg-transparent px-1 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-neutral-900"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[13px] font-semibold tracking-[0.14em]"
              >
                メールアドレス
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-3 w-full border-b border-neutral-400 bg-transparent px-1 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-neutral-900"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[13px] font-semibold tracking-[0.14em]"
              >
                電話番号
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-3 w-full border-b border-neutral-400 bg-transparent px-1 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-neutral-900"
              />
            </div>

            {/* Plan */}
            <div>
              <label
                htmlFor="plan"
                className="block text-[13px] font-semibold tracking-[0.14em]"
              >
                ご希望の撮影
              </label>

              <select
                id="plan"
                name="plan"
                defaultValue=""
                className="mt-3 w-full border-b border-neutral-400 bg-transparent px-1 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-neutral-900"
              >
                <option value="">
                  選択してください
                </option>

                <option value="ロケーション前撮り">
                  ロケーション前撮り
                </option>

                <option value="挙式・披露宴">
                  挙式・披露宴
                </option>

                <option value="家族写真">
                  家族写真
                </option>

                <option value="その他">
                  その他
                </option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-[13px] font-semibold tracking-[0.14em]"
              >
                撮影希望日
              </label>

              <input
                id="date"
                name="date"
                type="date"
                className="mt-3 w-full border-b border-neutral-400 bg-transparent px-1 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-neutral-900"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-[13px] font-semibold tracking-[0.14em]"
              >
                お問い合わせ内容
              </label>

              <textarea
                id="message"
                name="message"
                rows={8}
                className="mt-3 w-full resize-none border border-neutral-400 bg-transparent p-4 text-[14px] leading-[2] outline-none transition-colors duration-300 focus:border-neutral-900"
              />
            </div>

            {/* Success Message */}
            {success && (
              <p className="text-center text-[13px] leading-[2] tracking-[0.12em]">
                お問い合わせありがとうございます。
                <br />
                送信が完了しました。
              </p>
            )}

            {/* Error Message */}
            {error && (
              <p className="text-center text-[13px] leading-[2] tracking-[0.12em] text-red-600">
                {error}
              </p>
            )}

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={sending}
                className="font-english border border-neutral-900 px-14 py-4 text-[18px] font-semibold tracking-[0.22em] transition-all duration-300 hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}