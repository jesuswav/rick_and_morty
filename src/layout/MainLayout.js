import React from 'react';
import Header from '@components/Header';
import Nav from '@common/Nav';
import { CardContext } from 'context';
import { Modal } from 'Modal/Modal';
import CharacterDetail from '@components/CharacterDetail';
import EpisodeDetail from '@components/EpisodeDetail';

export default function MainLayout({ children }) {
  const { openModal, setOpenModal } = React.useContext(CardContext);
  const { openEpisodeModal, setEpisodeOpenModal } =
    React.useContext(CardContext);
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
      <div id="modal">
        {openModal && (
          <Modal>
            <CharacterDetail></CharacterDetail>
          </Modal>
        )}
        {openEpisodeModal && (
          <Modal>
            <EpisodeDetail></EpisodeDetail>
          </Modal>
        )}
      </div>
    </>
  );
}
