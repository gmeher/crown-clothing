import React from 'react';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';
import './directory-menu.styles.scss';
const DirectoryMenu = ({sections}) => (
            <div className="directory-menu">
                {
                    sections.map(section => {
                        return <MenuItem key={section.id} title={section.title} imgSrc = {section.imageUrl} size = {section.size} linkUrl = {section.linkUrl}/>
                    })
                }
            </div>
         );
 

const mapStateToProps = (state) => ({
  sections : selectDirectorySections(state)
})
export default connect(mapStateToProps)(DirectoryMenu);