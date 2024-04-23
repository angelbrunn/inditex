import Link from 'next/link';
import { usePathname } from 'next/navigation';

import H1 from '@/components/Atoms/H1';
import ROUTES from '@/lib/constants/routes';

import { XNavStyle } from './style';

const XNav = () => {
  const path: any = usePathname();

  const isHome = (path: string) =>
    path === '/' || path === ROUTES.router.podcast;

  return (
    <XNavStyle>
      {isHome(path) ? (
        <H1 title="Podcaster" />
      ) : (
        <Link href={'/'}>
          <H1 title="Podcaster" />
        </Link>
      )}
    </XNavStyle>
  );
};

export default XNav;
