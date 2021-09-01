import React, { useState } from 'react'

const Revue = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  return (
    <div className="revue">
      <h2>Subscribe to My Newsletter!</h2>
      <h3>Every Friday, you will get the newsletter! No Spam. Unsubscribe anytime you want.</h3>
      <form action="http://newsletter.bugragulculer.com/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
        <div className="revue__group">
          <label for="member_email">Email address</label>
          <input placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="member[email]" id="member_email" />
        </div>
        <div className="revue__group">
          <label for="member_first_name">First name</label>
          <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} type="text" name="member[first_name]" id="member_first_name" />
        </div>
        <div className="revue__actions">
          <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
        </div>
        <div className="revue__footer">By subscribing, you agree with Revue’s <a target="blank" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
      </form>
    </div>
  )
}

export default Revue
