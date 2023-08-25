import React from 'react'
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/home.css'
import '../styles/footer.css'
import '../styles/responsiveness.css'

import Header from '../components/Header'


export default function AboutUs() {
  return (
    <div>
<Header/>
<div className="about">
                <div className="about-body">
                    <div className="about-us">Like to know us?</div>
                    <div className="about-main">
                        <h2>ABOUT US</h2>
                        <div className="main-about1">
                            <div className="us-1">
                                <h3>Our Aim</h3>
                                <p>Our platform provides users with a safe and secure way to buy, sell,
                                    and trade cryptocurrency. We believe in the power of blockchain technology
                                    and its potential to revolutionize the way we do business.
                                    We strive to make the world of cryptocurrency accessible and user-friendly for everyone.
                                    Our mission is to provide our users with the best possible experience when it comes to buying,
                                    selling, and trading crypto.
                                    We are committed to transparency, security, and customer service.
                                </p>
                            </div>
                            <div className="us-1">
                                <h3>Our Team</h3>
                                <p>
                                    Our platform is backed by a team of experienced and passionate crypto enthusiasts.
                                    We believe that our team's diverse backgrounds and skillsets make us
                                    stronger and more capable of delivering the best possible experience to our users.
                                </p>
                            </div>
                            <div className="us-1">
                                <h3>Our services</h3>
                                <p>We offer a range of services, including a secure crypto wallet,
                                    an intuitive trading platform, and educational resources for those
                                    who are new to the world of crypto. We also prioritize transparency and security,
                                    so our users can have peace of mind when using our platform.
                                    </p>
                            </div>
                            <div className="us-1">
                                <h3>Our Vision</h3>
                                <p>As a company, we are committed to building a future where cryptocurrency is accessible and user-friendly for everyone.
                                     We believe that blockchain technology has the potential to revolutionize the way we do business,
                                      and we are dedicated to making this vision a reality. We see a world where people can easily and securely buy, sell, and trade crypto, without having to worry about security or complexity. Our goal is to make crypto easy and accessible for all,
                                     and to be a leader in the industry.
                                     </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
