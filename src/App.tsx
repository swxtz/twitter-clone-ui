import logoImg from "./assets/images/logo-twitter.svg";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User,
} from "phosphor-react";

import "./app.scss";

export function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img src={logoImg} className="logo" alt="Logo" />

        <nav className="main-nav">
          <a href="#" className="active">
            <House weight="fill" />
            Home
          </a>
          <a href="#">
            <Hash />
            Explore
          </a>
          <a href="#">
            <Bell />
            Notifications
          </a>
          <a href="#">
            <Envelope />
            Messages
          </a>
          <a href="#">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="#">
            <FileText />
            Lists
          </a>
          <a href="#">
            <User />
            Profile
          </a>
          <a href="#">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className="new-tweet">Tweet</button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/swxtz.png" alt="Avatar" />
              <textarea  id="tweet" placeholder="What's happening?" ></textarea>
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator"></div>
        </main>
      </div>
    </div>
  );
}
