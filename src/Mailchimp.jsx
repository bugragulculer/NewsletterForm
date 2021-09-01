import React, { useState } from 'react'

const Mailchimp = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  return (
    <section className='mailchimp'>
      <h2>Subscribe to My Newsletter!</h2>
      <h3>Every Friday, you will get the newsletter! No Spam. Unsubscribe anytime you want.</h3>
      <form action="YOUR MAILCHIMP URL" method="GET" noValidate>
        <input type="hidden" name="u" value="202596093129dd9f85893dc69" />
        <input type="hidden" name="id" value="de8bc456c2" />
        <label htmlFor='MERGE0' value='email'>
          <h4>Your E-mail</h4>
          <input type="email"
            name="EMAIL"
            id="MERGE0"
            placeholder="Your Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoCapitalize="off"
            autoCorrect="off"
          />
        </label>
        <label htmlFor='MERGE1'>
          <h4>Your Name</h4>
          <input
            type="text"
            name="NAME"
            id="MERGE1"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="action__button" />                
      </form>
    </section>
  )
}

export default Mailchimp