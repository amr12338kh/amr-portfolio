"use client"

import { useState, useRef, } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"



const Subscribe = () => {

  const { toast } = useToast()
   
    const [formData, setFormData] = useState({
        user_email: "",
        email: true,
      })

    const [send, setSend] = useState(true)

    let formRef = useRef<any>()

    const sendEmail = (e: { target: HTMLFormElement } & React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
          if (formData.user_email === "") {
              e.preventDefault();
              setFormData((prevData: any) => {
                return {
                    ...prevData,
                    email: formData.user_email,
                }
              })

              toast({
                title: "Uh oh! Something went wrong.",
                description: "Please make sure to enter your E-mail.",
              })

          } else {
            emailjs.sendForm(
                'service_rmwmc99', 
                'template_re4yhnn', formRef.current, 
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
                    user_email: "",
                    email: true,
                }
              })

              toast({
                description: "You have successfully subscribed!",
              })
          }
      };


      function handleChang(e: { target: HTMLInputElement }) {
        setFormData(prevFormData => {
           return {
            ...prevFormData,
            [e.target.name]: e.target.value,
            [e.target.id]: e.target.value ? true : false
           }
        })
      }

  return (
    <section className=" relative">
      <form className=" text-sm" onSubmit={sendEmail} ref={formRef}>
        <label htmlFor="email">Subscribe to get special offers</label>
        <Input 
          placeholder="Enter your e-mail" 
          name="user_email"
          onChange={handleChang} 
          type="email"
          id="email"
          className=" mt-2"
        />
        <Button className="w-full mt-2">Subscribe</Button>
      </form>
    </section>
  )
}

export default Subscribe