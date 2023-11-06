import Header from '@components/Header';
import Nav from '@common/Nav';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="">
        {/* <Nav /> */}
        <main className="top-20">
          <Header />
          <div className="flex justify-center">
            <div className="flex w-full justify-center mt-20">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
