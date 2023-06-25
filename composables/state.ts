//global shared state
export const usePath = () => useState<string>('path', () => 'index')