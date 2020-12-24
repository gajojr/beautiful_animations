import React, { useState } from 'react';
import './AdminPageStyle.css';

import AddAnimationForm from'./AddAnimationForm/AddAnimationForm';
import UpdateAnimationForm from'./UpdateAnimationForm/UpdateAnimationForm';
import DeleteAnimationForm from'./DeleteAnimationForm/DeleteAnimationForm';
import ChangePasswordForm from'./ChangePasswordForm/ChangePasswordForm';

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
            <AddAnimationForm panels={panels}/>

            {/* Panel for updating */}
            <UpdateAnimationForm panels={panels}/>

            {/* Panel for deleting */}
            <DeleteAnimationForm panels={panels}/>
            
            {/* Change password */}
            <ChangePasswordForm panels={panels}/>
      </main>
    );
};

export default AdminPage;