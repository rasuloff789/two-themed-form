import "./form.css";
import {useRef , useState} from "react";

function RenderForm() {
  let checkbox = useRef(null);
  let [checkboxValue , setCheckboxValue] = useState(false);
  let langData = [
    {
      lang: "en",
      labelText: "Dark theme",
      langExtension: "English",
      inputName: "Name",
      inputSurname: "Surname",
      inputEmail: "Email",
      inputPassword: "Password",
      submitBtnText: "Submit"
    },
    {
      lang: "ru",
      labelText: "Темная тема",
      langExtension: "Pусский",
      inputName: "имя",
      inputSurname: "Фамилия",
      inputEmail: "Эл. адрес",
      inputPassword: "пароль",
      submitBtnText: "Разместить"  
    }
  ];
  
  
  function findObj(language) {
   return langData.find(obj => obj.lang === language);
  };
  
  const [selectedObj , setObj] = useState(findObj("en"));
  function renderOption(){
  return  langData.map(
      obj => {
        return (
          <option key={obj.lang} value={obj.lang}>{obj.langExtension}</option>
        )
      }
      );
    }
    
    return(
      <>
      <div className="form-container">
      <div className="">
      <label className="switch">
      <input ref={checkbox} onChange={
        e =>{
          setCheckboxValue(e.target.checked);
        }
      } type="checkbox"/>
      <span className="slider round"></span>
      <span className="checkbox-text">{selectedObj.labelText}</span>
      </label>
      
      </div>
      <form className={"form" + (checkboxValue ? " dark-form" : " light-form")}action="https:echo.htmlacademy.ru" method="post">
      
      <input spellCheck="false" autoComplete="off" minLength="3" placeholder={selectedObj.inputName} className="form-input" type="text" name="name" required id="name"/>
      <p className="invalid">Min 2 characters</p>
      <input spellCheck="false" autoComplete="off" minLength="3" placeholder={selectedObj.inputSurname} className="form-input" type="text" name="surname" required id="surname"/>
      <p className="invalid">Min 2 characters</p>
      <input spellCheck="false" autoComplete="off" placeholder={selectedObj.inputEmail} className="form-input" type="email" name="email" required id="email"/>
      <input spellCheck="false" autoComplete="off" minLength="6" placeholder={selectedObj.inputPassword} className="form-input" type="password" name="password" required id="password"/>
      <p className="invalid">Min 6 characters</p>

      
      <button className="form-submit" type="submit">{selectedObj.submitBtnText}</button>
      </form>
      <select className="select" onChange={e => {
        setObj(findObj(e.target.value))
      }}>
      {renderOption()}
      </select>
      </div>
      </>
      );
    };
    
    export  {
      RenderForm
    };