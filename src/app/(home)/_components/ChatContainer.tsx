'use client';
import Chat from './Chat';
import ChooseType from './ChooseType';
import useChatStore from '@/store/useChatStore';

export default function ChatContainer() {
  const isConfigured = useChatStore((state) => state.isConfigured);

  return <>{isConfigured ? <Chat /> : <ChooseType />}</>;
}
