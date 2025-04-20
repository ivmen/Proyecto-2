import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<h2>Contact</h2>
<div>
  ${Button("/icons/twitter.png", "Twitter", "https://twitter.com")}
  ${Button("/icons/github.jpg", "GitHub", "https://github.com/ivmen")}
  ${Button("/icons/linkedln.jpg", "LinkedIn", "https://www.linkedin.com/in/iván-méndez-a6191720b/")}
  ${Button("/icons/telegram.png", "Telegram", "https://telegram.org")}
  ${Button("/icons/instagram.png", "Instagram", "https://instagram.com")}
  ${Button("/icons/youtube.png", "Youtube", "https://www.youtube.com/@Iv%C3%A1nM%C3%A9ndez-m9c")}
  ${Button("/icons/facebook.png", "Facebook", "https://facebook.com")}
</div>
`;