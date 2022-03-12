import Link from 'next/link';

interface BootomLinkProps {
  url: string;
}

export default function BottomLink({ url }: BootomLinkProps) {
  return (
    <Link href={url}>
      <a
        target="_blank"
        className="fixed bottom-5 right-5 flex cursor-pointer items-center justify-center rounded-3xl border-0 border-transparent bg-red-400 px-5 py-3 text-white shadow-xl transition-colors hover:bg-red-500"
      >
        Youtube
      </a>
    </Link>
  );
}
