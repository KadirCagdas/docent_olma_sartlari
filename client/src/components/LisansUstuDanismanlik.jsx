import React from 'react';
import { useFormikContext } from 'formik';
import QuestionItem from './QuestionItem';

const LisansUstuDanismanlik = () => {
    const formik = useFormikContext();
    console.log(formik.values);

    return (
        <>

            <QuestionItem
                value={formik.values.questions.section_6.questions_1}
                name={"questions.section_6.questions_1"}
                onChange={(e) => formik.setFieldValue("questions.section_6.questions_1", e.target.value)}
                title={"A) Doktora  (4 PUAN)"}
                header={"6. Lisansüstü Tez Danışmanlığı"}
                paragraf={"Adayın danışmanlığını yürüttüğü tamamlanan lisansüstü tezlerden"}
                paragraf_direction={"up"}
            />
            <QuestionItem
                value={formik.values.questions.section_6.questions_2}
                name={"questions.section_6.questions_2"}
                onChange={(e) => formik.setFieldValue("questions.section_6.questions_2", e.target.value)}
                title={"B) Yüksek Lisans  (2 PUAN)"}
                paragraf={"Bu madde kapsamında en fazla 10 puan alınabilir."}
                paragraf_direction={"down"}
            />

        </>


    );
}

export default LisansUstuDanismanlik;
