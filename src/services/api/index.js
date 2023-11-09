const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  characters: `${API}/character`,
  episodes: `${API}/episode`,
  locations: `${API}/location`,
};

export default endPoints;