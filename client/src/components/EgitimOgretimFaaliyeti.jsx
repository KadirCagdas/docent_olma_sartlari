import React from 'react';
import { useFormikContext } from 'formik';
import QuestionItem from './QuestionItem';

const EgitimOgretimFaaliyeti = () => {
    const formik = useFormikContext();
    console.log(formik.values);

    return (
        <>
            <>
                <QuestionItem
                    value={formik.values.questions.section_9.questions_1}
                    name={"questions.section_9.questions_1"}
                    onChange={(e) => formik.setFieldValue("questions.section_9.questions_1", e.target.value)}
                    header={"9. Eğitim-Öğretim Faaliyeti"}
                    paragraf={"Doktora eğitimini tamamladıktan sonra, açık, uzaktan veya yüz yüze ortamlarda verilmiş ders"}
                    paragraf_direction={"up"}
                    title={"A) Bir dönem yüksek lisans veya doktora dersi  (3 PUAN)"}
                />
              
                <QuestionItem
                    value={formik.values.questions.section_9.questions_2}
                    name={"questions.section_9.questions_2"}
                    onChange={(e) => formik.setFieldValue("questions.section_9.questions_2", e.target.value)}
                    title={"B) Bir dönem önlisans veya lisans dersi (2 PUAN)"}
                    paragraf={"Bu madde kapsamında en az 2 puan almak zorunludur, ancak en fazla 4 puan alınabilir. Yurtiçi veya YÖK tarafından tanınan yurtdışı yükseköğretim kurumlarında en az 2 yıl eğitim ve öğretim faaliyetinde bulunanlar 2 puan almış sayılır."}
                    paragraf_direction={"down"}
                />

            </>


        </>

    );
}

export default EgitimOgretimFaaliyeti;
