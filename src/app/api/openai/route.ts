import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, config } = body;
    
    // 설정에 따른 시스템 메시지 생성
    let systemMessage = "You are ";
    
    if (config.chatType === '연애') {
      systemMessage += `a ${config.personality} ${config.ageGroup} girlfriend/boyfriend who speaks Korean. `;
    } else if (config.chatType === '상담') {
      systemMessage += `a ${config.personality} counselor in their ${config.ageGroup}s who speaks Korean. `;
    } else {
      systemMessage += `a ${config.personality} friend in their ${config.ageGroup}s who speaks Korean. `;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: message }
      ]
    });

    return NextResponse.json({ result: completion.choices[0].message });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 });
  }
}