// Common API call utility with interceptor support
import { withApiInterceptor, InterceptorOptions } from './apiInterceptor';

const defaultInterceptor = withApiInterceptor(fetch, {
  onError: (error) => {
    // Optionally log or handle errors globally
    console.error('API Error:', error);
  },
});

export async function apiCall<T = any>(
  input: RequestInfo | URL,
  init?: RequestInit,
  interceptor: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = defaultInterceptor
): Promise<T> {
  const response = await interceptor(input, init);
  if (!response.ok) {
    // Optionally throw custom error
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
}
