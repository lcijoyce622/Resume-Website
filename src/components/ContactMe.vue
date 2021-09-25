<template>
  <section id="contact">
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

            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
              <div
                id="liveToast"
                class="toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div class="d-flex">
                  <div class="toast-body">Email Sent Successfully!</div>
                  <button
                 @click="closeToast"
                    type="button"
                    class="btn-close me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
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
        return;
      }
      // Reset form field
      var toast = document.getElementById("liveToast");
      toast.classList.add("show");
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
    closeToast(){
       var toast = document.getElementById("liveToast");
      toast.classList.remove("show");
    }
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
    color: #886868;
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