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

  interface AOS {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const aos: AOS;
  export default aos;
}
