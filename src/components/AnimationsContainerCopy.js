import React from 'react';
import '../styles/container.css';

import Animation from './Animation';

const urlDemo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhIQEA8PEBAPEBcPEBAQEA8WDxYVFhEWFxYSFRUYHSkgGBolGxUVIj0iJykrLi4uFx8zRDMsNygtLisBCgoKDg0OGhAQGy8lICYtLTctNS4tLS0tLy8tLS81LS0tLS0tNS0vLTAvKy4tLS0tLS0tLS0tLS0tLS0tLS0rNf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABBEAACAQICBAsGBAUCBwAAAAAAAQIDEQQGBRIhMRMzQVFhcXJzkcHCMlKBobGyBxQi0RVCYoKSI/EXJVNVk6Kz/8QAGgEBAQADAQEAAAAAAAAAAAAAAAIBAwUEBv/EADMRAQACAQIEBAMGBwEBAAAAAAABAgMREgQhMVEFE0FhcYGxIjIzkaHBFCMk0eHw8WJS/9oADAMBAAIRAxEAPwDtB524AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLpTHRw9Kdae6nG9uVvcorpbsiMl4pWbS24MNs2SMdfVrsn6RnicMqlR3qcJOM+vXckl0WkjVw2Sb49Z683o8QwVw55rXppGn5N2eh4gAAAAAAAAAAAAAAAAAAAAAAAAAAAADS5xxkqOEqSg7Tlqwg+lyV34XPPxN5pjmY6vb4dijJxFYt05zKM5t0x+ZhRhD2XCNaov65R2RfUm/HoPFxWffERHxdTw/hfJta1uusxHwj1+bYfh3O0K9PmnGov7otP7UbuAnlaHn8YjW1Le0x/v5pge9xgAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/iJWtTpQ5NaVR/2xsvuZ4OOtyrV2PB6fbtb4R+f/ABDND/qg098ZP57f3Oa7ef7Nkly1jaeGlVnUerDgr9LakrRS5W7s9fC5YxzM27OZxuG+eK1pHPVMNEYx16MKzjq8InLVvey1nZX6rHSxX30i3dxeJw+Tltj110ZhsaQAAAAAAAAAAAAAAAAAAAAAAAAAAMTS2PWHpSrSTlGGrdLfZzUdnia8uSMdZtLdw+Cc+SMcdZ1+iE57xUasqWpJShKkpJrdZtv9vA5nG5IteNOmju+FYrY623RpOqNYDEqlUjB2tU9p8ySdvmeSHUyY5vSbR6Lk6rq1VyRSajH4b30mY5laxjp7uqaCp6uGoR5qUfnG/mdzBGmOsez5Di7bs9595ZxtecAAAAAAAAAAAAAAAAAAAAAAAAAADT5thrYWoudw/wDpF+R5uL/Cn5fV7vDZ04is/H6OZudqkoP2VsXQ7bfM4l+r6vbrSLR1ampJyqqX9a+u4qOj1VjTHokmEw/618foxTnLnZL/AGHU6MNWMY+7FR8FY+hiNI0fHWndMz3ezLAAAjuddMywtGKpv/VqTWr2YtSk/pH+48vFZpx15dXR8N4WM+Sd3SI+vT+/yb7D1lOMZx9mcVNdTV19T0xOsaw59qzW01n0XDLAAAAAAFpNx2PdyPyZridvKeitN3OF02JAAAAAAi+ZM+YLAzdKpKpUrKzlToxUnG+1azbSTtyXuTNoh7eH8PzZ67q8o91vLn4gYLG1FRhwtKrL2I1oxSnsvaLjJq/Q7CLRLPEeHZsFd86THslhTwgAABr9Ow1qMl0x+5GjiY1xy9PBzpmifj9HGMy6ZoUJzhJylUbu4wV2k+dvYjkY+HvlndHR9NPH4sOlbc509GBovTVCvOMFrwm3ZKaVm+ZNN7TOXhcmON3WGzD4liy22xrE+mrpehMLrVodd31cpjha7ssQ5/F5duKU7O8+bAyAUcldK6u02ly7LX+q8QactXOM34jh8RL3aX+lHm2e0/G/gjj8Vk35J9uT6Xw7H5WGO88/7fo2WitOtRwOFi/1Orq1XzU4t6kfjs+Eek34c/KlI+fwebiODjdmzT005fGeqbHRcMAAAAACklfYzExqdFtPV2P2eR83QyInbynor73OOq6bEgAAAA+a85wlT0jjadR/qeKnUi37s5a8F/jKJqnq+p8PyxOKtfYytTlLG4SML635qk1bktUi2/gk2Y9Xq4qYjDeZ7T9H0obnxgAAAWMbDWhJdF/Db5GvLGtJheK228S+Zc40ZRxmIUr3dTWXVJJr5NHn4eYnFXR7M2sZLasHRNJyr0Yx3utBL/NF5ZiKW17Sxj13107w+j8tYb9UqnMtVdb3/K3iePw6mszdt8QycoqkB1XMAAENzvpGdCtQqU3aVGEp25HrNR1X0PVOfxeS1MlZr6O54Vgplw5K39ZiPy/60GtFx4S901rX5efxOc6GkxbaxcmVVVxcWpRk1WUmk07bHs2c1kb8ETGWusHHWr/D2is+jrZ2nyYAAAAAFvUl778ERtt3VrHZR05P+f8A9UJrM+v6G6OxQ3NXvZ2GPpMF+66WkAAAOWfjBlF4idHF0ZQjUa4GqpXSlZNwkrJ7bXXhzE2rq93CcTGOJrbos/hhkith8V+YxFSlJUab4KMJSb15/p1ndLYouXiiaxzbeK4/zMfl1159dXWTY5gAAAAOIfitl9qvGrGybXBu97SW1xfwWz/Y5WO/kZLY7dOsOx5f8RirkrPPpLW5Fy3P81CpLVkqa1oxjdvWexcnSyOI4iL12UidZXj4acU77zHKHecBhuChGPLvl1vedLh8XlY4q5ObJ5l5syDc1AACB57jrVbf0xj4Xfmjk8dP230XhE6YvnLmedcTONKNKMpRjGopSSbV9aLWq+jl+JjgtJvz7PV4jWfI8yPWYj5c2kydNQx2FlKTio14Sk431rRkm0rb7pM6c2isbp9HzkY7ZJilesvpbQ+OeIpRramopuWrFu71VNxTfS0r/EYsnmUi2mieJw+TlnHrrpp9GabGgAAAAAABbo/zdp+RFPX4qt6fBcLSAAAEZz7xNPvfRIKr1ZGWt8+zHzJqxLfFMAAAAAi34hYeE6ENeKlasrX3r9EtzIvjrb70NuHJak/ZkydgKVJycIJPUW3a34s14sNKTrWFZs+TJ96UpN7QAAAELzZTvW6op/Jfscbjp/mu/wCG20wuMZ1xDlVVNbXfXa6XsivC/ibuBrpWby3eKZZnZhr8fnPRLsvaLjBwSjFONLa1FJt2V23ynjnLOS86vbGKnD4orWOfLWe7sei6HB0aUPdpxT67bfnc7mKu2kR7Pks99+W1u8yyi2oAAAAAABbo/wA3afkRT1+KrenwXC0gAABGc+8TT730SCq9WRlrfPsx8yasS3xTAAAAAI3nviId8vsmFV6rmWN77tE1YlICmAAAAiubYWk5c9L90cXxHlk19na8MnWunu4ZpqV9IdEa1KPhqX8z0YI/pflP7rz3/rYn3r+zrOVMBrzWzZZJ9S2v5Hh4Om/I9niWfZWXRD6B8qBkAAAAAABbo/zdp+RFPX4qt6fBcLSAAAEZz7xNPvfRIKr1ZGWt8+zHzJqxLfFMAAAAAjee+Ih3y+yYVXquZY3vu0TViUgKYAAADQ5tw7dPXS9lOL+O1fT5nM8TxzNYvHo6XhmSIybZfOmkq18VUnzYhv8AxnbyN2Kv8mI9v2M1/wCfNv8A19JfRuVcBwdNSa2yVl1c/j9DX4dh203z6seJZ/MybY9G8Oi5wAAAa7SemqGGVWVWeqqFD8zPn1LtbFyu6tbpRO6N231X5Vtm/wBNdPm5R/xpxH/bo/8All+w3e7Z5LsnDx5/kzHmV7tWyxw8ef5MeZXubLPFKrFX275N7mRW9Y1+KrVnk98PHn+TL8yvdOyz3GSe1O5UTE9EzEx1VMgBGc+8TT730SCq9WRlrfPsx8yasS3xTAAAAAI3nviId8vsmFV6rmWN77tE1YlICmAAAApKCkrNJp7GnuZiYiY0kiZidYcswGg8NwtaTpRbVR2Tu17UuQ888PSP+y9duKyTGmv6Q6nFbF1HpeRUAAAAcM/FfSMq+kVgoNqLdKlUtyptNR6UpNy67cx5dNL3yT6co+X+XSrOuGmGPWdZ+f8Ahu/4bT9xHK3WdrWnZ1dSW/kO/r6vk9HnhFa99nOTvjTXVnbOuiirRfKIvWfUmk9lwpK3T9qXWvoRX70rt0hcLSARnPvE0+99EgqvVkZa3z7MfMmrEt8UwAAAACN574iHfL7JhVeq5lje+7RNWJSApgAAAAYc8wHGV+36pEWbJdCRaFQAADV5jxlSjQdSnbXU4Wvua11dPrV0aOIvNKbo9nr4HFTLm2X6aT9HA9K4p19KV66urSdRc8WoRS8Gzy3v/I17z+7rcJw/9bGOelY+kQlH8en7q8Tnuz/B17uwUdXaotvZe1jt0289JfE315arceLfX+xEfhyufxHujKLstXbz2RVJrOkaJvFufNkm9qW6ftS619CK/elVukLhaQCM594mn3vokFV6sjLW+fZj5k1YlvimAAAAARvPfEQ75fZMKr1XMsb33aJqxKQFMAAAADDnmA4yv2/VIizZLoSLQqAAAavMkNahLoafgebi/wAKXr4GdM0PnrAy/wCYVY8k5VKfxjt9B5Msf0sT20/39XZ4XNpx1p76x/v5JX+TOZvdze7PRpNXb3vkR9FSkxrMvgrWidIh4VN6jVtt93gTFZ8uYVujfqyKa2LqN1ekNc9Xoywt0/al1r6EV+9KrdIXC0gEZz7xNPvfRIKr1ZGWt8+zHzJqxLfFMAAAAAjee+Ih3y+yYVXquZY3vu0TViUgKYAAAAGHPMBxlft+qRFmyXQkWhUAAAx8fS16c48ri7de81Z67sdojs2Yb7MlZ93zBQxGrjFUvs/NNvqlVd/kzz3prgmvt+z3Y8umeL+/1dc/hz5jgaO7/EQ6Pwr92Xgj6nfPaXyW33OFfuy8EN89pNvuoq39MubcjG/X0k2e6vCv3JeCM757SbfcpJ3batd7uXcK66zJb0hcLSARnPvE0+99EgqvVkZa3z7MfMmrEt8UwAAAACN574iHfL7JhVeq5lje+7RNWJSApgAAAAYc8wHGV+36pEWbJdCRaFQAAAGHLdGaJoTnOcobddPe7b3yHmvw+O06zD2xxWWtdsS6f+Wp/wDTh/ijb5OP/wCY/J5fMv3n83s2JALdDc3zybRFOkz7qv2XC0gAABGc+8TT730SCq9WRlrfPsx8yasS3xTAAAAAI3nviId8vsmFV6rmWN77tE1YlICmAAAABhzzAcZX7fqkRZsl0JFoVAAAAYc70Nvn219WRZtl0YtqWbT54+BGlu69a9lHTb9qWzmSsNsz1k3RHSF1ItIAAAAIzn3iafe+iQVXqyMtb59mPmTViW+KYAAAABG898RDvl9kwqvVcyxvfdomrEpAUwAAAAMOeYDjK/b9UiLNkuhItCoAAADDneht8+2vqyLNsujFtTyGQAAAAAAEZz7xNPvfRIKr1ZGWt8+zHzJqxLfFMAAAAAjee+Ih3y+yYVXquZY3vu0TViUgKYAAAAGHPMBxlft+qRFmyXQkWhUAAABhzvQ2+fbXmRZsl0YtreQyAAAAAAA1en8BCvCMZuSUZ6y1Wk/Za5ukETorojDKDla+1JbRpoa6tmAAAAAGt09gYV6ajPWSU1L9LSd9VrlXSCJ0edEYWNNu1/ZS2jTQ11bQAAAAAwjNPQ9OEptOf65Xd2ud7tnSJrqrckyDAAAAAIxhtDU6beq5/qd3dr9hNTclFwxooGQAAAAAAFjGLYuvyA8YNbX1AZQAAAAAWMWtnx8mB4wa2vqAygAAAAA10o7X1mRsTAAAAADXau0yNiYAAAAAAAAC1XWxdYFMOt4F4AAAAALddbPiB4w62sC+AAAAAGI4mRlmAAAAAGJqmRlmAAAAAAAAA81EBSmgPYAAAAAeaiApTQHsAAAAALLiBeAAAAACzqgXgAAAAAAAAABYAAAAAAABYAAAAAAFLAVAAAAAClgKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=";

const AnimationsContainer = () => {
    return (
        <div className="container">
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
            <Animation
                name="Neka animacija"
                gif={urlDemo}
                description="ide gas"
            />
        </div>
    );
}

export default AnimationsContainer;