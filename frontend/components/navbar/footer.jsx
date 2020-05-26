import React from "react"

export default (props) => {
    
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='left-side-footer'> 
                    <div className='ludicrous-block'>
                        Ludicrous is Heroku's biggest collection of joke transcripts and comedy knowledge
                   </div> 
                </div>
                <div className='right-side-footer'>
                    <div className='left-list'>
                        <ul className='footerlist'>
                        </ul>
                    </div>
                    <div>
                        <ul className='footerlist'>
                            <li key={1} className='footer-nav'>
                                <a target='_blank' href='https://github.com/ConnorBrabant/'>GitHub</a>
                            </li>
                            <li key={2} className='footer-nav'>
                                <a target='_blank' href='https://www.linkedin.com/in/connor-brabant-81b1a1168/'>LinkedIn</a>
                            </li>
                            <li key={3} className='footer-nav'>
                                <a target='_blank' href='https://angel.co/u/connor-brabant'>AngelList</a>
                            </li>
                            <li key={4} className='footer-nav'>
                                <a target='_blank' href='https://connorbrabant.github.io/'>Personal Site</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

