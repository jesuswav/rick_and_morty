import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const route = router.asPath.substring(1);
  return (
    <nav>
      <div>
        <h2>{route}</h2>
      </div>
    </nav>
  );
};

export default Nav;
