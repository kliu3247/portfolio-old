import React from 'react';
import '../assets/css/sectionTitle.css';;

const SectionTitle = props => (
    <>
        <section id = "t">
            <h3 class = "titlenum">
                {props.number}
            </h3>

            <h3 class = "title">
                {props.name}
            </h3>
        </section>
    </>
);

export default SectionTitle;