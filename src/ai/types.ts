export type AIProviderType = 'openai' | 'deepseek' | 'gemini' | 'custom'

export interface AIMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface AIRequest {
  messages: AIMessage[]
  maxTokens?: number
  temperature?: number
  metadata?: Record<string, unknown>
}

export interface AIResponse {
  content: string
  provider?: AIProviderType
  model?: string
  metadata?: Record<string, unknown>
}

export interface AIProvider {
  readonly type: AIProviderType
  generate(request: AIRequest): Promise<AIResponse>
}

export interface AIService {
  generate(request: AIRequest): Promise<AIResponse>
  setProvider(provider: AIProvider): void
  getProvider(): AIProvider | null
}
