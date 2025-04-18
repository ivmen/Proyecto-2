import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/twitter.png", "Twitter")}
${Button("/icons/github.jpg", "GitHub")}
${Button("/icons/linkedln.jpg", "LinkedIn")}
${Button("/icons/telegram.png", "Telegram")}
${Button("/icons/instagram.png", "Instagram")}
${Button("/icons/youtube.png", "Youtube")}
${Button("/icons/facebook.png", "Facebook")}
</div>
`;