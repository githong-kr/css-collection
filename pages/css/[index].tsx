import BottomLink from '@components/BottomLink';
import cssList from 'public/cssList';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

export default function CssView() {
  const router = useRouter();
  const { index } = router.query;

  if (!index) return null;

  if (!Number.isInteger(+index!)) {
    router.push('/_error');
  }

  if (cssList.length <= +index!) {
    router.push('/_error');
  }

  const DynamicComponent = dynamic(
    () => import(`../../components/${cssList[+index!].component}`)
  );

  return (
    <>
      {/* <div className="flex h-screen w-screen items-center justify-center bg-orange-50"> */}
        <DynamicComponent />
      {/* </div> */}
      {cssList[+index!] !== undefined ? (
        <BottomLink url={cssList[+index!].link} />
      ) : null}
    </>
  );
}
