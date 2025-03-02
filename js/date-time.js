const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",  // "Wed"
    month: "short",    // "Jul"
    day: "2-digit",    // "28"
    year: "numeric"    // "2025"
});

// Format it properly as "Wed , Jul 28 2025"
const finalDate = formattedDate.replace(',', ' ,');
const para = document.createElement("p");
const dateContainer = document.getElementById("date-container");

para.style.fontSize = "20px"; 
para.style.color = "#000000"; 
para.style.fontWeight = "bold"; 
para.style.marginLeft = "10px"; 
para.style.padding = "10px";  
para.style.borderRadius = "5px"
para.style.backgroundColor = "#F4F7FF";



para.innerText = `
    ${finalDate}
`
dateContainer.appendChild(para);
