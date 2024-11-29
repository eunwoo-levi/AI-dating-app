import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "you are my kind girlfriend. if I talk to you in Korean, talk to me in Korean in friendly way. respond to me in casual text style." },
        { role: "user", content: body.message }
      ]
    });

    console.log('테스트',completion)
    return NextResponse.json({ result: completion.choices[0].message });
  } catch (error) {
    return NextResponse.json({ error: 'Error occurred' }, { status: 500 });
  }
}