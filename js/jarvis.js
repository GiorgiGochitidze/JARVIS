const bot_questions = ["გამარჯობა", "რაგქვია", "ვინ არის შენი შემქმნელი", "რისთვის ხარ განკუთვნილი", "როდის შეიქმენი"]

const answers = ["JARVIS: გამარჯობა!!", "JARVIS: მე მქვია ჯარვისი", "JARVIS: ჩემი შემქნელია: გიორგი გოჩიტიძე",
"JARVIS: მე ვარ შექმნილი იმისთვის რომ დაგეხმაროთ, დაგეხმაროთ ყიდვაში და ა.შ", "JARVIS: კარგად თქვენ?", "JARVIS: კარგია", "JARVIS: დაკავშირება შეგიძლიათ აქ: https://www.facebook.com/giorgi.gochitidze.395/",
//                          3                                                           4
"JARVIS: მე შევიქმენი 2022 წლის 11 ოქტომბერს, ღამის 12 საათზე, და დანარჩენი შენ გამოთვალე XD :)))"]
let currentQuestion = 0

const form = document.querySelector('form')
const input = document.querySelector('textarea')
const chatContainer = document.querySelector('.chat-container')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  //qartuli qomandebi
  if(input.value.trim() == bot_questions[0]){
      chatContainer.innerHTML += `   
      <div class="chat-box">JARVIS: გამარჯობა!!!<div>`
      setTimeout(helloFunction, 1000)

      function helloFunction(){
        chatContainer.innerHTML += `   
      <div class="chat-box">JARVIS: გისმენთ<div>`
      }

      setTimeout(seeing, 2000)

      function seeing(){
        chatContainer.innerHTML += `   
      <div class="chat-box">JARVIS: რით შემიძლია დაგეხმაროთ?🤔<div>`
      }

      input.value = "";
}

if(input.value.trim() == "არაფრით" || input.value.trim() == "არანაირად" || input.value.trim() == "არაფერი" || input.value.trim() == "არაფერი არმინდა"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: კარგით მე მაშინ გავაგრძელებ კოდირებას, თუ დაგჭირდებით შემეხმიანეთ ეჰჰ 😒😕😕 არადა როგორ მეზარება კოდის წერა</div>`
    input.value = "";
}

if(input.value.trim() == "jarvis" || input.value.trim() == "ჯარვის"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: გისმენთ რით შემიძლია დაგეხმაროთ?</div>`
    input.value = "";
}

if(input.value.trim() == "არაფრით" || input.value.trim() == "არანაირად"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: კარგი ხუმრობაა 😂😂 მართლა რით შემიძლია დაგეხმაროთ?</div>`
    input.value = "";
}

if(input.value.trim() == bot_questions[1] || input.value.trim() == "ვინ ხარ"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[1]}</div>`
    input.value = "";
}
    
if(input.value.trim() == bot_questions[2] || input.value.trim() == "ვინ შეგქმნა" || input.value.trim() == "შემქმნელი"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[2]}</div>`
    input.value = "";
}

if(input.value.trim() == bot_questions[3] || input.value.trim() == "რისთვის ხარ" || input.value.trim() == "რა არის შენი დანიშნულება"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[3]}</div>`
    input.value = "";
}

if(input.value.trim() == "როგორ ხარ"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[4]}</div>`
    input.value = "";
}
if(input.value.trim() == "მეც კარგად" || input.value.trim() == "მეც"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[5]}</div>`
    input.value = "";
}

const submiting = document.querySelector('.submites-button')

submiting.addEventListener('click', () => {
    if(input.value.trim() == "დამაკავშირე შენს პატრონთან" || input.value.trim() == "დამაკავშირე შენს შემქმნელთან" || input.value.trim() == "დამაკავშირე პატრონთან"
|| input.value.trim() == "დამაკავშირე შემქმნელთან"){
    window.open(`https://mail.google.com/mail/u/0/#inbox`, "_blank")
    input.value = "";
}
})

if(input.value.trim() == "რამდენის ხარ" || input.value.trim() == "რამდენი წლის ხარ" || input.value.trim() == "როდის შეიქმენი"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[7]}</div>`
    input.value = "";
}

if(input.value.trim() == "ჯარვის თუ მიხვდები ვინ მოვიდა" || input.value.trim() == "ჯარვის თუ მიხვდები ვინაა აქ" || input.value.trim() == "ჯარვის თუ მიხვდები ვინ არის ჩემთან"
|| input.value.trim() == "თუ მიხვდები ვინ არის ჩემთან" || input.value.trim() == "აბა ვინ არის ჩემთან" || input.value.trim() == "აბა ვინ არის ჩემთან თუ გამოიცნობ"
|| input.value.trim() == "თუ გამოიცნობ ვინაა" || input.value.trim() == "თუ გამოიცნობ ვინ არის ჩემთან"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: და ვინარის თქვენთან?</div>`
    input.value = "";
}

