import React from 'react';
import { useFormikContext } from 'formik';
import QuestionItem from './QuestionItem';

const LisansUstuTezler = () => {
    const formik = useFormikContext();
    console.log(formik.values);

    return (
        <>
            <QuestionItem
                value={formik.values.questions.section_2.questions_1}
                name={"questions.section_2.questions_1"}
                onChange={(e) => formik.setFieldValue("questions.section_2.questions_1", e.target.value)}
                header={"2. Lisansüstü Tezlerden Üretilmiş Yayınlar"}
                paragraf={"Adayın hazırladığı lisansüstü tezleriyle ilgili olmak kaydıyla"}
                paragraf_direction={"up"}
                title={"A) SCI, SCI-Expanded, SSCI veya AHCI kapsamındaki dergilerde yayımlanmış  makale (10 PUAN)"}
                />
            <QuestionItem
                value={formik.values.questions.section_2.questions_2}
                name={"questions.section_2.questions_2"}
                onChange={(e) => formik.setFieldValue("questions.section_1.questions_2", e.target.value)}
                title={"B)Diğer uluslararası ve ulusal hakemli dergilerde yayımlanmış makale (5 PUAN)"}
                />
            <QuestionItem
                value={formik.values.questions.section_2.questions_3}
                name={"questions.section_2.questions_3"}
                onChange={(e) => formik.setFieldValue("questions.section_1.questions_3", e.target.value)}
                title={"C)Uluslararası sempozyumda/kongrede sunulmuş ve tam metni basılmış alanında bilime katkı sağlayan sözlü bildiri (5 PUAN) "}
                />
            <QuestionItem
                value={formik.values.questions.section_2.questions_4}
                name={"questions.section_2.questions_4"}
                onChange={(e) => formik.setFieldValue("questions.section_1.questions_4", e.target.value)}
                paragraf={"Bu madde kapsamında en az 1 yayın zorunludur. Bu maddeden en fazla 10 puan alınabilir."}
                paragraf_direction={"down"}
                title={"D)Ulusal sempozyumda/kongrede sunulmuş ve tam metni basılmış alanında bilime katkı sağlayan sözlü bildiri (3 PUAN)"}
            />



        </>
    );
}

export default LisansUstuTezler;
