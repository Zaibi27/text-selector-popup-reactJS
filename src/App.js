
import './App.css';
import "./styles/styling.css" ;
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button" ;
function App() {
  let selectArea, theButton , dialogBox , textArea  ;
  const myArray =[];
  let uid , selectedText , addedText ; 


const loggerFunction = (e) => {
    selectArea =  document.querySelectorAll(".select-content");
    theButton = document.querySelector(".MuiSvgIcon-root"); 
 
 


 setTimeout(() => {  //settimeout set to zero so the selected text is deselected if the user again clicks on it

    const text = window.getSelection().toString().trim(); //get the selected text using the getSelection method
  // console.log(text) ;
    
      if(text.length > 0){
        theButton.style.display = "block" ;
      
      const x = e.clientX ; //x coordinates of the pointer where the mouseup event was triggered
      const y = e.clientY ; // y coordinates of the pointer where the mouseup event was triggered
        
  
        theButton.style.left = `${x-20}px` ;
        theButton.style.top = `${y+15}px` ;
        
       
  
    }
  },0)
}

const deselectFunction = (e) =>{
  
  theButton = document.querySelector(".MuiSvgIcon-root");
  dialogBox = document.querySelector(".dialog-box") ;
  if(getComputedStyle(theButton).display === "block" && e.target.nodeName !=="svg" 
  && e.target.nodeName !== "BUTTON"
  && e.target.nodeName !== "TEXTAREA" && e.target.nodeName !=="path" ){
  theButton.style.display = "none" ;
  dialogBox.style.display = "none" ;
  document.getElementById('myTextArea').value = ""
  window.getSelection().empty() ;
}
}

  const handleClick = (e) => {
    const text = window.getSelection().toString().trim();
    dialogBox = document.querySelector(".dialog-box") ;
    dialogBox.style.display = "flex" ;
    const x = e.clientX ;
    const y = e.clientY ;
    dialogBox.style.left = `${x - 20}px` ;
    dialogBox.style.top = `${y+25}px` ;

    uid = new Date() ;
    selectedText = text

  }

  const handleCancel = () => {
    theButton.style.display = "none" ;
    dialogBox.style.display = "none" ;
    document.getElementById('myTextArea').value = ""
    window.getSelection().empty() ;
  
  }

 const handleTextAreaClick = () => {
    addedText = document.getElementById('myTextArea').value
   
    let obj = {
      uid: uid ,
      selectedText: selectedText ,
      addedText: addedText
    }
    myArray.push(obj) ;
    theButton.style.display = "none" ;
    dialogBox.style.display = "none" ;
    document.getElementById('myTextArea').value = ""
    window.getSelection().empty() ;
    console.log(myArray) ;
  }


  return (
    <div className="App" onMouseDown={deselectFunction}>
      <h1>
        Select the text anywhere below to check the functionality
      </h1>
     <div className="selectContentDiv">
      <p className="fontcheck w3-animate-zoom select-content " onMouseUp={loggerFunction}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.  Lorem ipsum dolor sit amet.
         </p>
     </div>
       
          <AddCircleIcon  onClick={handleClick} />
      
      <Card className="dialog-box" id="dialog-box">
      <textarea name="" id="myTextArea" cols="30" rows="8" placeholder="Enter text here"></textarea> 
      <div className="textAreaButtons" >
      <button className="cancelButton" onClick={handleCancel} >Cancel</button>
      <button className="addButton" onClick={handleTextAreaClick}>Add Text</button>
      </div>
      </Card>

    
    </div>
  );
}

export default App;
