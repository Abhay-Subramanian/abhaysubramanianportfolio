document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("download-btn").addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "./images/abhaypdf.pdf"; 
        link.download = "Abhay_Subramanian_Resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
