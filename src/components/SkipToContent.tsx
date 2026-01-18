export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:rounded-xl glass-violet focus:border-2 transition-all"
      style={{
        borderColor: "#a02dff",
        boxShadow: "0 0 30px rgba(160, 45, 255, 0.5)",
      }}
    >
      Skip to main content
    </a>
  );
}
