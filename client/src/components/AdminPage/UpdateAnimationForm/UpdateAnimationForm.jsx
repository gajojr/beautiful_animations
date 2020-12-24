import React from 'react';
import '../AdminPageStyle.css';
import { updateAnimation } from '../functionality';

const UpdateAnimationForm = ({panels}) => {
    return (
        <div className="update_class" style={{display: panels.updatePanel ? 'flex' : 'none'}}>
            <h3>Update existing animation</h3>
            <form className="form_class">
                <div className="input-field_class">
                    <label className="label_class" htmlFor="search-by-link_id">Search by link</label>
                    <input type="text" name="linkToFind" id="search-by-link_id" placeholder="https://somelink" required/>
                </div>
                <div className="input-field_class">
                    <label className="label_class" htmlFor="update-name_id">Update name</label>
                    <input type="text " name="name" id="update-name_id" placeholder="Awesome animation" required/>
                </div>
                <div className="input-field_class">
                    <label className="label_class" htmlFor="update-gifAddress_id">Update gif adrress</label>
                    <input type="text " name="gifAddress" id="update-gifAddress_id" placeholder="/images/animation_gifs/loader.png" required/>
                </div>
                <div className="input-field_class">
                    <label className="label_class" htmlFor="update-description_id">Update description</label>
                    <input type="text" name="description" id="update-description_id" placeholder="Button hover animation" required/>
                </div>
                <div className="input-field_class">
                    <label className="label_class" htmlFor="update-link-to-page_id">Update link to page</label>
                    <input type="text" name="linkToUpdate" id="update-link-to-page_id" placeholder="/animations/animated-button.html" required/>
                </div>
                <button type="button" className="update-animation_class" onClick={() => updateAnimation(
                    document.getElementById('search-by-link_id'),
                    document.getElementById('update-name_id'), 
                    document.getElementById('update-gifAddress_id'), 
                    document.getElementById('update-description_id'),
                    document.getElementById('update-link-to-page_id')
                )}>Update animation</button>
            </form>
        </div>
    )
}

export default UpdateAnimationForm;