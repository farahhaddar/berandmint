import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Awards.module.css";
import { NavLink } from "../NavLink";

const AwardsMain = () => {

     const data = [
          {
               id: 1,
               img: '/images/awardsCat.png',
               brands: [
               {
                    id:1,
                    img:'/images/awardLogo.png' ,
                    brandId: 'Brand Identity' ,
                    cat: ' gold',
               },
               {
                    id: 1,
                    img: '/images/awardLogo2.png',
                    brandId: 'Brand Identity',
                    cat: ' gold',
               },
               {
                    id: 1,
                    img: '/images/awardLogo3.png',
                    brandId: 'Brand Identity',
                    cat: ' gold',
               }
          ]
          }
          // ,
          // {
          //      id: 2,
          //      img: '/images/awardsCat.png',
          //      brands: [
          //           {
          //                id: 1,
          //                img: '/images/awardLogo.png',
          //                brandId: 'Brand Identity',
          //                cat: ' gold',
          //           }
          //      ]
          // },

     ];

     return (
          <div className='warper whitebg'>
               <div className="container">
                         <div className={styles.titleContainer}>
                              <img src="/images/awards.svg" alt="tropy icon" width='100%' height='100%' />
                              <div className={styles.sectionTitle}>
                                   Our Awards
                              </div>
                         </div>
                         
                         {data.map((item) => (
                         <div className={styles.awardsWarp} key={item.id}>
                              <div className={styles.awardsNameCol}>
                              <img src={item.img} alt="Award Category Icon" width='100%' height='100%' />
                              </div>
                              <div className={styles.awardsItemCol}>
                              {item.brands.map((brand) => (
                                   <div key={brand.id} className={styles.awardsCard}>
                                    <div className={styles.cardIcon}>
                                        <img src={brand.img} alt="Store Icon" width='100%' height='100%' />
                                     </div>
                                     <div className={styles.brandId}>
                                             Corporate Identity: <span> {brand.brandId}</span>
                                     </div>
                                     <div className={styles.category}>
                                        {brand.cat}
                                     </div>
                                </div>
                              ))}
                              
                              </div>
                              </div>
                         ))}
                              

                        
          
               </div>
          </div>


     );
};
export default AwardsMain;
