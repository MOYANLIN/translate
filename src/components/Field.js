import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Field extends React.Component{
    static contextType=LanguageContext;
    render(){
        const text= LanguageContext==='english'?'Name':'Namm';
        return(
        <div className="ui field">
            <label>{text}</label>
            <input/>
        </div>)
    }
    
}

export default Field;