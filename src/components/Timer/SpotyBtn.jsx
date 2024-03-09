import { FaSpotify } from "react-icons/fa";

function SpotyBtn() {
  return (
    <a
      href='https://open.spotify.com/'
      target='_blank'
      className='absolute top-[0] right-[0] m-4 p-[0.2rem] rounded-[10px] text-[2rem] bg-[black] text-[#1db954]'
    >
      <FaSpotify />
    </a>
  );
}

export default SpotyBtn;
