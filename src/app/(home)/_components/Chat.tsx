'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Chat() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const { data } = await axios.post('/api/openai', {
        message: 'hey:) how are you?',
      });

      setResponse(data.result.content);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300'
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get AI Response'}
      </button>
      {response && (
        <div className='mt-4'>
          <h2 className='font-bold'>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
