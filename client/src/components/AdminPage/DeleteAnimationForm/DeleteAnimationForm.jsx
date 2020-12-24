import React from 'react';
import '../AdminPageStyle.css';
import { deleteAnimation } from '../functionality';

const DeleteAnimationForm = ({panels}) => {
    return (
        <div className="delete_class" style={{display: panels.deletePanel ? 'flex' : 'none'}}>
            <h3>Delete animation</h3>
            <form className="form_class">
                <div className="input-field_class">
                    <label className="label_class" htmlFor="delete-by-link_id">Delete by link</label>
                    <input type="text" name="linkToDeleteBy" id="delete-by-link_id" placeholder="https://somelink" required/>
                </div>
                <button type="button" className="delete-animation_class" onClick={() => deleteAnimation(
                    document.getElementById('delete-by-link_id')
                )}>Delete animation</button>
            </form>
        </div>
    )
}

export default DeleteAnimationForm;