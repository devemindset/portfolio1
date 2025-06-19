declare module 'nprogress' {
  interface NProgress {
    start: () => NProgress;
    done: (force?: boolean) => NProgress;
    configure: (options: {
      minimum?: number;
      easing?: string;
      speed?: number;
      trickle?: boolean;
      trickleSpeed?: number;
      showSpinner?: boolean;
      parent?: string;
      template?: string;
    }) => NProgress;
    status?: number | null;
  }

  const nprogress: NProgress;
  export default nprogress;
}
