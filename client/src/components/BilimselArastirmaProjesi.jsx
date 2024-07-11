import React from 'react';
import { useFormikContext } from 'formik';
import QuestionItem from './QuestionItem';

const BilimselArastirmaProjesi = () => {
    const formik = useFormikContext();
    console.log(formik.values);

    return (
        <>
            <QuestionItem
                value={formik.values.questions.section_7.questions_1}
                name={"questions.section_7.questions_1"}
                onChange={(e) => formik.setFieldValue("questions.section_7.questions_1", e.target.value)}
                header={"7. Bilimsel Araştırma Projesi"}
                title={"A)Devam eden veya başarı ile tamamlanmış AB Çerçeve programı bilimsel araştırma projesinde koordinatör/baş araştırmacı olmak  (15 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_7.questions_2}
                name={"questions.section_7.questions_2"}
                onChange={(e) => formik.setFieldValue("questions.section_5.questions_2", e.target.value)}
                title={"B)Devam eden veya başarı ile tamamlanmış AB Çerçeve programı bilimsel araştırma projesinde ortak araştırmacı olmak  (10 PUAN)"}
            />
            <QuestionItem
                value={formik.values.questions.section_7.questions_3}
                name={"questions.section_7.questions_3"}
                onChange={(e) => formik.setFieldValue("questions.section_5.questions_3", e.target.value)}
                title={"C)Devam eden veya başarı ile tamamlanmış a ve b bentleri dışındaki uluslararası destekli bilimsel araştırma projelerinde (derleme ve rapor hazırlama çalışmaları hariç) görev almak  (6 PUAN)"}
                paragraf_direction={"down"}
            />
            <QuestionItem
                value={formik.values.questions.section_7.questions_4}
                name={"questions.section_7.questions_4"}
                onChange={(e) => formik.setFieldValue("questions.section_7.questions_4", e.target.value)}
                title={"D)Üniversite dışındaki kamu kurumlarıyla yapılan başarıyla tamamlanmış veya devam eden bilimsel araştırma projelerinde görev almak   (4 PUAN)"}
                paragraf={"Bu maddeden en fazla 20 puan alınabilir."}
                paragraf_direction={"down"}
            />
            
        </>

    );
}

export default BilimselArastirmaProjesi;
