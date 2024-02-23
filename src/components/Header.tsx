import { overpass } from '@/ui/fonts';
import Link from 'next/link';

interface HeaderProps {
  description: string | null | undefined;
}

const Header = ({ description }: HeaderProps) => {
  return (
    <div
      className={overpass.className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
      }}
    >
      <Link href="/" style={{ textDecoration: 'none' }}>
        <h2
          className={overpass.className}
          style={{
            marginBottom: 0,
          }}
        >
          LITERAT
        </h2>
      </Link>
      <p style={{ marginTop: 0, opacity: 0.5 }}>{description}</p>
    </div>
  );
};

export default Header;
