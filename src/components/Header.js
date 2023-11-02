import { useRouter } from 'next/router';

var logoUrl =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2047868-eb3f-45a9-84ac-a12510bfedd9/dg88e48-b14230ec-3a75-47f9-9387-8ff3fd8c4eac.png/v1/fill/w_1131,h_707/rick_and_morty_logo__by_dracoawesomeness_dg88e48-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvYzIwNDc4NjgtZWIzZi00NWE5LTg0YWMtYTEyNTEwYmZlZGQ5XC9kZzg4ZTQ4LWIxNDIzMGVjLTNhNzUtNDdmOS05Mzg3LThmZjNmZDhjNGVhYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2stMjGah5PJNh5HzBSKx7g46OToMvMeQoFJAC3FRq5k';

const navigation = [
  { name: 'Home', href: '/home/', current: true },
  { name: 'Caracters', href: '/home/caracters/', current: false },
  { name: 'Episodes', href: '/home/episodes/', current: false },
];

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
];

const Header = () => {
  const router = useRouter();
  const route = router.asPath.substring(1);
  return (
    <nav className="flex flex-row items-center h-12 m-5">
      <img className="w-52" src={logoUrl} alt="Logo" onClick={() => router.push('/')}></img>
      <div className="flex w-full justify-evenly">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className=""
            aria-current={item.current ? 'page' : 'undefined'}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex flex-row w-1/4">
        {userNavigation.map((item) => (
          <a key={item.name} href={item.href} className="w-full">
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
