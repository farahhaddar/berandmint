import React,{useState} from 'react'
import styles from "../../styles/Offering.module.css";
import { NavLink } from "../NavLink";
import { useRouter } from 'next/router'
import  OffersSlider  from "../Carousel/OffersSlider"



const tabData = {
     experience: [
          {
               id: 1,
               name: 'Experience',
               // description: 'description For experience',
               offers: [
                    {
                         id: 11,
                         icon: '/images/icon1.svg',
                         name: 'Landscape Assessment',
                         description: 'We start out by surveying every aspect that impacts your brand, from within it to beyond it, allowing us to identify the needs and opportunities.',
                    },
                    {
                         id: 2,
                         icon: '/images/icon2.svg',
                         name: 'Brand Style',
                         description: 'With your brand personality identified, we get to work on pinpointing your brand’s essential visual attributes and tone of voice, to empower all your communications.',
                    },
                    {
                         id: 3,
                         icon: '/images/icon3.svg',
                         name: 'Brand Culture',
                         description: 'Your brand culture goes deeper into your core beliefs and how these manifest themselves in the everyday actions of your employees. This also provides the basis for us to work on your environmental branding and social initiatives.',
                    },
                    {
                         id: 4,
                         icon: '/images/icon4.svg',
                         name: 'Brand Differentiator',
                         description: 'What sets you apart from the crowd? This is what we determine, using our own series of brand-building tools to identify your brand’s personality, vision and drivers. Your brand differentiator then becomes your roadmap for the way your brand communicates and behaves from here on, both internally and externally.',
                    },
                    {
                         id: 5,
                         icon: '/images/icon5.svg',
                         name: 'Social Roadmap',
                         description: 'You know who you are but where are you heading? Your social roadmap is a strategic guide to the types of activities, collaborations, & content suited to your brand, & is an essential tool for PR, digital & social media specialists to work with.',
                    },
                    {
                         id: 6,
                         icon: '/images/icon6.svg',
                         name: 'Brands Guidelines',
                         description: 'With the design and approval phase signed off, we move on to creating your brand guidelines, delivering a flexible framework of specifications to ensure brand consistency in everything you do.',
                    },
                   
               ],
          }
     ],
     express: [
          {
               id: 12,
               name: 'express',
               description: 'Mint Express recognizes that today, more than ever,' ,
               description1:'start-ups',
               description3:'entrepreneurs',
               description2: ' are under pressure to be agile and up and running in no time. As our specially formulated fast-lane solution, Mint Express gives',
               description4: ' the foundations they need to launch their businesses, regardless of how big they are or what stage they’re at, in the shortest space of time.',

               offers: [
                    {
                         id: 7,
                         icon: '/images/icon8.svg',
                         name: 'Fast & Efficient',
                         description: 'We start out by surveying every aspect that impacts your brand, from within it to beyond it, allowing us to identify the needs and opportunities.',
                    },
                    {
                         id: 8,
                         icon: '/images/icon7.svg',
                         name: 'Fast & Efficient',
                         description: 'With your brand personality identified, we get to work on pinpointing your brand’s essential visual attributes and tone of voice, to empower all your communications.',
                    },

               ],
          }
     ],
};

export default function Offering() {

     const setTabStateQuery = (name) => {
          if (name === 'express') {
               return ({ active: 'express', data: express });
          } else if (name === 'experience') {
               return ({ active: 'experience', data: experience, });
          }
     }

     const { express, experience } = tabData;
     const { query } = useRouter();

     const [tab, setTab] = useState(query.name ? setTabStateQuery(query.name) : {
          active: 'experience',
          data: experience
     });

    
     const handleTab = (tab) => {
          if (tab === 'express') {
               setTab({
                    ...tab,
                    active: 'express',
                    data: express,
               });
          } else {
               setTab({
                    ...tab,
                    active: 'experience',
                    data: experience,
               });
          }
     };

  return (
       <div className='warper whitebg'>
            <div className="container">
                 <div className={styles.offeringMain} data-aos="fade-down" data-aos-delay="100">
                      <p>Forget all about outdated traditional brand guidelines, and meet your <span className={styles.offeringmaintext}>Brand Book</span>, containing your brand DNA & strategic roadmap.</p>
                      <p>The Brand Book is a User-friendly manual designed to aid brands as they navigate through today's competitive markets.</p>
                 </div>
               <a id="tabs"></a>
                 <div className={styles.tabsSection}>
                      <div className={styles.tabbtns} data-aos="fade-up" data-aos-delay="200">
                              
                              <div className={styles.tabbtnwarper}>
                                   <button
                                        className={tab.active === 'experience' ? styles.activeTab : ''}
                                        type="button"
                                        aria-label="experience"
                                        onClick={() => handleTab('experience')}
                                        
                                   >
                                        <img src="/images/experinceTitle.svg" alt="logo" />
                         
                                   </button>
                                <div className={tab.active === 'experience' ? styles.btnborderActive : styles.btnborder}></div>
                              </div>
                           <div className={styles.tabbtnwarper}>
                                <button
                                     className={tab.active === 'express' ? styles.activeTab : ''}
                                     type="button"
                                     aria-label="express"
                                     onClick={() => handleTab('express')}
                                >
                                     <img src="/images/expressTitle.svg" alt="logo" />
                                </button>
                                <div className={tab.active === 'express' ? styles.btnborderActive : styles.btnborder}></div>
                           </div>

                      </div>

                      <div className={styles.tabsData}>
                           {tab.data.map((item,index) => (
                                <div
                                     className={styles.tabcontent}
                                     key={`${item.id}+${index}`}
                                > 
                                     <p className={styles.tabDescription} data-aos="fade-down" data-aos-delay="200">{item.description && item.description }
                                     {/* remove this part */}
                                          {item.description1 && <b><span>{item.description1}</span></b> }
                                          {item.description2 && <span >{item.description2}</span> }
                                          {item.description3 && <b><span>{item.description3}</span></b> }
                                          {item.description4 && <span >{item.description4}</span>}
                                     </p>

                                     <div className={item.offers.length >= 3 ? styles.offerCards : styles.offerCardsTwo}>
                                     
                                     {item.offers.map((card) => (
                                          <div key={card.id} className={styles.offerCard} data-aos="zoom-in" data-aos-delay="200">
                                               <div className={styles.offerCardIcon}>
                                                    <img src={card.icon} alt={card.name} width='70px' height='65px' />
                                             </div>
                                               <div className={styles.offerCardTitle}>{card.name}</div>
                                               <div className={styles.offerCardDescription}>{card.description}</div>
                                          </div>
                                      ))}

                                     </div>

                                </div>
                           ))}

                      </div>
                 </div>
                 {/* btn back Home Form */}
                 <div data-aos="fade-up" data-aos-delay="100"  className={styles.projectcta}>
                      <NavLink href="/#contact">
                          Let's Talk
                      </NavLink>
                 </div>

                 <OffersSlider />

                 {/* btn back Home */}
                 <div data-aos="fade-up" data-aos-delay="100" className={styles.projectcta}>
                      <NavLink href="/">
                          Back To Home
                      </NavLink>
                 </div>
            </div>
       </div>
  )
}
