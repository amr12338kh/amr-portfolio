"use client"

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const ContactForm = () => {

    const { toast } = useToast()
   
    const [formData, setFormData] = useState({
        user_name: "",
        user_last_name: "",
        user_email: "",
        user_country: "",
        message: "",
        country: true,
        name: true,
        email: true,
        messageArea: true,
      })

    const [send, setSend] = useState(true)

    let form = useRef<any>()

    const sendEmail = (e: { target: HTMLFormElement } & React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
          if (formData.user_name === "" 
            || formData.user_email === ""
            || formData.message === ""
            || formData.user_country === "") {
              e.preventDefault();
              setFormData((prevData: any) => {
                return {
                    ...prevData,
                    name: formData.user_name,
                    email: formData.user_email,
                    messageArea:  formData.message,
                    country: formData.user_country
                }
              })
              toast({
                title: "Uh oh! Something went wrong.",
                description: "Please make sure to enter all the required inputs.",
              })
          } else {
            emailjs.sendForm(
                'service_sn7r5ft', 
                'template_4bv2k4w', form.current, 
                'BmFq-FHz4XeMcF8W8'
            )
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              setSend(true)
              e.target.reset()
              setFormData(prevData => {
                return {
                    ...prevData,
                    user_name: "",
                    user_last_name: "",
                    user_email: "",
                    user_country: "",
                    message: "",
                    country: true,
                    name: true,
                    email: true,
                    messageArea: true,
                }
              })

              toast({
                description: "Your message has been sent.",
              })
          }
      };


      function handleChange(e:  { target: HTMLInputElement | HTMLTextAreaElement }) {
        setFormData(prevFormData => {
           return {
            ...prevFormData,
            [e.target.name]: e.target.value,
            [e.target.id]: e.target.value ? true : false
           }
        })
      }

  return (
    <div className="flex items-center justify-center">
      <div className='flex items-center justify-center'>
        <div className="w-full">
          <div className="rounded-xl border bg-card text-card-foreground shadow p-8">
              <form onSubmit={sendEmail} ref={form} className='grid gap-4'>
                  <span className="font-semibold tracking-tight text-xl xs:text-2xl mb-5">Let&apos;s Work Together!</span>

                  <div className='grid grid-cols-2 gap-5'>
                  <Input 
                      placeholder={formData.name ? "First Name *" : "First Name is required *"} 
                      id='name'
                      type="text" 
                      name='user_name'
                      onChange={handleChange}
                      className={formData.name ? "" :  "  outline outline-1 outline-red-500" }
                  />

                  <Input 
                      placeholder="Last Name" 
                      id='lastName'
                      type="text" 
                      name='user_last_name'
                      onChange={handleChange}
                  />

                  </div>

                  <Input 
                      placeholder={formData.country ? "Country *" : "Country is required *"} 
                      id='country'
                      type="text" 
                      name='user_country'
                      onChange={handleChange}
                      className={formData.country ? "" :  " outline outline-1 outline-red-500" }
                  />      

                  <Input 
                      placeholder={formData.email ? "Email *" : "Email is required *"} 
                      id="email" 
                      type="email" 
                      name='user_email'
                      onChange={handleChange}
                      className={formData.email ? "" :  " outline outline-1 outline-red-500" }
                      />

                  <Textarea 
                      rows={8}
                      cols={10}
                      placeholder={formData.messageArea ? "Say Hello*" : "Wirte your message please*"}  
                      id="messageArea" 
                      name="message" 
                      onChange={handleChange}
                      className={formData.messageArea ? "" :  " outline outline-1 outline-red-500" }
                  >
                  </Textarea>
                  <div>
                      <Button className=" basis-4/6 w-full">Send</Button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm