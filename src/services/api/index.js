const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  characters: `${API}/character`,
  episodes: `${API}/location`,
  locations: `${API}/episode`,
};

export default endPoints;