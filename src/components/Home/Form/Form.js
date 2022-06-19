import React, { useState } from 'react';
import axios from 'axios';
import styles from "../../../styles/Home.module.css";
import Swal from 'sweetalert2';


const Form = () => {

     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [subject, setSubject] = useState('');
     const [message, setMessage] = useState('');
     const [error, setError] = useState('');
     const [loadingSend, setLoadingSend] = useState(false);




     const handleSubmit = async (event) => {
          event.preventDefault();
          setLoadingSend(true);
          setError('');

          if (name.trim().length === 0  || email.trim().length === 0 || subject.trim().length === 0 || message.trim().length === 0) {
               setLoadingSend(false);
               return setError('Please note that all fields are required.');
          } else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))){
               setLoadingSend(false);
               return setError('Please enter a valid email address.');
          } else {
               const formPayload = {
                    name,
                    email,
                    subject,
                    message
               }
               // send form to api
               // const {data} means that the axios is gonna return data
               // form is the form in the api files
               try {
                    const { data } = await axios({
                         url: "/api/form",
                         method: "POST",
                         data: formPayload
                    });
          
                    if(data.status == 200 ){
                         setLoadingSend(false);
                         Swal.fire({
                              title: 'Thank you',
                              text: 'You will be hearing from us soon!',
                              imageUrl: '/images/success.svg',
                              imageWidth: 66.15,
                              imageHeight: 67.47,
                              imageAlt: 'Custom image',
                              // showConfirmButton: false,
                              showClass: {
                                   popup: 'animate__animated animate__fadeInDown'
                              },
                              hideClass: {
                                   popup: 'animate__animated animate__fadeOutUp'
                              },
                              timer: 3500
                              
                         }).then((result) => {
                              // isDissmissed for background and timer isconfirmed for the button
                              if (result.isDismissed || result.isConfirmed ) {
                                   setName(''); setEmail(''); setSubject('');setMessage('');
                                   setLoadingSend(false);
                              }
                         })

                    }else{
                      setLoadingSend(false);   
                      return setError(data.error)
                    }
                    
                    // console.log("Response Back:", data.error);
               } catch (error) {
                    setLoadingSend(false);
                    setError(error)
               }
          }
     }

     return (
          <div className='warper whitebg'>
               <div className="container">
                    <a id="contact"></a>
                    <div className={styles.contactSection}>
                         <div className={styles.sectionTitle}>
                              Let's talk
                         </div>
                         <div className={styles.sectionDesc}>
                              We'd love to hear from you! 
                         </div>
                         <div className={styles.secDescLight}>Drop us a line, Give us a call or pass by our office at Antwork.</div>

                         {/* form */}
                         <form id='contactForm' onSubmit={handleSubmit} className={styles.formInput}>
                              <div className={styles.formerror}>
                                  {error}
                              </div>
                              <div className={styles.formrow}>
                                   <input type="text" id="name" name="name" value={name} placeholder="Full name*" onChange={({ target }) => setName(target ?.value  )} />
                                   <input type="email" id="email" name="email" value={email} placeholder="Your e-mail address*" onChange={({target})=>setEmail(target?.value )}/>
                              </div>
                              <input type="text" name="subject" id="subject" value={subject} placeholder="Subject*" onChange={({target})=>setSubject(target?.value )}/>
                              <textarea name="message" id="message" cols="30" value={message} rows="10" placeholder="Drop us a message here…" onChange={({target})=>setMessage(target?.value  )}></textarea>
                              <div className={styles.formbtn}>
                              <button type="submit" disabled={loadingSend ? true : false}  >{loadingSend ? 'Loading...' : 'Send'}</button>
                              </div>
                         </form>


                    </div>
               
               </div>
          </div>


     );
};
export default Form;
