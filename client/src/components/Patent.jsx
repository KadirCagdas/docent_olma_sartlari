import React from 'react';
import { useFormikContext } from 'formik';
import QuestionItem from './QuestionItem';

const Patent = () => {
    const formik = useFormikContext();
    console.log(formik.values);

    return (
        <>
            <QuestionItem
                value={formik.values.questions.section_4.questions_1}
                name={"questions.section_4.questions_1"}
                onChange={(e) => formik.setFieldValue("questions.section_4.questions_1", e.target.value)}
                header={"4. Patent"}
                paragraf={"Başvurulan doçentlik bilim alanı ile ilgili olmak kaydıyla alınan"}
                paragraf_direction={"up"}
                title={"A)Uluslararası patent (20 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_4.questions_2}
                name={"questions.section_4.questions_2"}
                onChange={(e) => formik.setFieldValue("questions.section_4.questions_2", e.target.value)}
                title={"B)Ulusal patent (10 PUAN)"}
                paragraf={"Patentlerde puan kişi sayısına bölünür. "}
                paragraf_direction={"down"}
            />
        </>

    );
}

export default Patent;
