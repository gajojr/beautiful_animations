import React from 'react';
import '../AdminPageStyle.css';
import { changePassword } from '../functionality';

const ChangePasswordForm = ({panels}) => {
    return (
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
    )
}

export default ChangePasswordForm;