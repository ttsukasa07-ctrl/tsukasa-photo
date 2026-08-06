import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      plan,
      date,
      message,
    } = body;

    // 名前とメールアドレスだけ必須
    if (!name || !email) {
      return NextResponse.json(
        {
          error:
            "お名前とメールアドレスを入力してください。",
        },
        { status: 400 }
      );
    }

    const { data, error } =
      await resend.emails.send({
        from: "tsukasa Website <onboarding@resend.dev>",

        to: ["t.tsukasa07@gmail.com"],

        replyTo: email,

        subject: `【Webサイトお問い合わせ】${name} 様`,

        text: `
Webサイトからお問い合わせがありました。

■ お名前
${name}

■ メールアドレス
${email}

■ 電話番号
${phone || "未入力"}

■ ご希望の撮影
${plan || "未選択"}

■ 撮影希望日
${date || "未入力"}

■ お問い合わせ内容
${message || "未入力"}
        `,
      });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          error:
            "メールの送信に失敗しました。",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "メールの送信に失敗しました。",
      },
      { status: 500 }
    );
  }
}