const  buttons = {


    button01() {
        window.scrollTo(300,0);
    },
    button02() {
        window.scrollTo(400,0);
    },
    button03() {
        window.scrollTo(500,0);
    },
    button04() {
        window.scrollTo(600,0);
    }
    
}
function scrollMove(buttonName) {
    console.log(buttonName)
    const buttonF = buttons[buttonName]
    if (buttonF) {
        buttonF()
    }
   
  }