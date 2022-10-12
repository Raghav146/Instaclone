import Header from '../header/header';
import './form.css'
function Form(){
    return(
        <>
        <Header/>
        <div className='fullform'>
        <form>
            <div className='post-form'>
                <input type='text'
                placeholder='No file chosen'/>
                <button className='browse'>Browse</button><br/>
                <input type='text'
                placeholder='Author'/>
                <input type='text' 
                placeholder='Location'/>
                <input className='desc' type='text' 
                placeholder='Description'/><br/>
                <button className='butn'>Post</button>
            </div>
        </form>
        </div>
        </>
    )
}
export default Form;