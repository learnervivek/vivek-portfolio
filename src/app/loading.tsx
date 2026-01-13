export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute h-16 w-16 rounded-full border-4 border-muted"></div>
          <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
        
        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">Loading</h2>
          <div className="flex gap-1">
            <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
