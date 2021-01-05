import React from 'react';
import '../assets/css/sectionTitleRed.css';

const SectionTitle = props => (
    <>
        <section id = "tr">
            <h3 class = "titlenumr">
                {props.number}
            </h3>

            <h3 class = "titler">
                {props.name}
            </h3>
        </section>
    </>
);

export default SectionTitle;