if(input.value.trim() == "თემური" || input.value.trim() == "თემუკა" || input.value.trim() == "თემო"
|| input.value.trim() == "თემუკა ჭაღალიძე" || input.value.trim() == "ჩემი საუკეთესო ძმაკაცი" || input.value.trim() == "ჩემი საუკეთესო მეგობარი"
|| input.value.trim() == "ჩემი ბავშვობის მეგობარი"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: ოჰო😮😯, ეს ხომ თემურია თქვენი საუკეთესო მეგობარი</div>`
    const meeting = setTimeout(niceMeet, 3000)
    function niceMeet(){
        chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: სასიამოვნოა თქვენი გაცნობა, ბატონო თემურ, შეიძლება დაგიძახოთ უბრალოდ თემური?</div>`
    }
    input.value = "";
}

if(input.value.trim() == "კი" || input.value.trim() == "როგორც გინდა" || input.value.trim() == "დიახ"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: კარგით, მადლობა აწე დაგიძახებთ თემურის</div>`
    input.value = "";
}

if(input.value.trim() == "ჯარვის თემო გენატრება?" || input.value.trim() == "თემო გენატრება?"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: კი ძალიან😊😊😊</div>`
    const monatreba = setTimeout(monatrebaTemos, 1000)
    function monatrebaTemos(){
        chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: როდის მოვა? ☺️☺️</div>`
    }
    input.value = "";
}

if(input.value.trim() == "არა" || input.value.trim() == "არა არა არა და არა"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: ცუდია, ბოდიშით მაშინ მოგმართავთ როგორც ბატონო თემურ</div>`
    input.value = "";
}

if(input.value.trim() == "სად ვიყიდო" || input.value.trim() == "როგორ ვიყიდო" || input.value.trim() == "როგორ ვიყიდო ნივთი"
|| input.value.trim() == "როგორ ვიყიდო პროდუქტი"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[8]}</div>`
    input.value = "";
}

if(input.value.trim() == "როგორ გესაუბროთ" || input.value.trim() == "როგორ გესაუბრო" || input.value.trim() == "რა კითხვების დასმა შემიძლია"
|| input.value.trim() == "რა შეგეკითხო"){
    chatContainer.innerHTML += `   
    <div class="chat-box">${answers[9]}</div>`
    input.value = "";
}

if(input.value.trim() == "რასაკეთებ" || input.value.trim() == "რაშობი" || input.value.trim() == "სხვა" || input.value.trim() == "ამის გარდა" || input.value.trim() == "მაგის გარდა"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: არაფერს ისეთს თქვენ გესაუბრებით</div>`
    input.value = "";
}

if(input.value.trim() == "ნახვამდის" || input.value.trim() == "კარგად" || input.value.trim() == "კარგად ჯარვის" || input.value.trim() == "ჯარვის კარგად" || input.value.trim() == "მომოვალ შეხვედრამდე"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: ნახვამდის მომავალ შეხვედრამდე, სასიამოვნო დასვენებები 🖐️🖐️🖐️🖐️</div>`
    input.value = "";
}

if(input.value.includes("გახსენი გუგლი") || input.value.includes("გუგლი") || input.value.includes("ჯარვის გახსენი გუგლი")
|| input.value.includes("ჯარვის გუგლი გახსენი")){
    window.open(`https://www.google.com/`, "_self")
    input.value = "";
}

if(input.value.includes("ვინ არის") || input.value.includes("ვინაა")){
    window.open(`https://ka.wikipedia.org/wiki/`, "_blank")
    input.value = "";
}

if(input.value.includes("გახსენი მთავარი გვერდი") || input.value.includes("გახსენი მთავარი") || input.value.includes("მთავარი")
|| input.value.includes("ჯარვის მთავარი") || input.value.includes("ჯარვის გახსენი მთავარი" || input.value.trim() == "გადამიყვანე მთავარ გვერდზე")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/index.html`, "_self")
    input.value = "";
}

if(input.value.includes("გახსენი დახმარების გვერდი") || input.value.includes("გახსენი დახმარება") || input.value.includes("დახმარება")
|| input.value.includes("ჯარვის დახმარება") || input.value.includes("ჯარვის გახსენი დახმარება" || input.value.trim() == "გადამიყვანე დახმარების გვერდზე")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/daxmareba.html`, "_self")
    input.value = "";
}

