declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    disable?: string | boolean;
    startEvent?: string;
    offset?: number;
    delay?: number;
    anchor?: string;
    placement?: string;
  }

  const aosConfig: AosOptions = {
    // ... your AOS configuration
  };

  function init(options?: AosOptions): void;
  function refresh(): void;
  function refreshHard(): void;

  export default aosConfig;
}
