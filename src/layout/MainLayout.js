import Header from '@components/Header';
import Nav from '@common/Nav';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="p-6">
        <Header />
        {/* <Nav /> */}
        <main>
          <div className='flex justify-center'>
            <div>{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
