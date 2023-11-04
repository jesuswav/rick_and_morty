import React from 'react';
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
  const [menuVisible, setMenuVisible] = React.useState('hidden');
  const [settingVisible, setSettingVisible] = React.useState('hidden');

  const router = useRouter();
  return (
    <div className='fixed w-full bg-black m-0 z-10'>
      <nav className="flex flex-row items-center h-12 m-5">
        <img
          className="w-52"
          src={logoUrl}
          alt="Logo"
          onClick={() => router.push('/')}
        ></img>
        {/* Nav Menu Options */}
        <div className="flex w-full items-center justify-evenly max-sm:hidden">
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
        {/* --------- */}
        <div className="flex flex-row w-2/5 justify-end max-sm:w-full">
          <div className="w-auto sm:hidden right-0">
            <img
              className="h-11"
              src="https://i.postimg.cc/nzFGgT31/image-1.png"
              alt="LogoImg"
              onClick={() => {
                if (menuVisible == 'hidden') setMenuVisible('flex');
                else setMenuVisible('hidden');
              }}
            ></img>
            <div
              className={`${menuVisible} fixed top-20 pt-10 right-0 w-full h-full bg-black flex-col items-center`}
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl my-3"
                  aria-current={item.current ? 'page' : 'undefined'}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* Setting Options */}
          <div className="flex flex-row w-full max-sm:hidden">
            {userNavigation.map((item) => (
              <a key={item.name} href={item.href} className="w-full">
                {item.name}
              </a>
            ))}
          </div>
          <div className="sm:hidden">
            <img
              className="h-10"
              src="https://i.postimg.cc/nLYhN8Tj/image.png"
              alt="LogoSettings"
              onClick={() => {
                if (settingVisible == 'hidden') setSettingVisible('flex');
                else setSettingVisible('hidden');
              }}
            ></img>
            <div
              className={`${settingVisible} fixed pt-10 top-20 right-0 w-full h-full bg-black flex-col items-center`}
            >
              {userNavigation.map((item) => (
                <a key={item.name} href={item.href} className="text-xl my-3">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
