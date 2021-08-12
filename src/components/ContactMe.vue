<template>
  <section id="contact" >
    <div class="container">
      <h1 class="mb-3">Contact Me</h1>
      <div class="row justify-content-center">
        <div class="col-10">
          <form @submit.prevent="sendEmail">
            <label for="name">Your Name：</label>
            <input
              id="name"
              type="text"
              v-model="name"
              name="name"
              placeholder="Your Name"
              required
            />
            <label for="email">Your Email：</label>
            <input
              id="email"
              type="email"
              v-model="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <label for="subject">Your Subject：</label>
            <input
              id="subject"
              type="text"
              v-model="subject"
              name="name"
              placeholder="Your Subject"
              required
            />
            <label for="message">Your Message：</label>
            <textarea
              id="message"
              name="message"
              v-model="message"
              cols="30"
              rows="5"
              placeholder="Your Message"
              required
            >
            </textarea>

            <input class="send" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  //   name: 'ContactUs',
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      console.log(e);
      if (
        this.name == "" ||
        this.email == "" ||
        this.subject == "" ||
        this.message == ""
      ) {
        alert("請確實填寫聯繫內容");
        return;
      }
      try {
        emailjs.sendForm(
          "service_10m4cnh",
          "contact_form",
          e.target,
          "user_GJoDLxPXXLICwlrwVzSqA",
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>
<style lang="scss"  scoped>
#contact {
  // padding: 4rem 0;
  h1 {
    letter-spacing: 10px;
  }
  label {
    float: left;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    border: none;
    border-bottom: 2px solid #c79a91;
    // color: white;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    background-color: inherit;
  }

  .send {
    background-color: inherit;
    border: 2px solid #c79a91;
    color: #c79a91;
    //
    padding: 12px 20px;
    // border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .send:hover {
    background-color: #c79a91;
    color: white;
  }
}
</style>