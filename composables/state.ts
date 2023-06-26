//global shared state
export const usePath = () => useState<PathType>('path', () => 'index')
type PathType = null | undefined |  string | symbol

export const useAuth = ()=> useState<string>('user', () => '')