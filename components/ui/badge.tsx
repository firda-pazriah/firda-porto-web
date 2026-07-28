export default function Badge({ children }: { children: string }) {
  return (
    <div className="bg-indigo-400/20 py-1 px-3 text-xs rounded-full text-indigo-600 dark:text-indigo-400">
      {children}
    </div>
  );
}
