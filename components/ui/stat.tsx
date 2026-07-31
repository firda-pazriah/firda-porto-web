export default function Stat({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col-reverse gap-1">
      <dt className="text-base/7 text-gray-700 dark:text-gray-300">{name}</dt>
      <dd className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {value}
      </dd>
    </div>
  );
}
