import React from 'react';
import '../assets/css/sectionTitlePurple.css';

const SectionTitle = props => (
    <>
        <section id = "tp">
            <h3 class = "titlenump">
                {props.number}
            </h3>

            <h3 class = "titlep">
                {props.name}
            </h3>
        </section>
    </>
);

export default SectionTitle;