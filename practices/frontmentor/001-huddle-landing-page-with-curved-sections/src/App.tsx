import './App.scss';

/**














Grow Together
Generate meaningful discussions with your audience and build a strong, loyal community. 
Think of the insightful conversations you miss out on with a feedback form. 

Flowing Conversations
You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
just-in-time loading for a more natural flow.

Your Users
It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
once signed in to your app, your users can start chatting immediately.

Ready To Build Your Community?
Get Started For Free

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
vestibulum a, ultrices quis sem.

Phone: +1-543-123-4567
example@huddle.com

Newsletter
To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
send you spam or pass on your email address

Subscribe
*/

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header__logo"></div>
        <div className="header__button">Try it free</div>
      </header>
      <main>
        <section className="hero">
          <div className="hero__title">
            Build The Community Your Fans Will Love
          </div>
          <div className="hero__subtitle">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </div>
          <div className="hero__button">Get Started For Free</div>
        </section>
        <section className="picture"></section>
        <section className="numbers">
          <div className="numbers__item">
            <div className="numbers__item__icon"></div>
            <div className="numbers__item__number">1.4k+</div>
            <div className="numbers__item__description">Communities Formed</div>
          </div>
          <div className="numbers__item">
            <div className="numbers__item__icon"></div>
            <div className="numbers__item__number">2.7m+</div>
            <div className="numbers__item__description">Messages Sent</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
