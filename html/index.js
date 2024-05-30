const   formsSumission= ()=>{
    const formData = document.getElementById("hello");
    const formDatas =  new FormData(formData);
    //Display Values
    for(const value of formDatas.values()){
        console.log(value);
    }
    document.getElementById("contactForm").reset();
    document.getElementsByClassName("systemMsg")[0].innerHTML = 
        "Thanku for contacting us";
    setTimeout(()=>{
        document.getElementsByClassName("systemMsg")[0].innerHTML = 
        "";
    } , 3000)

};

[{
    innerHTML:"",
},
]

