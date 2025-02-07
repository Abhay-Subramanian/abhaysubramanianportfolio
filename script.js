document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("gfAkgIhxc_2S7ZzB5"); // Replace with your EmailJS User ID

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        emailjs.send("service_q388qxm", "template_2zz523l", {
            name: name,
            email: email,
            subject:message,
            message: message,
           
        })
        .then(() => {
            alert(`Thank you, ${name}! Your message has been sent.`);
            document.getElementById('contact-form').reset();
        })
        .catch((error) => {
            alert('Failed to send message. Please try again.');
            console.error("EmailJS Error:", error);
        });
    });

    document.getElementById("download-btn").addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "./images/abhaypdf.pdf"; // Ensure the correct file path
        link.download = "Abhay_Subramanian_Resume.pdf"; // Suggested filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
