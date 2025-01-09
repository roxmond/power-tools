interface loadingDataProps {
  text: string;
}
export default function LoadingData({ text }: loadingDataProps) {
  return (
    <div className="flex flex-row items-center">
      <span>{text}</span>
      <span className="loading loading-bars loading-xs ml-2"></span>
    </div>
  );
}
