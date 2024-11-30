'use client';
import { useState } from 'react';
import useChatStore from '@/store/useChatStore';

export default function ChooseType() {
  const [step, setStep] = useState(1);
  const { setChatType, setPersonality, setAgeGroup, setIsConfigured } = useChatStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='space-y-4'>
            <h2 className='text-xl font-bold mb-6'>챗봇 유형을 선택해주세요</h2>
            <div className='grid grid-cols-1 gap-4'>
              <button
                onClick={() => {
                  setChatType('캐주얼');
                  setStep(2);
                }}
                className='p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300'
              >
                캐주얼 대화
                <p className='text-sm text-gray-500 mt-1'>일상적인 대화를 나눌 수 있어요</p>
              </button>
              <button
                onClick={() => {
                  setChatType('연애');
                  setStep(2);
                }}
                className='p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300'
              >
                연애 대화
                <p className='text-sm text-gray-500 mt-1'>남자친구/여자친구와 대화하듯이</p>
              </button>
              <button
                onClick={() => {
                  setChatType('상담');
                  setStep(2);
                }}
                className='p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300'
              >
                고민 상담
                <p className='text-sm text-gray-500 mt-1'>당신의 고민을 들어드려요</p>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className='space-y-4'>
            <h2 className='text-xl font-bold mb-6'>선호하는 성격을 선택해주세요</h2>
            <div className='grid grid-cols-1 gap-4'>
              <button
                onClick={() => {
                  setPersonality('친절');
                  setStep(3);
                }}
                className='p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300'
              >
                친절한 성격
                <p className='text-sm text-gray-500 mt-1'>따뜻하고 다정한 대화를 나눠요</p>
              </button>
              <button
                onClick={() => {
                  setPersonality('츤데레');
                  setStep(3);
                }}
                className='p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300'
              >
                츤데레 성격
                <p className='text-sm text-gray-500 mt-1'>겉으로는 차갑지만 속은 따뜻해요</p>
              </button>
              <button
                onClick={() => {
                  setPersonality('쿨');
                  setStep(3);
                }}
                className='p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300'
              >
                쿨한 성격
                <p className='text-sm text-gray-500 mt-1'>시원시원한 대화를 나눠요</p>
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className='space-y-4'>
            <h2 className='text-xl font-bold mb-6'>선호하는 연령대를 선택해주세요</h2>
            <div className='grid grid-cols-1 gap-4'>
              <button
                onClick={() => {
                  setAgeGroup('10대');
                  setIsConfigured(true);
                }}
                className='p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300'
              >
                10대
              </button>
              <button
                onClick={() => {
                  setAgeGroup('20대');
                  setIsConfigured(true);
                }}
                className='p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300'
              >
                20대
              </button>
              <button
                onClick={() => {
                  setAgeGroup('30대 이상');
                  setIsConfigured(true);
                }}
                className='p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300'
              >
                30대 이상
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-6'>
        <div className='mb-8'>
          <div className='flex items-center justify-between mb-4'>
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className='flex items-center'>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= stepNumber ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && <div className={`w-24 h-1 ${step > stepNumber ? 'bg-blue-500' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>
        {renderStep()}
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} className='mt-6 text-blue-500 hover:text-blue-600'>
            이전으로
          </button>
        )}
      </div>
    </div>
  );
}
