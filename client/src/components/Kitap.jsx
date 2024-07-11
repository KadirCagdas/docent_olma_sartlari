import React from 'react';
import { useFormikContext } from 'formik';
import QuestionItem from './QuestionItem';

const Kitap = () => {
    const formik = useFormikContext();
    console.log(formik.values);

    return (
        <>
            <QuestionItem
                value={formik.values.questions.section_3.questions_1}
                name={"questions.section_3.questions_1"}
                onChange={(e) => formik.setFieldValue("questions.section_3.questions_1", e.target.value)}
                header={"3. Kitap"}
                paragraf={"Adayın hazırladığı lisansüstü tezlerinden üretilmemiş ve başvurulan doçentlik bilim alanı ile ilgili olmak kaydıyla"}
                paragraf_direction={"up"}
                title={"A)Uluslararası yayınevleri tarafından yayımlanmış kitap (20 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_3.questions_2}
                name={"questions.section_3.questions_2"}
                onChange={(e) => formik.setFieldValue("questions.section_3.questions_2", e.target.value)}
                title={"B)Uluslararası yayınevleri tarafından yayımlanmış kitap editörlüğü veya bölüm yazarlığı (10 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_3.questions_3}
                name={"questions.section_3.questions_3"}
                onChange={(e) => formik.setFieldValue("questions.section_3.questions_3", e.target.value)}
                title={"C)Ulusal yayınevleri tarafından yayımlanmış kitap (15 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_3.questions_4}
                name={"questions.section_3.questions_4"}
                onChange={(e) => formik.setFieldValue("questions.section_3.questions_4", e.target.value)}
                title={"D)Ulusal yayınevleri tarafından yayımlanmış kitap editörlüğü veya bölüm yazarlığı (8 PUAN)"}
                paragraf={`Bu madde kapsamında aynı kitaptaki bölümlerden en fazla ikisi dikkate alınır. Bu madde
                kapsamında en fazla 20 puan alınabilir`}
                paragraf_direction={"down"}
            />
        </>

    );
}

export default Kitap;
