import React, { useState } from 'react';
import './AdminPageStyle.css';

import { addAnimation, updateAnimation, deleteAnimation, changePassword } from './functionality';

const AdminPage = () => {
    document.title = 'Admin page';

    const [panels, setPanels] = useState({
        addPanel: false, 
        updatePanel: false, 
        deletePanel: false, 
        changePasswordPanel: false
    });

    return(
        <main className="main_class">
            <h1>Hello admin!</h1>
            {/* Navbar */}
            <nav className="database-manipualtion_class">
                <div className="add-update-delete_class" id="add-panel_id" onClick={() => setPanels((prevState) => {   
                    return { 
                        addPanel: !prevState.addPanel, 
                        updatePanel: false, 
                        deletePanel: false,
                        changePasswordPanel: false
                    }
                })}>Add new animation</div>
                <div className="add-update-delete_class" id="update-panel_id" onClick={() => setPanels((prevState) => {   
                    return { 
                        addPanel: false, 
                        updatePanel: !prevState.updatePanel, 
                        deletePanel: false,
                        changePasswordPanel: false
                    }
                })}>Update existing animation</div>
                <div className="add-update-delete_class" id="delete-panel_id" onClick={() => setPanels((prevState) => {   
                    return { 
                        addPanel: false, 
                        updatePanel: false, 
                        deletePanel: !prevState.deletePanel,
                        changePasswordPanel: false
                    }
                })}>Delete animation</div>
                <div className="add-update-delete_class" onClick={() => setPanels((prevState) => {   
                    return { 
                        addPanel: false, 
                        updatePanel: false, 
                        deletePanel: false,
                        changePasswordPanel: !prevState.changePasswordPanel
                    }
                })}>Change Password</div>
            </nav>

            {/* Panel for adding new animation */}
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

            {/* Panel for updating */}
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

            {/* Panel for deleting */}
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
            
            {/* Change password */}
            <div className="change-password-panel_class" style={{textAlign: 'left', display: panels.changePasswordPanel ? 'flex' : 'none'}}>
                <h3>Change password</h3>
                <form className="form_class">
                    <div className="input-field_class">
                        <label className="label_class" htmlFor="username_id">Enter username:</label>
                        <input type="text" name="username" id="username_id" required/>
                    </div>
                    <div className="input-field_class">
                        <label className="label_class" htmlFor="old-password_id">Enter old password:</label>
                        <input type="password" name="oldPassword" id="old-password_id" required/>
                    </div>
                    <div className="input-field_class">
                        <label className="label_class" htmlFor="new-password_id">Enter new password:</label>
                        <input type="password" name="newPassword" id="new-password_id" required/>
                    </div>
                    <button type="button" id="change-password-submit_id" onClick={() => changePassword(
                        document.getElementById('username_id'),
                        document.getElementById('old-password_id'),
                        document.getElementById('new-password_id')
                    )}>Change password</button>
                </form>
            </div>
      </main>
    );
};

export default AdminPage;