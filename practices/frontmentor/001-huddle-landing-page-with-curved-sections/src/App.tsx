import './App.scss';
import logo from './assets/logo.svg';
import screenMockups from './assets/screen-mockups.svg';
import iconCommunities from './assets/icon-communities.svg';
import iconMessages from './assets/icon-messages.svg';
import illustratorGrowTogether from './assets/illustration-grow-together.svg';
import illustratorFlowingConversations from './assets/illustration-flowing-conversation.svg';
import illustratorYourUsers from './assets/illustration-your-users.svg';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <button className="header__button">Try it free</button>
      </header>
      <main>
        <section className="hero">
          <p className="hero__title">Build The Community Your Fans Will Love</p>
          <p className="hero__subtitle">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="hero__button">Get Started For Free</button>
        </section>
        <section className="picture">
          <img src={screenMockups} alt="Screen Mockups" />
        </section>
        <section className="numbers">
          <div className="numbers__item">
            <div className="numbers__item__icon">
              <img src={iconCommunities} alt="" />
            </div>
            <div className="numbers__item__number">1.4k+</div>
            <div className="numbers__item__description">Communities Formed</div>
          </div>
          <div className="numbers__item">
            <div className="numbers__item__icon">
              <img src={iconMessages} alt="" />
            </div>
            <div className="numbers__item__number">2.7m+</div>
            <div className="numbers__item__description">Messages Sent</div>
          </div>
        </section>
        <section className="features">
          <div className="features__item">
            <img
              className="features__item__img"
              src={illustratorGrowTogether}
              alt=""
            />
            <p className="features__item__title">Grow Together</p>
            <p className="features__item__description">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
          <div className="features__item">
            <img
              className="features__item__img"
              src={illustratorFlowingConversations}
              alt=""
            />
            <p className="features__item__title">Flowing Conversations</p>
            <p className="features__item__description">
              You wouldn&apos;t paginate a conversation in real life, so why do
              it online? Our threads have just-in-time loading for a more
              natural flow.
            </p>
          </div>
          <div className="features__item">
            <img
              className="features__item__img"
              src={illustratorYourUsers}
              alt=""
            />
            <p className="features__item__title">Your Users</p>
            <p className="features__item__description">
              It takes no time at all to integrate Huddle with your app&apos;s
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </section>
        <section className="callout">
          <div className="callout__title">Ready To Build Your Community?</div>
          <button className="callout__button">Get Started For Free</button>
        </section>
      </main>
      <footer>
        <section className="newsletter">
          <p className="newletter__title">Newsletter</p>
          <p className="newsletter__description">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We&apos;ll never send you spam or pass on your email
            address
          </p>
          <input type="text" className="newsletter__email" />
          <button className="newsletter__button">Subscribe</button>
        </section>
        <section className="contact">
          <div className="contact__logo"></div>
          <p className="contact__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="contact__item">
            <img src="" alt="" className="contact__item__left" />
            <p className="contact__item__info">Phone: +1-543-123-4567</p>
          </div>
          <div className="contact__item">
            <img src="" alt="" className="contact__item__left" />
            <p className="contact__item__info">example@huddle.com</p>
          </div>
          <div className="contact__sns">
            <img src="" alt="" className="contact__sns__item" />
            <img src="" alt="" className="contact__sns__item" />
            <img src="" alt="" className="contact__sns__item" />
          </div>
        </section>
      </footer>
    </div>
  );
};

export default App;
