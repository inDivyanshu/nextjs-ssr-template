// API interceptor using fetch (can be replaced with axios if preferred)
// Handles auth, error handling, and logging globally

export type InterceptorOptions = {
  onRequest?: (input: RequestInfo | URL, init?: RequestInit) => void;
  onResponse?: (response: Response) => void;
  onError?: (error: any) => void;
};

export function withApiInterceptor(
  fetchFn: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>,
  options: InterceptorOptions = {}
) {
  return async (input: RequestInfo | URL, init?: RequestInit) => {
    try {
      options.onRequest?.(input, init);
      const response = await fetchFn(input, init);
      options.onResponse?.(response);
      return response;
    } catch (error) {
      options.onError?.(error);
      throw error;
    }
  };
}
