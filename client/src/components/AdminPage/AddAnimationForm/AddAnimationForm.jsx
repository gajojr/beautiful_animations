import React from 'react';
import '../AdminPageStyle.css';
import { addAnimation } from '../functionality';

const AddAnimationForm = ({panels}) => {
    return (
        <div className="add_class" style={{display: panels.addPanel ? 'flex' : 'none'}}>
            <h3>Add new animation</h3>
            <form className="form_class">
                <div className="input-field_class">
                    <label className="label_class" htmlFor="add-name_id">Add name</label>
                    <input type="text" name="animationName" id="add-name_id" placeholder="Awesome animation" required/>
                </div>
                <div className="input-field_class">
                    <label className="label_class" htmlFor="add-gifAddress_id">Add gif address</label>
                    <input type="text" name="gifAddress" id="add-gifAddress_id" placeholder="/images/animation_gifs/loader.png" required/>
                </div>
                <div className="input-field_class">
                    <label className="label_class" htmlFor="add-description_id">Add description</label>
                    <input type="text" name="description" id="add-description_id" placeholder="Button hover animation" required/>
                </div>
                <div className="input-field_class">
                    <label className="label_class" htmlFor="add-link-to-page_id">Add link to page</label>
                    <input type="text" name="linkToPage" id="add-link-to-page_id" placeholder="/animations/animated-button.html" required/>
                </div>
                <button type="button" className="add-new-animation_class" onClick={() => addAnimation(
                    document.getElementById('add-name_id'),
                    document.getElementById('add-gifAddress_id'), 
                    document.getElementById('add-description_id'), 
                    document.getElementById('add-link-to-page_id')
                )}>Make new animation</button>
            </form>
        </div>
    )
}

export default AddAnimationForm;