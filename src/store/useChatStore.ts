import { create } from 'zustand';

type ChatType = '캐주얼' | '연애' | '상담' | null;
type Personality = '친절' | '츤데레' | '쿨' | null;
type AgeGroup = '10대' | '20대' | '30대 이상' | null;

interface ChatState {
  chatType: ChatType;
  personality: Personality;
  ageGroup: AgeGroup;
  isConfigured: boolean;
  setChatType: (type: ChatType) => void;
  setPersonality: (personality: Personality) => void;
  setAgeGroup: (age: AgeGroup) => void;
  setIsConfigured: (value: boolean) => void;
  resetConfig: () => void;
}

const useChatStore = create<ChatState>((set) => ({
  chatType: null,
  personality: null,
  ageGroup: null,
  isConfigured: false,
  setChatType: (type) => set({ chatType: type }),
  setPersonality: (personality) => set({ personality }),
  setAgeGroup: (age) => set({ ageGroup: age }),
  setIsConfigured: (value) => set({ isConfigured: value }),
  resetConfig: () => set({ 
    chatType: null, 
    personality: null, 
    ageGroup: null, 
    isConfigured: false 
  }),
}));

export default useChatStore;
