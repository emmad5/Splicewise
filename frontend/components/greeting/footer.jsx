import React from 'react';


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='footer'>
                <div>
                    <div className='madewithsmiles'> Made with <i class="fas fa-grin-beam-sweat"></i> in San Francisco, CA, USA</div> 
                    <div>Copyright 2018 Splicewise, Inc. All rights reserved.</div>
                </div>
                
                <div>
                    <a href="https://www.linkedin.com/in/emma-deas-49020a133/" target="_blank" className='linkedin'>Linked <i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/emmad5" target="_blank" className='linkedin github'>Github <i class="fab fa-github"></i></a>
                </div>
            </div>
        )
    }
}

export default Footer;

