const footer = document.querySelector("footer");
const footerHTML = () => {
  const section = document.createElement("section");
  section.innerHTML = `
       <section id="main_footer_content">
          <section class="sign_up">
            <form action="" name="submit-to-google-sheets">
              <span class="input-label"
                >Sign up to receive news and updates !</span
              >
              <label for="email">
                <input type="email" placeholder="Email" />
                <button>Sign up</button>
              </label>
            </form>
          </section>
          <p class="advertisement"><span>Powered by</span> Millary</p>
        </section>
        <section id="sub_footer_content">
          <ul>
            <li class="ad">
              <div class="description">
                <p>
                  Explore my art works while connecting with me and my other
                  audiences.
                </p>
                <div class="description_tail"></div>
              </div>
              <a href="https://www.instagram.com/raphaellafkdart" target="_blank">
                <img
                  width="25px"
                  class="instagramIcon"
                  alt="instagramIcon"
                  src="img/instagram.svg"
                  />
              </a>
            </li>
            <li id="copyright">Raphaellafkdart, 2023</li>
            <li class="ad">
              <div class="description email_description">
                <p>Personally reach out to me if you have any questions.</p>
                <div class="description_tail"></div>
              </div>
              <a href="contact.html">
                <img
                  width="28px"
                  class="emailIcon"
                  alt="emailIcon"
                  src="img/envelope-regular.svg"
                />
              </a>
            </li>
          </ul>
        </section>
      
  `;
  section.id = "footer_section";
  // FORM SUBMIT

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxJGZwW3PUDqX6BzHzGdVozH5fZGH0bnSrEgC5DucOWlzDbGVcYx9CNIjkheibe3NNNHw/exec";
  const form = section.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(() => alert("Success!"), location.reload())
      .catch(() => alert("Failed to send!"), location.reload());
  });

  // ICON HOVER JS
  const instagramIcon = section.querySelector(".instagramIcon");
  instagramIcon.addEventListener("mouseenter", () => {
    const description = section.querySelector(".description:first-child");
    description.classList.add("hover");
    instagramIcon.addEventListener("mouseleave", () => {
      description.classList.remove("hover");
    });
  });
  const emailIcon = section.querySelector(".emailIcon");
  emailIcon.addEventListener("mouseenter", () => {
    const description = section.querySelector(".email_description");
    description.classList.add("hover");
    emailIcon.addEventListener("mouseleave", () => {
      description.classList.remove("hover");
    });
  });
  footer.appendChild(section);
};

footerHTML();
