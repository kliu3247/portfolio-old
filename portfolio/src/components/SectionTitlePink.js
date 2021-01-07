import React from 'react';
import '../assets/css/sectionTitlePink.css';

const SectionTitle = props => (
    <>
        <section id = "tpink">
            <h3 class = "titlenumpink">
                {props.number}
            </h3>

            <h3 class = "titlepink">
                {props.name}
            </h3>
        </section>
    </>
);

export default SectionTitle;