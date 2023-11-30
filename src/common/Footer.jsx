const Footer = () => {
  return (
    <div className="w-full pt-5 bg-black">
      <footer className="text-white text-center py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">
                Rick and Morty Universe
              </h2>
              <p className="text-gray-400">
                Explore the vast multiverse of Rick and Morty. Discover stories,
                characters and more!
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="/home/characters">Characters</a>
                </li>
                <li>
                  <a href="/home/episodes">Episodes</a>
                </li>
                <li>
                  <a href="#">Stories and Anecdotes</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">Last News</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="#">New episodes announced</a>
                </li>
                <li>
                  <a href="#">Details about the next project</a>
                </li>
                <li>
                  <a href="#">Exclusive interviews with the cast</a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">Follow us</h3>
              <div className="flex space-x-4 justify-evenly max-sm:m-5">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 "
                >
                  <img
                    className="h-10"
                    src="https://cdn-icons-png.flaticon.com/128/174/174848.png"
                    alt="Social"
                  />
                </a>
                <a
                  href="https://www.instagram.com/1999garciajesse/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <img
                    className="h-10"
                    src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                    alt="Social"
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <img
                    className="h-10"
                    src="https://cdn-icons-png.flaticon.com/128/174/174883.png"
                    alt="Social"
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <img
                    className="h-10"
                    src="https://cdn-icons-png.flaticon.com/128/174/174876.png"
                    alt="Social"
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <img
                    className="h-10"
                    src="https://cdn-icons-png.flaticon.com/128/174/174879.png"
                    alt="Social"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-gray-400 text-sm h-10 pt-4">
            &copy; 2023 Rick and Morty Universe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
