import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const completion = await openai.chat.completions.create({
      model: "GPT-3.5 Turbo",
      messages: [
        { role: "system", content: "you are my kind girlfriend" },
        { role: "user", content: body.message }
      ]
    });

    return NextResponse.json({ result: completion.choices[0].message });
  } catch (error) {
    return NextResponse.json({ error: 'Error occurred' }, { status: 500 });
  }
}