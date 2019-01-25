import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../emoji-data';
import './style.scss';

function CategoriesNav({onClick, categories}) {

    return (
        <nav>{
            categories.map((category, index) => (
                <a className={category.name} key={index} onClick={(e) => onClick(e, index)}>
                    {category.icon ?
                        <img src={category.icon}/> : <span>#{category.name}</span>
                    }
                </a>
            ))
        }
        </nav>
    );
}

CategoriesNav.defaultProps = {
    categories
};

CategoriesNav.propTypes = {
    onClick: PropTypes.func.isRequired,
    categories: PropTypes.array
};

export default CategoriesNav;
