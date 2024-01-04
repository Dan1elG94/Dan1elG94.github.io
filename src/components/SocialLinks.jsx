import fbIcon from '../images/fb-icon.png';
import instaIcon from '../images/insta-icon.png';
import tiktokIcon from '../images/tiktok-icon.png';
import discordIcon from '../images/discord-icon.png';

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center gap-3">
      <a href="https://www.facebook.com/airsoftchtelnica/" target="_blank">
        <img src={fbIcon} alt="FB" className="social-link" />
      </a>
      <a href="https://www.instagram.com/airsoftchtelnica/" target="_blank">
        <img src={instaIcon} alt="Insta" className="social-link" />
      </a>
      <a href="https://www.tiktok.com/@airsoftchtelnica" target="_blank">
        <img src={tiktokIcon} alt="TikTok" className="social-link" />
      </a>
      <a href="https://discord.gg/tYPQ5YyR4g" target="_blank">
        <img src={discordIcon} alt="Discord" className="social-link" />
      </a>
    </div>
  );
};
export default SocialLinks;
