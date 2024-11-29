'use client';
import { useState } from 'react';
import axios from 'axios';

type Message = {
  content: string;
  isUser: boolean;
  timestamp: Date;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // 사용자 메시지 추가
    const userMessage: Message = {
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setLoading(true);

    try {
      const { data } = await axios.post('/api/openai', {
        message: inputMessage,
      });

      // AI 응답 메시지 추가
      const aiMessage: Message = {
        content: data.result.content,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full flex flex-col items-center mt-8'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <h1 className='font-bold text-lg mb-4'>데이팅 챗봇</h1>
        <main className='w-[600px] flex flex-col'>
          <section className='w-full h-[600px] shadow-lg p-4 overflow-y-auto bg-gray-50 rounded-lg'>
            <div className='flex flex-col space-y-4'>
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-white text-black rounded-bl-none shadow'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className='flex justify-start'>
                  <div className='bg-gray-200 text-gray-500 p-3 rounded-lg rounded-bl-none'>typing...</div>
                </div>
              )}
            </div>
          </section>
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className='w-full min-h-[50px] text-lg font-semibold border-2 bg-blue-100 p-2 rounded mt-4'
            placeholder='메시지를 입력하세요...'
          />
        </main>
        <button
          type='submit'
          className='mt-4 px-4 py-2 w-[200px] bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300'
          disabled={loading || !inputMessage.trim()}
        >
          {loading ? '로딩 중...' : '채팅 보내기'}
        </button>
      </form>
    </div>
  );
}
