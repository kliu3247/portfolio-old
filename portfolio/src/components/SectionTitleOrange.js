import React from 'react';
import '../assets/css/sectionTitleOrange.css';

const SectionTitle = props => (
    <>
        <section id = "to">
            <h3 class = "titlenumo">
                {props.number}
            </h3>

            <h3 class = "titleo">
                {props.name}
            </h3>
        </section>
    </>
);

export default SectionTitle;