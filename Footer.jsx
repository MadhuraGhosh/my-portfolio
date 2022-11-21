import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/96143880?s=400&u=06293cba7f06556ff57bd6d0b106343fb97b18dd&v=4"}
          alt="Founder"
        />

        <h2>Madhura GHosh</h2>
        <p>It’s hard to beat a person who never gives up</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          
          <a href="https://www.instagram.com/madhu_rra/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/madhuraghosh" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;