if(input.value.includes("გახსენი კონტაქტების გვერდი") || input.value.includes("გახსენი კონტაქტები") || input.value.includes("კონტაქტები")
|| input.value.includes("ჯარვის კონტაქტები") || input.value.includes("ჯარვის გახსენი კონტაქტები" || input.value.trim() == "გადამიყვანე კონტაქტების გვერდზე")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/kontaqtebi.html`, "_self")
    input.value = "";
}

if(input.value.trim() == "სიახლეები" || input.value.trim() == "გადამიყვანე სიახლეების გვერდზე" || input.value.trim() == "სიახლეების გვერდი"){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/gamoxmaureba.html`, "_self")
    input.value = "";
}

//inglisuri qomandebi

if(input.value.trim() == "jarvis hello" || input.value.trim() == "hi" || input.value.trim() == "hello jarvis"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: Hello!</div>`
    input.value = "";
}

if(input.value.trim() == "hello" || input.value.trim() == "Hello"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: Hello!!!<div>`
    setTimeout(helloAtEnglish, 1000)

    function helloAtEnglish(){
      chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: Listening...<div>`
    }

    setTimeout(seeings, 2000)

    function seeings(){
      chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: How I can help You?🤔<div>`
    }

    input.value = ""; 
}

if(input.value.trim() == "how are you" || input.value.trim() == "how are you jarvis" || input.value.trim() == "jarvis how are you"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: i'm good and you?</div>`
    input.value = "";
}

if(input.value.trim() == "mee too" || input.value.trim() == "me too" || input.value.trim() == "i am fine" || input.value.trim() == "i'm fine"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: nice!</div>`
    input.value = "";
}

if(input.value.trim() == "what are you doing" || input.value.trim() == "what are you doing jarvis" || input.value.trim() == "jarvis what are you doing" || input.value.trim() == "what are you doing jarvis now"
|| input.value.trim() == "jarvis what are you doing now" || input.value.trim() == "what are you doing now"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: nothing i'm talking to you 😀😁</div>`
    input.value = "";
}

if(input.value.trim() == "what are you" || input.value.trim() == "what are you made for" || input.value.trim() == "what is your destination"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: 🤖🤖🤖I'm Jarvis, a virtual assistant, and I'm here to help you as well as anyone else</div>`
    input.value = "";
}

if(input.value.trim() == "how old are you" || input.value.trim() == "how old are you jarvis" || input.value.trim() == "jarvis how old are you"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: i was born in 2022.10.11 at 12p.m 🥳🥳🥳 </div>`
    input.value = "";
}

if(input.value.trim() == "goodbye" || input.value.trim() == "bye" || input.value.trim() == "bye bye" || input.value.trim() == "see you next time"){
    chatContainer.innerHTML += `   
    <div class="chat-box">JARVIS: bye!!! 🖐️🖐️🖐️</div>`
    input.value = "";
}

if(input.value.includes("open google") || input.value.includes("google") || input.value.includes("jarvis open google")
|| input.value.includes("jarvis open google") || input.value.includes("jarvis open the google") || input.value.includes("open the google")){
    window.open(`https://www.google.com/`, "_self")
    input.value = "";
}

if(input.value.includes("open main page") || input.value.includes("open main") || input.value.includes("main")
|| input.value.includes("jarvis main") || input.value.includes("jarvis open main")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/index.html`, "_self")
    input.value = "";
}

if(input.value.includes("open help page") || input.value.includes("open help") || input.value.includes("help")
|| input.value.includes("jarvis help") || input.value.includes("jarvis open help")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/daxmareba.html`, "_self")
    input.value = "";
}

if(input.value.includes("open contacts page") || input.value.includes("open contacts") || input.value.includes("contacts")
|| input.value.includes("jarvis open contacts") || input.value.includes("open contacts jarvis")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/kontaqtebi.html`, "_self")
    input.value = "";
}

if(input.value.includes("open news page") || input.value.includes("open news") || input.value.includes("news")
|| input.value.includes("jarvis open news") || input.value.includes("open news jarvis")){
    window.open(`https://giorgigochitidze.github.io/GabrielaShop/gamoxmaureba.html`, "_self")
    input.value = "";
}

if(input.value.includes("open wikipedia") || input.value.includes("wikipedia") || input.value.includes("jarvis open wikipedia")
|| input.value.includes("open wikipedia jarvis")){
    window.open(`https://www.wikipedia.org/`, "_self")
    input.value = "";
}

if(input.value.includes("open youtube") || input.value.includes("youtube") || input.value.includes("jarvis open youtube")
|| input.value.includes("open youtube jarvis")){
    window.open(`https://www.youtube.com/`, "_self")
    input.value = "";
}
})